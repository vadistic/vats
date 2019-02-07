import produce from 'immer'
import React from 'react'
import { Job, JobsQuery, JobsQueryVariables } from '../../generated/queries'
import {
  filterNull,
  mutableSortByGetter,
  mutableSortByProp,
  SortDirection,
  useInspectedReducer,
} from '../../utils'

export interface IJobsState {
  variables: {
    where: JobsQueryVariables['where']
  }
  local: {
    sortBy: JobsSortBy
    sortDirection: SortDirection
  }
}

export interface IJobsContext {
  jobs: Job[]
  dispatch: React.Dispatch<IJobsActions>
  state: IJobsState
}

export const JobsContext: React.Context<IJobsContext> = React.createContext({} as any)

export enum JobsSortBy {
  Name = 'name',
  Department = 'department',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  // custom
  Applications = 'applications',
  Location = 'location',
}

type TJobsSortDisplayNamesMap = { [K in JobsSortBy]: string }

export const JobsSortDisplayNamesMap: TJobsSortDisplayNamesMap = {
  [JobsSortBy.Name]: 'job name',
  [JobsSortBy.Department]: 'department',
  [JobsSortBy.CreatedAt]: 'create date',
  [JobsSortBy.UpdatedAt]: 'update date',
  [JobsSortBy.Applications]: 'application',
  [JobsSortBy.Location]: 'location',
}

export const jobsSorter = (data: JobsQuery, state: IJobsState): Job[] => {
  const jobs = filterNull(data.jobs)
  switch (state.local.sortBy) {
    case JobsSortBy.Applications:
      return mutableSortByGetter(jobs, state.local.sortDirection, job =>
        job.applications ? job.applications.length : null,
      )
    // TODO: evaluate if sorting by city of first location makes any sense
    case JobsSortBy.Location:
      return mutableSortByGetter(jobs, state.local.sortDirection, job =>
        job.locations && job.locations[0] ? job.locations[0].city : null,
      )
    default:
      return mutableSortByProp(jobs, state.local.sortDirection, state.local.sortBy)
  }
}

export enum JobActionType {
  Refetch = 'REFETCH',
  SortBy = 'SORT_BY',
  SortDirection = 'SORT_DIRECTION',
}

export type IJobsActions =
  | {
      type: JobActionType.SortBy
      sortBy: JobsSortBy
    }
  | {
      type: JobActionType.Refetch
      data?: never
    }
  | {
      type: JobActionType.SortDirection
      sortDirection?: SortDirection
    }

export const jobsReducer = produce<IJobsState, [IJobsActions]>((draft, action) => {
  switch (action.type) {
    case JobActionType.Refetch:
      return
    case JobActionType.SortBy:
      draft.local.sortBy = action.sortBy
      return
    case JobActionType.SortDirection:
      draft.local.sortDirection = action.sortDirection || draft.local.sortDirection * -1
      return
    default:
      // noop
      return
  }
})

export const initalState: IJobsState = {
  variables: {
    where: undefined,
  },
  local: {
    sortBy: JobsSortBy.Name,
    sortDirection: SortDirection.DESCENDING,
  },
}

export const useJobsReducer = () =>
  useInspectedReducer(jobsReducer, initalState, undefined as any, 'JOBS_VIEW')
