import gql from 'graphql-tag'
import { CandidateFragment } from '../../generated/fragments'

export const CANDIDATES_QUERY = gql`
  query CandidatesQuery($where: CandidateWhereInput) {
    candidates(where: $where) {
      phones
      emails
      links
      resumesString
      coverLettersString
      ...Candidate

      applications {
        job {
          id
          name
        }
        stage {
          id
          name
          type
          description
        }
      }
    }
  }

  ${CandidateFragment}
`

export const CANDIDATES_UPDATE_MANY_MUTATION = gql`
  mutation CandidatesUpdateManyMutation(
    $where: CandidateWhereInput!
    $data: CandidateUpdateManyMutationInput!
  ) {
    updateManyCandidates(data: $data, where: $where) {
      count
    }
  }
`

export const CANDIDATES_DELETE_MANY_MUTATION = gql`
  mutation CandidatesDeleteManyMutation($where: CandidateWhereInput!) {
    deleteManyCandidates(where: $where) {
      count
    }
  }
`
