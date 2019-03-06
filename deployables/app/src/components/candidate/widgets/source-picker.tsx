import { useTranslation } from '@vats/i18n'
import gql from 'graphql-tag'
import React from 'react'
import { SourceFragment } from '../../../generated/fragments'
import { Source } from '../../../generated/queries'
import { DisplayPicker, DisplayPickerI, OnCreateData } from '../../display'
import { FieldProps } from '../../formik'

export type SourcesValue = Source[]

export interface DisplaySourcePickerProps extends FieldProps {}

const DisplaySourcePickerBase = DisplayPicker as DisplayPickerI<SourcesValue>

export const DisplaySourcePicker: React.FC<DisplaySourcePickerProps> = props => {
  const { tp } = useTranslation()

  const handleCreateData: OnCreateData<SourcesValue> = ({ inputValue }) => ({
    label: inputValue,
  })

  return (
    <DisplaySourcePickerBase
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