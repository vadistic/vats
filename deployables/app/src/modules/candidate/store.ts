import { createSingleStore, GraphqlTypingCreator, StoreConfig, StoreProps } from '@vats/store'
import React from 'react'
import {
  CandidateCreateMutation,
  CandidateCreateMutationVariables,
  CandidateDeleteMutation,
  CandidateDeleteMutationVariables,
  CandidateQuery,
  CandidateQuery_candidate,
  CandidateQueryVariables,
  CandidateUpdateMutation,
  CandidateUpdateMutationVariables,
} from '../../generated/queries'
import {
  CANDIDATE_CREATE_MUTATION,
  CANDIDATE_DELETE_MUTATION,
  CANDIDATE_QUERY,
  CANDIDATE_UPDATE_MUTATION,
} from './graphql'
import { CandidateProfileTab } from './profile'

export type SingleCandidateValue = CandidateQuery_candidate

export type SingleCandidateGraphqlTyping = GraphqlTypingCreator<{
  createMutation: CandidateCreateMutation
  createVariables: CandidateCreateMutationVariables
  updateMutation: CandidateUpdateMutation
  updateVariables: CandidateUpdateMutationVariables
  deleteMutation: CandidateDeleteMutation
  deleteVariables: CandidateDeleteMutationVariables
}>

export type SingleCandidateStore = ReturnType<typeof createSingleCandidateStore>

export interface SingleCandidateStoreProps extends StoreProps {
  id: string
}
export const SingleCandidateContext = React.createContext<SingleCandidateStore>({} as any)

export const createSingleCandidateStore = (props: SingleCandidateStoreProps) => {
  const state = { editable: false, surfaceTab: CandidateProfileTab.overview }

  const variables: CandidateQueryVariables = { where: { id: props.id } }

  const data: CandidateQuery = { candidate: null }

  const config: StoreConfig = {
    name: 'SingleCandidateStore',
    graphql: {
      query: CANDIDATE_QUERY,
      createMutation: CANDIDATE_CREATE_MUTATION,
      updateMutation: CANDIDATE_UPDATE_MUTATION,
      deleteMutation: CANDIDATE_DELETE_MUTATION,
    },
    relations: {
      tags: {
        onCreate: 'connect',
        onDelete: 'disconnect',
      },
      sources: {
        onCreate: 'connect',
        onDelete: 'disconnect',
      },
    },
  }

  const store = createSingleStore({
    config,
    state,
    variables,
    data,
  })(props)

  return store
}
