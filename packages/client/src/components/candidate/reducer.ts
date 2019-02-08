import produce from 'immer'
import { tuplify, useInspectedReducer } from '../../utils'
import { ICandidateReducerInitArg, ICandidateState, init } from './context'

export enum CandidateActionType {
  Reset = 'RESET',
  Edit = 'EDIT',
  Submit = 'SUBMIT',
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
  | {
      type: CandidateActionType.Edit
      editable?: boolean
    }

export const candidateReducer = produce<ICandidateState, [ICandidateActions]>((draft, action) => {
  switch (action.type) {
    case CandidateActionType.Reset:
      return init(action.initArg)
    case CandidateActionType.Edit:
      draft.local.editable = action.editable || !draft.local.editable
      return
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
