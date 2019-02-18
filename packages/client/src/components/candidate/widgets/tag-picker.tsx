import { css } from '@emotion/core'
import { useFormikContext } from 'formik'
import FuzzySearch from 'fuzzy-search'
import gql from 'graphql-tag'
import { ActionButton, TagItem, TagItemSuggestion, TagPicker } from 'office-ui-fabric-react'
import React, { useRef } from 'react'
import { useApolloClient, useQuery } from 'react-apollo-hooks'
import { TagFragment } from '../../../generated/fragments'
import {
  TagCreateMutation,
  TagCreateMutationVariables,
  TagsQuery,
} from '../../../generated/queries'
import { ElementType, filterNull, getLoPath, Omit } from '../../../utils'
import {
  CustomBasePicker,
  displayFieldFactory,
  FormikCustomTagPicker,
  FormikCustomTagPickerProps,
  suspendField,
} from '../../editable'
import { CandidateValue } from '../host'

type TagsValue = NonNullable<CandidateValue['tags']>
type SingleTagValue = ElementType<TagsValue>
type PickerType = CustomBasePicker<SingleTagValue>

type PoweredTagPickerProps = Omit<FormikCustomTagPickerProps, 'onResolveSuggestions'>

const PoweredTagPicker: React.FC<PoweredTagPickerProps> = props => {
  const picker = useRef<PickerType>(undefined as any)
  const tagData = useQuery<TagsQuery>(TAGS_QUERY)
  const client = useApolloClient()
  const { setFieldValue, getFieldProps } = useFormikContext<CandidateValue>()

  const { name } = props

  if (!tagData || !tagData.data) {
    console.error('No tag data')
    return null
  }

  const tags = filterNull(tagData.data.tags)
  const tagShape = tags[0]

  const searcher = new FuzzySearch(filterNull(tags), [getLoPath(tagShape, 'label')], {
    caseSensitive: false,
    sort: true,
  })

  const createTag = async () => {
    if (picker.current && picker.current.inputComponentRef.current) {
      const _picker = picker.current
      const _input = picker.current.inputComponentRef.current
      const inputValue = picker.current.inputComponentRef.current.value.trim()

      const [{ value: prevValue }] = getFieldProps(name)
      const safePrevValue = Array.isArray(prevValue) ? prevValue : []
      const tempItems = [...safePrevValue, { label: inputValue, id: 'TEMP_TAG' }]

      _picker.dismissSuggestions()
      _input.clear()

      // for one render to show it without delay
      _picker.setState({ items: tempItems })

      const res = await client.mutate<TagCreateMutation, TagCreateMutationVariables>({
        mutation: TAG_CREATE_MUTATION,
        variables: {
          data: {
            label: inputValue,
          },
        },
      })

      if (res && res.data) {
        setFieldValue(name as keyof CandidateValue, [...safePrevValue, res.data.createTag])
      }
    }
  }

  const handleResolveSuggestions = (filterText: string, tagList: TagsValue | undefined) => {
    const result = searcher
      .search(filterText)
      .filter(tag => (tagList ? !tagList.some(tagListItem => tagListItem.id === tag.id) : true))

    return filterText ? result : []
  }

  const handleClick = () => {
    createTag()
  }

  const renderSuggestionItem = (item: any) => (
    <TagItemSuggestion key={item.id}>{item.label}</TagItemSuggestion>
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
    <FormikCustomTagPicker
      componentRef={picker}
      onResolveSuggestions={handleResolveSuggestions}
      pickerSuggestionsProps={{
        suggestionsHeaderText: 'Suggested Tags',
        onRenderNoResultFound: renderNoResultFound,
      }}
      onRenderSuggestionsItem={renderSuggestionItem}
      {...props}
    />
  )
}

export const TAGS_QUERY = gql`
  query TagsQuery($where: TagWhereInput) {
    tags(where: $where) {
      ...Tag
    }
  }

  ${TagFragment}
`

export const TAG_CREATE_MUTATION = gql`
  mutation TagCreateMutation($data: TagCreateInput!) {
    createTag(data: $data) {
      ...Tag
    }
  }

  ${TagFragment}
`

export const DisplayTagPicker = displayFieldFactory({
  formikComponent: suspendField(PoweredTagPicker),
  fallbackComponent: TagPicker,
  fallbackValueProp: 'selectedItems',
  defaultProps: ({ editable, inputProps }) => ({
    inputProps: { autoComplete: 'off', ...inputProps },
    onRenderItem: ({ item, ...rest }: any) => (
      <TagItem {...rest} key={item.id} styles={{ close: !editable && { display: 'none' } }}>
        {item.label}
      </TagItem>
    ),
  }),
  cssProp: () => () => css`
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
