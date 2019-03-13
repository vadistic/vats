import gql from 'graphql-tag'
import { CandidateFragment } from '../../generated/fragments'

export const CANDIDATE_QUERY = gql`
  query CandidateQuery($where: CandidateWhereUniqueInput!) {
    candidate(where: $where) {
      # TODO: Fix generate fragments
      phones
      emails
      links
      resumesString
      coverLettersString
      ...Candidate
    }
  }

  ${CandidateFragment}
`

export const CANDIDATE_CREATE_MUTATION = gql`
  mutation CandidateCreateMutation($data: CandidateCreateInput!) {
    createCandidate(data: $data) {
      phones
      emails

      links
      resumesString
      ...Candidate
    }
  }

  ${CandidateFragment}
`

export const CANDIDATE_UPDATE_MUTATION = gql`
  mutation CandidateUpdateMutation(
    $data: CandidateUpdateInput!
    $where: CandidateWhereUniqueInput!
  ) {
    updateCandidate(data: $data, where: $where) {
      phones
      emails
      links
      resumesString
      ...Candidate
    }
  }

  ${CandidateFragment}
`

export const CANDIDATE_DELETE_MUTATION = gql`
  mutation CandidateDeleteMutation($where: CandidateWhereUniqueInput!) {
    deleteCandidate(where: $where) {
      phones
      emails
      links
      resumesString
      ...Candidate
    }
  }

  ${CandidateFragment}
`
