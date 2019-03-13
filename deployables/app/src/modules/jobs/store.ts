import { createStore, StoreConfig, StoreProps } from '@vats/store'
import { SortDirection } from '@vats/utils'
import React from 'react'
import { JobsQuery, JobsQuery_jobs, JobsQueryVariables } from '../../generated/queries'
import { JOB_CREATE_MUTATION, JOB_DELETE_MUTATION, JOB_UPDATE_MUTATION } from '../job/graphql'
import { JOBS_DELETE_MANY_MUTATION, JOBS_QUERY, JOBS_UPDATE_MANY_MUTATION } from './graphql'
import { JobsSortBy } from './sort'

export type JobsValue = JobsQuery_jobs[]

export type JobsStore = ReturnType<typeof createJobsStore>

/* export type JobsGraphqlTyping = GraphqlMultiTypingCreator<{
  query: JobsQuery
  queryVariables: JobsQueryVariables
  createMutation: JobCreateMutation
  createMutationVariables: JobCreateMutationVariables
  updateMutation: JobUpdateMutation
  updateMutationVariables: JobUpdateMutationVariables
  deleteMutation: JobDeleteMutation
  deleteMutationVariables: JobDeleteMutationVariables
  updateManyMutation: JobsUpdateManyMutation
  updateManyMutationVariables: JobsUpdateManyMutationVariables
  deleteManyMutation: JobsDeleteManyMutation
  deleteManyMutationVariables: JobsDeleteManyMutationVariables
}>
 */

export const JobsContext = React.createContext<JobsStore>({} as any)

export interface JobsStoreProps extends StoreProps {}

export const createJobsStore = (props: JobsStoreProps) => {
  const state = {
    sortBy: JobsSortBy.createdAt,
    sortDirection: SortDirection.ASCENDING,
  }

  const variables: JobsQueryVariables = { where: null }

  const data: JobsQuery = { jobs: [] }

  const config: StoreConfig = {
    name: 'JobsStore',
    autoFetch: true,
    debug: true,
    graphql: {
      query: JOBS_QUERY,
      createMutation: JOB_CREATE_MUTATION,
      updateMutation: JOB_UPDATE_MUTATION,
      deleteMutation: JOB_DELETE_MUTATION,
      updateManyMutation: JOBS_UPDATE_MANY_MUTATION,
      deleteManyMutation: JOBS_DELETE_MANY_MUTATION,
    },

    relations: {},
  }

  const storeProps = createStore({
    config,
    state,
    variables,
    data,
  })(props)

  return {
    ...storeProps,
  }
}
