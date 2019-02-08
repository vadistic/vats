import produce from 'immer'
import { useInspectedReducer } from '../../utils'
import { ICandidateContextInitOptions, ICandidateState, init } from './context'

export enum CandidateActionType {}

export interface ICandidateActions {
  type: CandidateActionType
}

export const candidateReducer = produce<ICandidateState, [ICandidateActions]>((draft, action) => {
  switch (action.type) {
    default:
      // noop
      return
  }
})

export const useCandidateReducer = (initOptions: ICandidateContextInitOptions) =>
  useInspectedReducer(candidateReducer, undefined as any, init(initOptions), 'CANDIDATE_CONTEXT')
