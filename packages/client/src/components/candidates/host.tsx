import gql from 'graphql-tag'
import { CandidateFragment } from '../../generated/fragments'
import { CandidatesQuery_candidates, CandidatesQueryVariables } from '../../generated/queries'
import { CANDIDATE_UPDATE_MUTATION } from '../candidate/host'
import { hostFactory, HostType, IHostTyping } from '../host'
import {
  CandidatesActions,
  CandidatesHostLocalState,
  candidatesReducer,
  candidatesStateInit,
} from './reducer'

export const CANDIDATES_QUERY = gql`
  query CandidatesQuery($where: CandidateWhereInput) {
    candidates(where: $where) {
      phones
      emails
      links
      ...Candidate
    }
  }

  ${CandidateFragment}
`

export type CandidatesValue = CandidatesQuery_candidates[]

export type CandidatesHostTyping = IHostTyping<
  CandidatesHostLocalState,
  CandidatesActions,
  CandidatesQueryVariables | undefined,
  CandidatesQueryVariables,
  CandidatesValue
>

export type CandidatesState = CandidatesHostTyping['state']

const candidatesHostConfig: CandidatesHostTyping['config'] = {
  displayName: 'CANDIDATES',
  rootField: 'candidates',
  type: HostType.Multi,
  init: candidatesStateInit,
  reducer: candidatesReducer,
  query: CANDIDATES_QUERY,
  updateMutation: CANDIDATE_UPDATE_MUTATION,
  resetOnInitArgChange: true,
  // TODO: specific init variables?
  initVariables: () => ({
    where: null,
  }),
}

export const {
  Host: CandidatesHost,
  useContext: useCandidatesContext,
  Context: CandidatesContext,
} = hostFactory<CandidatesHostTyping>(candidatesHostConfig)
