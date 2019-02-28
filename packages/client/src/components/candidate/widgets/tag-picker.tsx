import gql from 'graphql-tag'
import React from 'react'
import { TagFragment } from '../../../generated/fragments'
import { Tag } from '../../../generated/queries'
import { useTranslation } from '../../../i18n'
import { DisplayPicker, DisplayPickerI, OnCreateData } from '../../display'
import { FieldProps } from '../../formik'

export type TagsValue = Tag[]

export interface DisplayTagPickerProps extends FieldProps {}

const DisplayTagPickerBase = DisplayPicker as DisplayPickerI<TagsValue>

export const DisplayTagPicker: React.FC<DisplayTagPickerProps> = props => {
  const { tp } = useTranslation()

  const handleCreateData: OnCreateData<TagsValue> = ({ inputValue }) => ({
    label: inputValue,
  })

  return (
    <DisplayTagPickerBase
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
