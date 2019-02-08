import React from 'react'
import { Candidate, CandidatesQueryVariables } from '../../generated/queries'
import { SortDirection } from '../../utils'
import { ICandidatesActions } from './reducer'
import { CandidatesSortBy } from './sort'

export interface ICandidatesState {
  variables: {
    where: CandidatesQueryVariables['where']
  }
  local: {
    sortBy: CandidatesSortBy
    sortDirection: SortDirection
  }
}

export const initalState: ICandidatesState = {
  variables: {
    where: undefined,
  },
  local: {
    sortBy: CandidatesSortBy.UpdatedAt,
    sortDirection: SortDirection.DESCENDING,
  },
}

export interface ICandidatesContext {
  candidates: Candidate[]
  dispatch: React.Dispatch<ICandidatesActions>
  state: ICandidatesState
}

export const CandidatesContext: React.Context<ICandidatesContext> = React.createContext({} as any)
