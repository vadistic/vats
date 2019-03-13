import { createStore, StoreConfig, StoreProps } from '@vats/store'
import React from 'react'
import {
  CandidateQuery,
  CandidateQuery_candidate,
  CandidateQueryVariables,
} from '../../generated/queries'
import {
  CANDIDATE_CREATE_MUTATION,
  CANDIDATE_DELETE_MUTATION,
  CANDIDATE_QUERY,
  CANDIDATE_UPDATE_MUTATION,
} from './graphql'

export type SingleCandidateValue = CandidateQuery_candidate

export type SingleCandidateStore = ReturnType<typeof createSingleCandidateStore>

export const SingleCandidateContext = React.createContext<SingleCandidateStore>({} as any)

export interface SingleCandidateStoreProps extends StoreProps {
  id: string
}

export const createSingleCandidateStore = (props: SingleCandidateStoreProps) => {
  const state = { editable: false }

  const variables: CandidateQueryVariables = { where: { id: props.id } }

  const data: CandidateQuery = { candidate: null }

  const config: StoreConfig = {
    name: 'SingleCandidateStore',
    autoFetch: true,
    debug: true,
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
