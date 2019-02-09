import gql from 'graphql-tag'
import { JobFragment } from '../../generated/fragments'
import { Job } from '../../generated/queries'
import { hostFactory, HostType, IHostConfig } from '../host'
import { IJobsActions, IJobsState, jobsReducer, jobsStateInit } from './reducer'
import { jobsSorter } from './sort'

export const JOBS_QUERY = gql`
  query JobsQuery($where: JobWhereInput, $orderBy: JobOrderByInput) {
    jobs(where: $where, orderBy: $orderBy) {
      ...Job
    }
  }

  ${JobFragment}
`

export type JobsValue = Job[]

const jobsHostConfig: IHostConfig<JobsValue, IJobsState, IJobsActions, undefined> = {
  query: JOBS_QUERY,
  name: 'JOBS_HOST',
  propName: 'jobs',
  type: HostType.Multi,
  reducer: jobsReducer,
  init: jobsStateInit,
  filter: jobsSorter,
}

export const { Host: JobsHost, useContext: useJobsContect } = hostFactory(jobsHostConfig)
