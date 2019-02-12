import gql from 'graphql-tag'
import { JobFragment } from '../../generated/fragments'
import { Job } from '../../generated/queries'
import { hostFactory, HostType, IHostConfig } from '../host'
import { IJobActions, IJobHostInitArg, IJobState, jobReducer, jobStateInit } from './reducer'

export const JOB_QUERY = gql`
  query JobQuery($where: JobWhereUniqueInput!) {
    job(where: $where) {
      ...Job
    }
  }
  ${JobFragment}
`

export const JOB_UPDATE_MUTATION = gql`
  mutation JobUpdateMutation($where: JobWhereUniqueInput!, $data: JobUpdateInput!) {
    updateJob(where: $where, data: $data) {
      ...Job
    }
  }
  ${JobFragment}
`

export type JobValue = Job

const jobHostConfig: IHostConfig<JobValue, IJobState, IJobActions, IJobHostInitArg> = {
  query: JOB_QUERY,
  updateMutation: JOB_UPDATE_MUTATION,
  name: 'JOB_HOST',
  propName: 'job',
  type: HostType.Single,
  reducer: jobReducer,
  init: jobStateInit,
}

export const { Host: JobHost, useContext: useJobContext, Context: JobContext } = hostFactory(
  jobHostConfig,
)
