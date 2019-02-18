import { css } from '@emotion/core'
import { useFormikContext } from 'formik'
import FuzzySearch from 'fuzzy-search'
import { DocumentNode } from 'graphql'
import { ActionButton, IPickerItemProps, TagItem, TagItemSuggestion } from 'office-ui-fabric-react'
import React, { useCallback, useRef } from 'react'
import { useApolloClient } from 'react-apollo-hooks'
import { ElementType, filterNull, Omit } from '../../utils'
import {
  CustomBasePicker,
  CustomPicker,
  FormikCustomPicker,
  FormikCustomPickerProps,
} from '../formik'
import { displayFieldFactory } from './factory'

type PoweredPickerBaseProps<V = any> = FormikCustomPickerProps<V> & {
  displayProp: string
  editable?: boolean
}

type ItemRenderFunction = (props: IPickerItemProps<any>) => JSX.Element

const PoweredPickerBase: React.FC<PoweredPickerBaseProps> = props => {
  const { editable, displayProp } = props
  const renderItem: ItemRenderFunction = ({ item, ...rest }) => (
    <TagItem
      {...rest}
      item={item}
      key={item.id}
      styles={{ close: !editable && { display: 'none' } }}
    >
      {item[displayProp]}
    </TagItem>
  )

  return <FormikCustomPicker onRenderItem={renderItem} {...props} />
}

const PickerFallback: React.FC<PoweredPickerBaseProps> = props => {
  const { editable, displayProp } = props
  const renderItem: ItemRenderFunction = ({ item, ...rest }) => (
    <TagItem
      {...rest}
      item={item}
      key={item.id}
      styles={{ close: !editable && { display: 'none' } }}
    >
      {item[displayProp]}
    </TagItem>
  )

  return <CustomPicker onRenderItem={renderItem} {...props} />
}

interface IOnCreateDataProp {
  inputValue: string
  displayProp: string
}

export type OnCreateData = ({ inputValue, displayProp }: IOnCreateDataProp) => any

type PoweredPickerProps<V> = Omit<PoweredPickerBaseProps<V>, 'onResolveSuggestions'> & {
  variables: any
  graphql: {
    query: DocumentNode
    queryRoot: string
    createMutation: DocumentNode
    createMutationRoot: string
  }
  onCreateData: OnCreateData
}

type PickerType<V> = CustomBasePicker<ElementType<V>>

const PoweredPicker: React.FC<PoweredPickerProps<any>> = ({
  graphql,
  onCreateData,
  variables,
  ...rest
}) => {
  const picker = useRef<PickerType<any>>(undefined as any)
  const client = useApolloClient()

  const { setFieldValue, getFieldProps } = useFormikContext<any>()

  const { name, displayProp } = rest

  // calback to load value sonly when called
  const loadValues = useCallback(async () => {
    const queryRes = await client.query<any>({
      query: graphql.query,
      variables,
    })

    if (!queryRes || !queryRes.data) {
      console.error('No data')
      return []
    }

    return filterNull<any>(queryRes.data[graphql.queryRoot])
  }, [variables])

  // callback to memo searcher initialization
  const loadSearcher = useCallback(
    async () =>
      new FuzzySearch<any>(await loadValues(), [displayProp], {
        caseSensitive: false,
        sort: true,
      }),
    [variables],
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

    const searcher = await loadSearcher()

    return searcher
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
      return (
        <ActionButton
          iconProps={{ iconName: 'Add', css: { height: '0.5em', width: '0.5em' } }}
          onClick={handleClick}
        >
          Create "{inputValue}"
        </ActionButton>
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

export const DisplayPicker = displayFieldFactory({
  formikComponent: PoweredPicker,
  fallbackComponent: PickerFallback,
  fallbackValueProp: 'selectedItems',
  defaultProps: ({ editable }) => ({
    editable,
  }),
  cssProp: () => css`
    input {
      background-color: inherit;
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
