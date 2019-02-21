import gql from 'graphql-tag'
import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { CommentFragment, UserFragment } from '../../../generated/fragments'
import { CandidateCommentsQuery, CandidateCommentsQueryVariables } from '../../../generated/queries'
import { Comments, suspendComments } from '../../comments'
import { useCandidateContext } from '../host'

export const CandidateCommentsBase: React.FC = () => {
  const {
    state: { variables },
  } = useCandidateContext()

  const res = useQuery<CandidateCommentsQuery, CandidateCommentsQueryVariables>(
    CANDIDATE_COMMENTS_QUERY,
    {
      variables,
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

export const CandidateComments = suspendComments(CandidateCommentsBase)

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
