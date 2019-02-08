import React from 'react'
import { Candidate, CandidateQueryVariables } from '../../generated/queries'
import { ICandidateActions } from './reducer'

export interface ICandidateContext {
  candidate: Candidate
  dispatch: React.Dispatch<ICandidateActions>
  state: ICandidateState
}

export const CandidateContext: React.Context<ICandidateContext> = React.createContext({} as any)

export interface ICandidateState {
  variables: {
    where: CandidateQueryVariables['where']
  }
  local: {}
}

export interface ICandidateContextInitOptions {
  id: string
}

export const init = ({ id }: ICandidateContextInitOptions) => (
  state: ICandidateState,
): ICandidateState => ({
  variables: {
    where: {
      id,
    },
  },
  local: {},
})
