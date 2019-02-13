import gql from 'graphql-tag'
import { CandidateFragment } from '../../generated/fragments'
import { CandidateQuery_candidate, CandidateQueryVariables } from '../../generated/queries'
import { hostFactory, HostType, IHostTyping } from '../host'
import {
  CandidateActions,
  CandidateHostLocalState,
  candidateReducer,
  candidateStateInit,
  ICandidateInitArg,
} from './reducer'

export const CANDIDATE_QUERY = gql`
  query CandidateQuery($where: CandidateWhereUniqueInput!) {
    candidate(where: $where) {
      # TODO: Fix generate fragments
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
      phones
      emails
      links
      ...Candidate
    }
  }

  ${CandidateFragment}
`

export type CandidateValue = CandidateQuery_candidate

export type CandidateHostTyping = IHostTyping<
  CandidateHostLocalState,
  CandidateActions,
  ICandidateInitArg,
  CandidateQueryVariables,
  CandidateValue
>

const candidateHostConfig: CandidateHostTyping['config'] = {
  displayName: 'CANDIDATE',
  rootField: 'candidate',
  type: HostType.Single,
  init: candidateStateInit,
  reducer: candidateReducer,
  query: CANDIDATE_QUERY,
  updateMutation: CANDIDATE_UPDATE_MUTATION,
  resetOnInitArgChange: true,
  initVariables: ({ id }) => ({ where: { id } }),
}

export const {
  Host: CandidateHost,
  useContext: useCandidateContext,
  Context: CandidateContext,
} = hostFactory<CandidateHostTyping>(candidateHostConfig)
