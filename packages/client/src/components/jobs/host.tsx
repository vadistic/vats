import gql from 'graphql-tag'
import { JobFragment } from '../../generated/fragments'
import { Job, JobsQuery_jobs, JobsQueryVariables } from '../../generated/queries'
import { hostFactory, HostType, IHostTyping } from '../host'
import { JOB_UPDATE_MUTATION } from '../job/host'
import { JobsActions, JobsLocalState, jobsReducer, jobsStateInit } from './reducer'
import { jobsSorter } from './sort'

export const JOBS_QUERY = gql`
  query JobsQuery($where: JobWhereInput, $orderBy: JobOrderByInput) {
    jobs(where: $where, orderBy: $orderBy) {
      ...Job
    }
  }

  ${JobFragment}
`

export type JobsValue = JobsQuery_jobs[]

export type JobsHostTyping = IHostTyping<
  JobsLocalState,
  JobsActions,
  JobsQueryVariables | undefined,
  JobsQueryVariables['where'],
  JobsValue
>

export type JobsState = JobsHostTyping['state']

const jobsHostConfig: JobsHostTyping['config'] = {
  displayName: 'CANDIDATES',
  rootField: 'jobs',
  type: HostType.Multi,
  init: jobsStateInit,
  reducer: jobsReducer,
  query: JOBS_QUERY,
  updateMutation: JOB_UPDATE_MUTATION,
  resetOnInitArgChange: true,
  // TODO: specific init variables?
  initVariables: () => null,
}

export const { Host: JobsHost, useContext: useJobsContext, Context: JobsContext } = hostFactory<
  JobsHostTyping
>(jobsHostConfig)
