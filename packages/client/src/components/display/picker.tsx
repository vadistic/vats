import { css } from '@emotion/core'
import { useFormikContext } from 'formik'
import FuzzySearch from 'fuzzy-search'
import { DocumentNode } from 'graphql'
import { IPickerItemProps, TagItem, TagItemSuggestion } from 'office-ui-fabric-react'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { useApolloClient } from 'react-apollo-hooks'
import { useIntl } from '../../i18n'
import { ElementType, filterNull, Omit } from '../../utils'
import { Box } from '../box'
import {
  CustomBasePicker,
  CustomPicker,
  FormikCustomPicker,
  FormikCustomPickerProps,
  IFieldProps,
} from '../formik'
import { DisplayActionButton } from './button'
import { displayFieldFactory } from './factory'
import { DisplayLabel, IDisplayLabelProps } from './label'

type PoweredPickerBaseProps<V extends any[] = any[]> = FormikCustomPickerProps<V> &
  IFieldProps & {
    displayProp: keyof ElementType<V>
    editable?: boolean
    labelProps?: IDisplayLabelProps
  }

type ItemRenderFunction = (props: IPickerItemProps<any>) => JSX.Element

const PoweredPickerBase: React.FC<PoweredPickerBaseProps> = ({
  editable,
  displayProp,
  labelProps,
  ...rest
}) => {
  const renderItem: ItemRenderFunction = ({ item, index, ..._rest }) => (
    <TagItem
      {..._rest}
      index={index}
      item={item}
      key={item.id}
      styles={{ close: !editable && { display: 'none' } }}
    >
      {item[displayProp]}
    </TagItem>
  )

  return (
    <Box>
      {labelProps && <DisplayLabel {...labelProps} />}
      {(() => {
        if (editable) {
          return <FormikCustomPicker onRenderItem={renderItem} {...rest} />
        }
        if (rest.selectedItems && rest.selectedItems.length !== 0) {
          return <CustomPicker onRenderItem={renderItem} {...rest} />
        }
      })()}
    </Box>
  )
}

interface IOnCreateDataProp<V extends any[]> {
  inputValue: string
  displayProp: keyof ElementType<V>
}

export type OnCreateData<V extends any[]> = ({
  inputValue,
  displayProp,
}: IOnCreateDataProp<V>) => Partial<ElementType<V>>

export type PoweredPickerProps<V extends any[] = any[]> = Omit<
  PoweredPickerBaseProps<V>,
  'onResolveSuggestions'
> & {
  variables: any
  graphql: {
    query: DocumentNode
    queryRoot: string
    createMutation: DocumentNode
    createMutationRoot: string
  }
  onCreateData: OnCreateData<V>
}

type PickerType<V> = CustomBasePicker<ElementType<V>>

