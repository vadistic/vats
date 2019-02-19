import gql from 'graphql-tag'
import { SourceFragment } from '../../../generated/fragments'
import { Source } from '../../../generated/queries'
import { DisplayPicker, OnCreateData, PoweredPickerProps } from '../../display'
import { IFieldProps } from '../../formik'

export type SourcesValue = Source[]

export interface IDisplaySourcePickerProps extends IFieldProps {}

export const DisplaySourcePicker: React.FC<IDisplaySourcePickerProps> = props => {
  const handleCreateData: OnCreateData<SourcesValue> = ({ inputValue }) => ({
    label: inputValue,
  })

  return (
    <DisplayPicker<PoweredPickerProps<SourcesValue>>
      graphql={{
        query: SOURCES_QUERY,
        queryRoot: 'sources',
        createMutation: SOURCE_CREATE_MUTATION,
        createMutationRoot: 'createSource',
      }}
      variables={undefined}
      onCreateData={handleCreateData}
      displayProp="label"
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
