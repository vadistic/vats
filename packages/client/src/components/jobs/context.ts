import produce from 'immer'
import React from 'react'
import { Job, JobsQueryVariables } from '../../generated/queries'
import { SortDirection, useInspectedReducer } from '../../utils'
import { IJobsActions } from './reducer'
import { JobsSortBy } from './sort'

export interface IJobsState {
  variables: {
    where: JobsQueryVariables['where']
  }
  local: {
    sortBy: JobsSortBy
    sortDirection: SortDirection
  }
}

export const initalState: IJobsState = {
  variables: {
    where: undefined,
  },
  local: {
    sortBy: JobsSortBy.Name,
    sortDirection: SortDirection.DESCENDING,
  },
}

export interface IJobsContext {
  jobs: Job[]
  dispatch: React.Dispatch<IJobsActions>
  state: IJobsState
}

export const JobsContext: React.Context<IJobsContext> = React.createContext({} as any)