const PoweredPicker: React.FC<PoweredPickerProps<any[]>> = ({
  graphql,
  onCreateData,
  variables,
  ...rest
}) => {
  const picker = useRef<PickerType<any>>(undefined as any)
  const client = useApolloClient()
  const { intl } = useIntl()

  const { setFieldValue, getFieldProps } = useFormikContext<any>()

  const { name, displayProp } = rest

  // values in state only to access them in create button section
  const [values, setValues] = useState([] as any[])

  // calback to load value only whn needed
  const loadValues = useCallback(async () => {
    const queryRes = await client.query<any>({
      query: graphql.query,
      variables,
    })

    if (!queryRes || !queryRes.data) {
      console.error('No data')
      return []
    }
    const result = filterNull<any>(queryRes.data[graphql.queryRoot])
    setValues(result)
    return result
  }, [variables])

  // I'd like to useMemo for searcher initialization,
  // but it would skip inital state suggestion for the first typed letter or load index query too quickly
  // it's a duplication, but seems like the most effective way
  const loadFirstRenderSearcher = useCallback(
    async () =>
      new FuzzySearch<any>(await loadValues(), [displayProp as string], {
        caseSensitive: false,
        sort: true,
      }),
    [variables],
  )

  const searcher = useMemo(
    () =>
      new FuzzySearch<any>(values, [displayProp as string], {
        caseSensitive: false,
        sort: true,
      }),
    [variables, values],
  )

  const create = async () => {
    if (picker.current && picker.current.inputComponentRef.current) {
      const _picker = picker.current
      const _input = picker.current.inputComponentRef.current
      const inputValue = picker.current.inputComponentRef.current.value.trim()

      const [{ value: prev }] = getFieldProps(name)
      const safePrev = Array.isArray(prev) ? prev : []
      const tempItems = [...safePrev, { [displayProp]: inputValue, id: 'TEMP' }]

      _picker.dismissSuggestions()
      _input.clear()

      // for one render to show it without delay
      _picker.setState({ items: tempItems })

      const mutationRes = await client.mutate<any>({
        mutation: graphql.createMutation,
        variables: {
          data: {
            ...onCreateData({ displayProp, inputValue }),
          },
        },
      })

      if (mutationRes && mutationRes.data) {
        setFieldValue(name, [...safePrev, mutationRes.data[graphql.createMutationRoot]])
      }
    }
  }

  const handleResolveSuggestions = async (filterText: string, list: any[] | undefined) => {
    if (!filterText) {
      return []
    }

    const _searcher = values.length === 0 ? await loadFirstRenderSearcher() : searcher

    return _searcher
      .search(filterText)
      .filter(value => (list ? !list.some(listItem => listItem.id === value.id) : true))
  }

  const handleClick = () => {
    create()
  }

  const renderSuggestionItem = (item: any) => (
    <TagItemSuggestion key={item.id}>{item[displayProp]}</TagItemSuggestion>
  )

  const renderNoResultFound = () => {
    if (picker.current && picker.current.inputComponentRef.current) {
      const inputValue = picker.current.inputComponentRef.current.value.trim()

      const duplicate = values.some(value => value[displayProp] === inputValue)

      const noResultsText: string =
        (rest.pickerSuggestionsProps && rest.pickerSuggestionsProps.noResultsFoundText) ||
        intl(null, 'helper', 'noResults')

      const createText: string = intl(null, 'helper', 'create')

      return (
        <Box
          role="alert"
          css={({ palette, fonts, sizes }) => ({
            fontSize: fonts.small.fontSize,
            color: palette.neutralSecondary,
            height: sizes.s3,
            justifyContent: 'center',
            padding: '0 12px',
          })}
        >
          {duplicate ? (
            <span>{noResultsText}</span>
          ) : (
            <DisplayActionButton
              css={{ padding: 0, height: '100%' }}
              iconProps={{ iconName: 'triggerApproval' }}
              onClick={handleClick}
            >
              {createText} "{inputValue}"
            </DisplayActionButton>
          )}
        </Box>
      )
    }
    return null
  }

  return (
    <PoweredPickerBase
      {...rest}
      componentRef={picker}
      onResolveSuggestions={handleResolveSuggestions}
      onRenderSuggestionsItem={renderSuggestionItem}
      pickerSuggestionsProps={{
        ...rest.pickerSuggestionsProps,
        onRenderNoResultFound: renderNoResultFound,
      }}
    />
  )
}

export const DisplayPicker = displayFieldFactory<PoweredPickerProps>({
  formikComponent: PoweredPicker,
  fallbackComponent: PoweredPickerBase,
  fallbackValueProp: 'selectedItems',
  setProps: ({ ...rest }) => ({
    ...rest,
  }),
  cssProp: ({ editable }) => css`
    input {
      background-color: inherit;

      ${!editable && `display: none`};
    }

    .ms-BasePicker-text {
      background-color: inherit;
      border-top: none;
      border-left: none;
      border-right: none;
    }

    .ms-BasePicker-text:after {
      background: inherit;
    }
  `,
})
