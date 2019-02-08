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
  local: {
    editable: boolean
  }
}

export interface ICandidateReducerInitArg {
  id: string
}

export const init = ({ id }: ICandidateReducerInitArg): ICandidateState => ({
  variables: {
    where: {
      id,
    },
  },
  local: {
    editable: false,
  },
})
