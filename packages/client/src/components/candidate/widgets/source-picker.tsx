import gql from 'graphql-tag'
import { SourceFragment } from '../../../generated/fragments'
import { Source } from '../../../generated/queries'
import { useIntl } from '../../../i18n'
import { DisplayPicker, DisplayPickerI, OnCreateData } from '../../display'
import { IFieldProps } from '../../formik'

export type SourcesValue = Source[]

export interface IDisplaySourcePickerProps extends IFieldProps {}

const DisplaySourcePickerBase = DisplayPicker as DisplayPickerI<SourcesValue>

export const DisplaySourcePicker: React.FC<IDisplaySourcePickerProps> = props => {
  const { intl } = useIntl()

  const handleCreateData: OnCreateData<SourcesValue> = ({ inputValue }) => ({
    label: inputValue,
  })

  return (
    <DisplaySourcePickerBase
      labelProps={{
        iconProps: {
          iconName: 'tag',
        },
        text: intl({ count: 3 }, 'candidate', 'sources'),
      }}
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
