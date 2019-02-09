import { Job } from '../../generated/queries'
import { mutableSortByGetter, mutableSortByProp } from '../../utils'
import { FilterFn } from '../host'
import { JobsValue } from './host'
import { IJobsState } from './reducer'

export enum JobsSortBy {
  // auto
  Name = 'name',
  Department = 'department',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  // custom
  Applications = 'applications',
}

export const jobsSorter: FilterFn<JobsValue, IJobsState> = (value, state): Job[] => {
  switch (state.local.sortBy) {
    case JobsSortBy.Applications:
      return mutableSortByGetter(value, state.local.sortDirection, job =>
        job.applications ? job.applications.length : null,
      )
    default:
      return mutableSortByProp(value, state.local.sortDirection, state.local.sortBy)
  }
}
