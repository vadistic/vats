import gql from 'graphql-tag'
import { CandidateFragment } from '../../generated/fragments'
import { CandidateQuery_candidate } from '../../generated/queries'
import { hostFactory, HostType, IHostConfig } from '../host'
import {
  candidateReducer,
  candidateStateInit,
  ICandidateActions,
  ICandidateHostInitArg,
  ICandidateState,
} from './reducer'

export const CANDIDATE_QUERY = gql`
  query CandidateQuery($where: CandidateWhereUniqueInput!) {
    candidate(where: $where) {
      phones
      emails
      links
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
      ...Candidate
    }
  }

  ${CandidateFragment}
`

export type CandidateValue = CandidateQuery_candidate

const candidateHostConfig: IHostConfig<
  CandidateValue,
  ICandidateState,
  ICandidateActions,
  ICandidateHostInitArg
> = {
  name: 'CANDIDATE_HOST',
  propName: 'candidate',
  query: CANDIDATE_QUERY,
  updateMutation: CANDIDATE_UPDATE_MUTATION,
  type: HostType.Single,
  reducer: candidateReducer,
  init: candidateStateInit,
}

export const { Host: CandidateHost, useContext: useCandidateContext } = hostFactory(
  candidateHostConfig,
)
