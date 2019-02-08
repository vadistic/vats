import { Job, JobsQuery } from '../../generated/queries'
import { filterNull, mutableSortByGetter, mutableSortByProp } from '../../utils'
import { IJobsState } from './context'

export enum JobsSortBy {
  // auto
  Name = 'name',
  Department = 'department',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  // custom
  Applications = 'applications',
}

type TJobsSortDisplayNamesMap = { [K in JobsSortBy]: string }

export const JobsSortDisplayNamesMap: TJobsSortDisplayNamesMap = {
  [JobsSortBy.Name]: 'job name',
  [JobsSortBy.Department]: 'department',
  [JobsSortBy.CreatedAt]: 'create date',
  [JobsSortBy.UpdatedAt]: 'update date',
  [JobsSortBy.Applications]: 'applications',
}

export const jobsSorter = (data: JobsQuery, state: IJobsState): Job[] => {
  const jobs = filterNull(data.jobs)
  switch (state.local.sortBy) {
    case JobsSortBy.Applications:
      return mutableSortByGetter(jobs, state.local.sortDirection, job =>
        job.applications ? job.applications.length : null,
      )
    default:
      return mutableSortByProp(jobs, state.local.sortDirection, state.local.sortBy)
  }
}
