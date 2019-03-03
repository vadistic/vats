import { hostThunkHelpers } from '../host/thunks'
import {
  CandidateActions,
  CandidateDispatch,
  CandidateGraphqlTyping,
  candidateHostConfig,
  CandidateHostTyping,
  CandidateState,
  CandidateValue,
} from './host'

/*
 * THUNKS
 */

const candidateThunkHelpers = hostThunkHelpers<CandidateHostTyping, CandidateGraphqlTyping>(
  candidateHostConfig,
)

export const updateCandidate = (value: CandidateValue) => async (
  dispatch: CandidateDispatch,
  state: CandidateState,
) => {
  candidateThunkHelpers.autoUpdate(state, value)
  dispatch(CandidateActions.setEditable(false))
}
