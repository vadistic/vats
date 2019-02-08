import produce from 'immer'
import { SortDirection, useInspectedReducer } from '../../utils'
import { IJobsState, initalState } from './context'
import { JobsSortBy } from './sort'

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
      return
  }
})

export const useJobsReducer = () =>
  useInspectedReducer(jobsReducer, initalState, state => state, 'JOBS_CONTEXT')
