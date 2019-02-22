import { css } from '@emotion/core'
import { useFormikContext } from 'formik'
import FuzzySearch from 'fuzzy-search'
import { DocumentNode } from 'graphql'
import { IPickerItemProps, TagItem, TagItemSuggestion } from 'office-ui-fabric-react'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { useApolloClient } from 'react-apollo-hooks'
import { useTranslation } from '../../i18n'
import { ElementType, filterNull, getInByPath, Omit } from '../../utils'
import { Box } from '../box'
import { useEditableContext } from '../editable'
import { CustomBasePicker, CustomPicker, FormikPicker, FormikPickerProps } from '../formik'
import { DisplayActionButton } from './button'
import { DisplayLabel, IDisplayLabelProps } from './label'

export interface IPoweredPickerOwnProps<V extends any[]> {
  displayProp: keyof ElementType<V>
  labelProps?: IDisplayLabelProps
  variables: any
  onCreateData: OnCreateData<V>
  graphql: {
    query: DocumentNode
    queryRoot: string
    createMutation: DocumentNode
    createMutationRoot: string
  }
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
  FormikPickerProps<V>,
  'onResolveSuggestions'
> &
  IPoweredPickerOwnProps<V>

const PoweredPicker: React.FC<PoweredPickerProps<any[]>> = ({
  graphql,
  onCreateData,
  variables,
  selectedItems,
  ...rest
}) => {
  type PickerType = CustomBasePicker<any>
  const picker = useRef<PickerType>(undefined as any)
  const client = useApolloClient()
  const { tp } = useTranslation()

  const { setFieldValue } = useFormikContext<any>()

  const { name, displayProp } = rest

  const [values, setValues] = useState([] as any[])

  const safeSelectedItems = Array.isArray(selectedItems) ? selectedItems : []

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

  // I'd like to simply useMemo for searcher initialization,
  // but it would skip inital state suggestion for the first typed letter
  // or need to load index query on page load
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

      const tempItems = [...safeSelectedItems, { [displayProp]: inputValue, id: 'TEMP' }]

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
        setFieldValue(name, [...safeSelectedItems, mutationRes.data[graphql.createMutationRoot]])
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

      const duplicate = safeSelectedItems.some(item => item[displayProp] === inputValue)

      const noResultsText: string =
        (rest.pickerSuggestionsProps && rest.pickerSuggestionsProps.noResultsFoundText) ||
        tp.helper.noResults()

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
              {tp.action.create()} "{inputValue}"
            </DisplayActionButton>
          )}
        </Box>
      )
    }
    return null
  }

  return (
    <FormikPicker
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

export type DisplayPickerI<V extends any[]> = React.FC<PoweredPickerProps<V>>

export const DisplayPicker: React.FC<PoweredPickerProps<any[]>> = props => {
  const { editable, values } = useEditableContext()

  const { displayProp, labelProps, name } = props

  const selectedItems = getInByPath(values, name)

  const styles = css`
    input {
      background-color: inherit;

      ${!editable &&
        css`
          display: none;
        `}
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
  `

  type ItemRenderFunction = (props: IPickerItemProps<any>) => JSX.Element
  const renderItem: ItemRenderFunction = ({ item, index, ...rest }) => (
    <TagItem
      {...rest}
      index={index}
      item={item}
      key={item.id || item.key || item.label}
      styles={{ close: !editable && { display: 'none' } }}
    >
      {item[displayProp]}
    </TagItem>
  )

  const label = labelProps ? <DisplayLabel {...labelProps} /> : null

  const picker = editable ? (
    <PoweredPicker
      css={styles}
      onRenderItem={renderItem}
      selectedItems={selectedItems}
      {...props}
    />
  ) : (
    <CustomPicker
      css={styles}
      onRenderItem={renderItem}
      selectedItems={selectedItems}
      onResolveSuggestions={() => []}
    />
  )

  return (
    <Box>
      {label}
      {picker}
    </Box>
  )
}
