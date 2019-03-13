import gql from 'graphql-tag'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { Comments } from '../../../components'
import { CommentFragment, UserFragment } from '../../../generated/fragments'
import { CandidateCommentsQuery, CandidateCommentsQueryVariables } from '../../../generated/queries'
import { SingleCandidateContext } from '../store'

const CandidateCommentsSectionBase: React.FC = () => {
  const store = useContext(SingleCandidateContext)

  const res = useQuery<CandidateCommentsQuery, CandidateCommentsQueryVariables>(
    CANDIDATE_COMMENTS_QUERY,
    {
      variables: toJS(store.variables),
    },
  )

  if (res.loading) {
    return <p>Loading commnets...</p>
  }

  const comments = res.data && res.data.candidate && res.data.candidate.comments

  if (comments) {
    return <Comments comments={comments} />
  }

  return null
}

export const CandidateCommentsSection = observer(CandidateCommentsSectionBase)

const CANDIDATE_COMMENTS_QUERY = gql`
  query CandidateCommentsQuery($where: CandidateWhereUniqueInput!) {
    candidate(where: $where) {
      id
      __typename
      comments {
        ...Comment
        createdBy {
          ...User
        }
      }
    }
  }

  ${CommentFragment}
  ${UserFragment}
`
