import gql from 'graphql-tag'
import { TagItem } from 'office-ui-fabric-react'
import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { TagFragment } from '../../../generated/fragments'
import { TagsQuery } from '../../../generated/queries'
import { DisplayTagPicker } from '../../editable'
import { useCandidateContext } from '../host'

const _testTags: any[] = [
  'black',
  'blue',
  'brown',
  'cyan',
  'green',
  'magenta',
  'mauve',
  'orange',
  'pink',
  'purple',
  'red',
  'rose',
  'violet',
  'white',
  'yellow',
].map(item => ({ key: item, name: item }))

export const MetaSection: React.FC = () => {
  const { state, dispatch } = useCandidateContext()

  const tagData = useQuery<TagsQuery>(TAGS_QUERY)

  if (!tagData || !tagData.data) {
    console.error('No tag data')
    return null
  }

  const tags = tagData.data.tags

  const handleResolveSuggestions = (filterText: string, tagList: any[] | undefined): any[] => {
    console.log('handleResolveSuggestions', filterText, tagList)
    return filterText ? tags : []
  }

  return (
    <>
      <DisplayTagPicker name="tags" onResolveSuggestions={handleResolveSuggestions} />
    </>
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
