import { createMultiStore, GraphqlTypingCreator, StoreConfig, StoreProps } from '@vats/store'
import { SortDirection } from '@vats/utils'
import React from 'react'
import {
  JobCreateMutation,
  JobCreateMutationVariables,
  JobDeleteMutation,
  JobDeleteMutationVariables,
  JobsDeleteManyMutation,
  JobsDeleteManyMutationVariables,
  JobsQuery,
  JobsQuery_jobs,
  JobsQueryVariables,
  JobsUpdateManyMutation,
  JobsUpdateManyMutationVariables,
  JobUpdateMutation,
  JobUpdateMutationVariables,
} from '../../generated/queries'
import { JOB_CREATE_MUTATION, JOB_DELETE_MUTATION, JOB_UPDATE_MUTATION } from '../job/graphql'
import { JOBS_DELETE_MANY_MUTATION, JOBS_QUERY, JOBS_UPDATE_MANY_MUTATION } from './graphql'

export type JobsValue = JobsQuery_jobs[]
export type JobsElement = JobsQuery_jobs

export interface JobsValueProps {
  jobs: JobsValue
}
export interface JobsElementProps {
  job: JobsElement
}

export type JobsStore = ReturnType<typeof createJobsStore>
export interface JobsStoreProps extends StoreProps {}

export type JobsGraphqlTyping = GraphqlTypingCreator<{
  createMutation: JobCreateMutation
  createVariables: JobCreateMutationVariables
  updateMutation: JobUpdateMutation
  updateVariables: JobUpdateMutationVariables
  deleteMutation: JobDeleteMutation
  deleteVariables: JobDeleteMutationVariables
  updateManyMutation: JobsUpdateManyMutation
  updateManyVariables: JobsUpdateManyMutationVariables
  deleteManyMutation: JobsDeleteManyMutation
  deleteManyVariables: JobsDeleteManyMutationVariables
}>

export const JobsContext = React.createContext<JobsStore>({} as any)

export const createJobsStore = (props: JobsStoreProps) => {
  const state = {
    sortBy: 'updatedAt',
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

  const store = createMultiStore({
    config,
    state,
    variables,
    data,
  })<JobsValue, JobsGraphqlTyping>(props)

  return store
}
