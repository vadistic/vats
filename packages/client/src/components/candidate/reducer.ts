import produce from 'immer'
import { tuplify, useInspectedReducer } from '../../utils'
import { ICandidateReducerInitArg, ICandidateState, init } from './context'

export enum CandidateActionType {
  Reset = 'RESET',
  Noop = 'NOOP',
}

export type ICandidateActions =
  | {
      type: CandidateActionType.Noop
    }
  | {
      type: CandidateActionType.Reset
      initArg: ICandidateReducerInitArg
    }

export const candidateReducer = produce<ICandidateState, [ICandidateActions]>((draft, action) => {
  switch (action.type) {
    case CandidateActionType.Reset:
      console.log('candidate reset')
      console.log(draft.variables.where.id, action.initArg.id)

      return init(action.initArg)
    default:
      // noop
      return
  }
})

export const useCandidateReducer = (initArg: ICandidateReducerInitArg) => {
  const [state, dispatch] = useInspectedReducer(
    candidateReducer,
    initArg,
    init,
    'CANDIDATE_CONTEXT',
  )

  if (state.variables.where.id !== initArg.id) {
    dispatch({ type: CandidateActionType.Reset, initArg })
  }

  return tuplify([state, dispatch])
}
