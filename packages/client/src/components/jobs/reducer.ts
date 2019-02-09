import produce from 'immer'
import { JobsQueryVariables } from '../../generated/queries'
import { SortDirection, useInspectedReducer } from '../../utils'
import { IHostState } from '../host'
import { JobsSortBy } from './sort'

export enum JobActionType {
  SortBy = 'SORT_BY',
  SortDirection = 'SORT_DIRECTION',
}

export type IJobsActions =
  | {
      type: JobActionType.SortBy
      sortBy: JobsSortBy
    }
  | {
      type: JobActionType.SortDirection
      sortDirection?: SortDirection
    }

interface IJobsHostLocalState {
  sortBy: JobsSortBy
  sortDirection: SortDirection
}

export type IJobsState = IHostState<IJobsHostLocalState, JobsQueryVariables>

export const jobsStateInit = (): IJobsState => ({
  local: {
    sortBy: JobsSortBy.CreatedAt,
    sortDirection: SortDirection.ASCENDING,
  },
  variables: {},
})

export const jobsReducer = produce<IJobsState, [IJobsActions]>((draft, action) => {
  switch (action.type) {
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
