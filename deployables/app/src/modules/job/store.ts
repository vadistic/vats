import { createSingleStore, GraphqlTypingCreator, StoreConfig, StoreProps } from '@vats/store'
import React from 'react'
import {
  JobCreateMutation,
  JobCreateMutationVariables,
  JobDeleteMutation,
  JobDeleteMutationVariables,
  JobQuery,
  JobQuery_job,
  JobQueryVariables,
  JobUpdateMutation,
  JobUpdateMutationVariables,
} from '../../generated/queries'
import { JOB_CREATE_MUTATION, JOB_DELETE_MUTATION, JOB_QUERY, JOB_UPDATE_MUTATION } from './graphql'

export type SingleJobValue = JobQuery_job

export type SingleJobStore = ReturnType<typeof createSingleJobStore>

export const SingleJobContext = React.createContext<SingleJobStore>({} as any)

export interface SingleJobStoreProps extends StoreProps {
  id: string
}

export type SingleJobGraphqlTyping = GraphqlTypingCreator<{
  createMutation: JobCreateMutation
  createVariables: JobCreateMutationVariables
  updateMutation: JobUpdateMutation
  updateVariables: JobUpdateMutationVariables
  deleteMutation: JobDeleteMutation
  deleteVariables: JobDeleteMutationVariables
}>

export const createSingleJobStore = (props: SingleJobStoreProps) => {
  const state = { editable: false }

  const variables: JobQueryVariables = { where: { id: props.id } }

  const data: JobQuery = { job: null }

  const config: StoreConfig = {
    name: 'SingleJobStore',
    graphql: {
      query: JOB_QUERY,
      createMutation: JOB_CREATE_MUTATION,
      updateMutation: JOB_UPDATE_MUTATION,
      deleteMutation: JOB_DELETE_MUTATION,
    },
  }

  const store = createSingleStore({
    config,
    state,
    variables,
    data,
  })<SingleJobValue, SingleJobGraphqlTyping>(props)

  return store
}
