import { createStore, StoreConfig, StoreProps } from '@vats/store'
import { SortDirection } from '@vats/utils'
import React from 'react'
import {
  CandidatesQuery,
  CandidatesQuery_candidates,
  CandidatesQueryVariables,
} from '../../generated/queries'
import {
  CANDIDATE_CREATE_MUTATION,
  CANDIDATE_DELETE_MUTATION,
  CANDIDATE_UPDATE_MUTATION,
} from '../candidate'
import {
  CANDIDATES_DELETE_MANY_MUTATION,
  CANDIDATES_QUERY,
  CANDIDATES_UPDATE_MANY_MUTATION,
} from './graphql'
import { CandidatesSortBy } from './sort'

export type CandidatesValue = CandidatesQuery_candidates[]

export type CandidatesStore = ReturnType<typeof createCandidatesStore>

export const CandidatesContext = React.createContext<CandidatesStore>({} as any)

export interface CandidatesStoreProps extends StoreProps {}

export const createCandidatesStore = (props: CandidatesStoreProps) => {
  const state = {
    sortBy: CandidatesSortBy.createdAt,
    sortDirection: SortDirection.ASCENDING,
  }

  const variables: CandidatesQueryVariables = { where: null }

  const data: CandidatesQuery = { candidates: [] }

  const config: StoreConfig = {
    name: 'CandidatesStore',
    autoFetch: true,
    debug: true,
    graphql: {
      query: CANDIDATES_QUERY,
      createMutation: CANDIDATE_CREATE_MUTATION,
      updateMutation: CANDIDATE_UPDATE_MUTATION,
      deleteMutation: CANDIDATE_DELETE_MUTATION,
      updateManyMutation: CANDIDATES_UPDATE_MANY_MUTATION,
      deleteManyMutation: CANDIDATES_DELETE_MANY_MUTATION,
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
