import gql from 'graphql-tag'
import { CandidateFragment } from '../../generated/fragments'
import {
  CandidateQuery,
  CandidateQuery_candidate,
  CandidateQueryVariables,
} from '../../generated/queries'

import { createHost, GraphqlSingleTypingCreator, useHostContext } from '@vats/host'

/*
 * GRAPHQL
 */

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

export type CandidateValue = CandidateQuery_candidate

export const candidateHostInitState = {
  editable: false,
}

export type CandidateHostState = typeof candidateHostInitState

export const candidateHost = createHost<
  CandidateHostState,
  GraphqlSingleTypingCreator<{
    query: CandidateQuery
    queryVariables: CandidateQueryVariables
  }>
>({
  initState: candidateHostInitState,
  debug: true,
  graphql: {
    query: CANDIDATE_QUERY,
    createMutation: CANDIDATE_CREATE_MUTATION,
    updateMutation: CANDIDATE_UPDATE_MUTATION,
    deleteMutation: CANDIDATE_DELETE_MUTATION,
  },
  relations: {
    tags: {
      onCreate: 'connect',
      onDelete: 'disconnect',
    },
    sources: {
      onCreate: 'connect',
      onDelete: 'disconnect',
    },
  },
})

export const useCandidateHost = () => useHostContext(candidateHost)
