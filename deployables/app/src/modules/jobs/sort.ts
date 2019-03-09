import { Enum } from '@martin_hotell/rex-tils'
import { mutableSortByGetter, mutableSortByProp } from '@vats/utils'
import { JobsState, JobsValue } from './host'

export const JobsSortBy = Enum('name', 'department', 'createdAt', 'updatedAt', 'applications')
export type JobsSortBy = Enum<typeof JobsSortBy>

// TODO: some sematic sorter in terms of desc/asc of different data types
export const jobsSorter = (value: JobsValue, state: JobsState): JobsValue => {
  switch (state.local.sortBy) {
    case JobsSortBy.applications:
      return mutableSortByGetter(value, state.local.sortDirection, job =>
        job.applications ? job.applications.length : null,
      )
    default:
      return mutableSortByProp(value, state.local.sortDirection, state.local.sortBy)
  }
}
