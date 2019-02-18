import gql from 'graphql-tag'
import { TagFragment } from '../../../generated/fragments'
import { IFieldProps } from '../../editable'
import { DisplayPicker, OnCreateData } from './picker'

export interface IDisplayTagPickerProps extends IFieldProps {}

export const DisplayTagPicker: React.FC<IDisplayTagPickerProps> = props => {
  const handleCreateData: OnCreateData = ({ inputValue }) => ({
    label: inputValue,
  })

  return (
    <DisplayPicker
      graphql={{
        query: TAGS_QUERY,
        queryRoot: 'tags',
        createMutation: TAG_CREATE_MUTATION,
        createMutationRoot: 'createTag',
      }}
      variables={undefined}
      onCreateData={handleCreateData}
      displayProp="label"
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
