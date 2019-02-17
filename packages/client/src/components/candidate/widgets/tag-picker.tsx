import { css } from '@emotion/core'
import FuzzySearch from 'fuzzy-search'
import gql from 'graphql-tag'
import { TagItem, TagItemSuggestion, TagPicker } from 'office-ui-fabric-react'
import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { TagFragment } from '../../../generated/fragments'
import { TagsQuery } from '../../../generated/queries'
import { filterNull, getLoPath, Omit } from '../../../utils'
import {
  displayFieldFactory,
  FormikTagPicker,
  FormikTagsPickerProps,
  suspendField,
} from '../../editable'
import { CandidateValue } from '../host'

type TagsValue = NonNullable<CandidateValue['tags']>

type PoweredTagPickerProps = Omit<FormikTagsPickerProps<TagsValue>, 'onResolveSuggestions'>

const PoweredTagPicker: React.FC<PoweredTagPickerProps> = ({ onRemoveSuggestion, ...rest }) => {
  const tagData = useQuery<TagsQuery>(TAGS_QUERY)

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

  const handleResolveSuggestions = (filterText: string, tagList: TagsValue | undefined) => {
    const result = searcher
      .search(filterText)
      .filter(tag => (tagList ? !tagList.some(tagListItem => tagListItem.id === tag.id) : true))

    return filterText ? result : []
  }

  return <FormikTagPicker onResolveSuggestions={handleResolveSuggestions} {...rest} />
}

export const TAGS_QUERY = gql`
  query TagsQuery($where: TagWhereInput) {
    tags(where: $where) {
      ...Tag
    }
  }

  ${TagFragment}
`

export const DisplayTagPicker = displayFieldFactory({
  fallbackComponent: TagPicker,
  formikComponent: suspendField(PoweredTagPicker),
  fallbackValueProp: 'selectedItems',
  defaultProps: ({ editable }) => ({
    inputProps: { autoComplete: 'off' },
    pickerSuggestionsProps: {
      suggestionsHeaderText: 'Suggested Tags',
      noResultsFoundText: 'No Tags Found',
    },
    onRenderItem: ({ item, ...rest }: any) => (
      <TagItem {...rest} key={item.id} styles={{ close: !editable && { display: 'none' } }}>
        {item.label}
      </TagItem>
    ),
    onRenderSuggestionsItem: (item: any) => (
      <TagItemSuggestion key={item.id}>{item.label}</TagItemSuggestion>
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
