import produce from 'immer'
import { useInspectedReducer } from '../../utils'
import { ICandidatesState, initalState } from './context'

export enum CandidatesActionType {}

export interface ICandidatesActions {
  type: CandidatesActionType
}

export const candidatesReducer = produce<ICandidatesState, [ICandidatesActions]>(
  (draft, action) => {
    switch (action.type) {
      default:
        // noop
        return
    }
  },
)

export const useCandidatesReducer = () =>
  useInspectedReducer(candidatesReducer, initalState, undefined as any, 'CANDIDATES_CONTEXT')
