import { mutableSortByGetter, mutableSortByProp } from '../../utils'
import { JobsState, JobsValue } from './host'

export enum JobsSortBy {
  // auto
  Name = 'name',
  Department = 'department',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  // custom
  Applications = 'applications',
}

export const jobsSorter = (value: JobsValue, state: JobsState): JobsValue => {
  switch (state.local.sortBy) {
    case JobsSortBy.Applications:
      return mutableSortByGetter(value, state.local.sortDirection, job =>
        job.applications ? job.applications.length : null,
      )
    default:
      return mutableSortByProp(value, state.local.sortDirection, state.local.sortBy)
  }
}
