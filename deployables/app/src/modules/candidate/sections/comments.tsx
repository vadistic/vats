import gql from 'graphql-tag'
import { toJS } from 'mobx'
import React, { useContext } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { Comments, suspendComments } from '../../../components'
import { CommentFragment, UserFragment } from '../../../generated/fragments'
import { CandidateCommentsQuery, CandidateCommentsQueryVariables } from '../../../generated/queries'
import { CandidateContext } from '../store'

export const CandidateCommentsBase: React.FC = () => {
  const store = useContext(CandidateContext)

  const res = useQuery<CandidateCommentsQuery, CandidateCommentsQueryVariables>(
    CANDIDATE_COMMENTS_QUERY,
    {
      variables: toJS(store.variables),
      suspend: true,
    },
  )

  if (!res || !res.data || !res.data.candidate) {
    return null
  }

  const comments = res.data.candidate.comments

  if (comments) {
    return <Comments comments={comments} />
  }

  return null
}

export const CandidateCommentsSection = suspendComments(CandidateCommentsBase)

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
