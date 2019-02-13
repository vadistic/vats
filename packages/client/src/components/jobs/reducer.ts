import produce from 'immer'
import { SortDirection } from '../../utils'
import { JobsState } from './host'
import { JobsSortBy } from './sort'

export enum JobActionType {
  SortBy = 'SORT_BY',
  SortDirection = 'SORT_DIRECTION',
}

export type JobsActions =
  | {
      type: JobActionType.SortBy
      sortBy: JobsSortBy
    }
  | {
      type: JobActionType.SortDirection
      sortDirection?: SortDirection
    }

export const jobsStateInit = () => ({
  sortBy: JobsSortBy.CreatedAt,
  sortDirection: SortDirection.ASCENDING,
})

export type JobsLocalState = ReturnType<typeof jobsStateInit>

export const jobsReducer = produce<JobsState, [JobsActions]>((draft, action) => {
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
