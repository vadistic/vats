import gql from 'graphql-tag'
import { CandidateFragment } from '../../generated/fragments'
import { Candidate } from '../../generated/queries'
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

export type CandidateValue = Candidate

const candidateHostConfig: IHostConfig<
  CandidateValue,
  ICandidateState,
  ICandidateActions,
  ICandidateHostInitArg
> = {
  query: CANDIDATE_QUERY,
  name: 'CANDIDATE_HOST',
  propName: 'candidate',
  type: HostType.Single,
  reducer: candidateReducer,
  init: candidateStateInit,
}

export const { Host: CandidateHost, useContext: useCandidateContext } = hostFactory(
  candidateHostConfig,
)
