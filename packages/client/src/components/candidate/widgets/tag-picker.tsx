import gql from 'graphql-tag'
import { TagFragment } from '../../../generated/fragments'
import { Tag } from '../../../generated/queries'
import { useIntl } from '../../../i18n'
import { DisplayPicker, DisplayPickerI, OnCreateData } from '../../display'
import { IFieldProps } from '../../formik'

export type TagsValue = Tag[]

export interface IDisplayTagPickerProps extends IFieldProps {}

const DisplayTagPickerBase = DisplayPicker as DisplayPickerI<TagsValue>

export const DisplayTagPicker: React.FC<IDisplayTagPickerProps> = props => {
  const { intl } = useIntl()

  const handleCreateData: OnCreateData<TagsValue> = ({ inputValue }) => ({
    label: inputValue,
  })

  return (
    <DisplayTagPickerBase
      labelProps={{
        iconProps: {
          iconName: 'tag',
        },
        text: intl({ count: 3 }, 'candidate', 'tags'),
      }}
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
