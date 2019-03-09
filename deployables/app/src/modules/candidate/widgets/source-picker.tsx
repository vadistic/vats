import { useTranslation } from '@vats/i18n'
import gql from 'graphql-tag'
import React from 'react'
import { DisplayPicker, OnCreateData } from '../../../components'
import { SourceFragment } from '../../../generated/fragments'
import { Source } from '../../../generated/queries'

export type SourcesValue = Source[]

export interface DisplaySourcePickerProps {}

export const DisplaySourcePicker: React.FC<DisplaySourcePickerProps> = props => {
  const { tp } = useTranslation()

  const handleCreateData: OnCreateData<SourcesValue> = ({ inputValue }) => ({
    label: inputValue,
  })

  return (
    <DisplayPicker
      name="sources"
      labelProps={{
        iconProps: {
          iconName: 'opensource',
        },
        text: tp.candidate.source({ count: 3 }),
      }}
      graphql={{
        query: SOURCES_QUERY,
        queryRoot: 'sources',
        createMutation: SOURCE_CREATE_MUTATION,
        createMutationRoot: 'createSource',
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

export const SOURCES_QUERY = gql`
  query SourcesQuery($where: SourceWhereInput) {
    sources(where: $where) {
      ...Source
    }
  }

  ${SourceFragment}
`

export const SOURCE_CREATE_MUTATION = gql`
  mutation TagCreateMutation($data: SourceCreateInput!) {
    createSource(data: $data) {
      ...Source
    }
  }

  ${SourceFragment}
`
