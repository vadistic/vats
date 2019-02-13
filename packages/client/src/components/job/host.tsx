import gql from 'graphql-tag'
import { JobFragment } from '../../generated/fragments'
import { Job, JobQueryVariables } from '../../generated/queries'
import { hostFactory, HostType, IHostTyping } from '../host'
import {
  IJobHostInitArg,
  IJobHostLocalState,
  JobActions,
  jobReducer,
  jobStateInit,
} from './reducer'

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

export type JobHostTyping = IHostTyping<
  IJobHostLocalState,
  JobActions,
  IJobHostInitArg,
  JobQueryVariables,
  JobValue
>

const jobHostConfig: JobHostTyping['config'] = {
  displayName: 'JOB',
  rootField: 'job',
  type: HostType.Single,
  init: jobStateInit,
  reducer: jobReducer,
  query: JOB_QUERY,
  updateMutation: JOB_UPDATE_MUTATION,
  resetOnInitArgChange: true,
  initVariables: ({ id }) => ({ where: { id } }),
}

export const { Host: JobHost, useContext: useJobContext, Context: JobContext } = hostFactory<
  JobHostTyping
>(jobHostConfig)
