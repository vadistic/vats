import { useTranslation } from '@vats/i18n'
import gql from 'graphql-tag'
import React from 'react'
import { TagFragment } from '../../../generated/fragments'
import { Tag } from '../../../generated/queries'
import { DisplayPicker, OnCreateData } from '../../picker'

export type TagsValue = Tag[]

export interface DisplayTagPickerProps {}

export const DisplayTagPicker: React.FC<DisplayTagPickerProps> = props => {
  const { tp } = useTranslation()

  const handleCreateData: OnCreateData<TagsValue> = ({ inputValue }) => ({
    label: inputValue,
  })

  return (
    <DisplayPicker
      name="tags"
      labelProps={{
        iconProps: {
          iconName: 'tag',
        },
        text: tp.candidate.tag({ count: 3 }),
      }}
      graphql={{
        query: TAGS_QUERY,
        queryRoot: 'tags',
        createMutation: TAG_CREATE_MUTATION,
        createMutationRoot: 'createTag',
      }}
      variables={undefined}
      onCreateData={handleCreateData}
      tagItemMap={{
        display: 'label',
        title: 'description',
      }}
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
