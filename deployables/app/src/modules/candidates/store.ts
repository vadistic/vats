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
import { ColumnsConfig } from './table'

export type CandidatesValue = CandidatesQuery_candidates[]
export type CandidatesElement = CandidatesQuery_candidates

export interface CandidatesProps {
  candidates: CandidatesValue
}

export interface CandidatesElementProps {
  candidate: CandidatesElement
}

export type CandidatesStore = ReturnType<typeof createCandidatesStore>

export const CandidatesContext = React.createContext<CandidatesStore>({} as any)

export interface CandidatesStoreProps extends StoreProps {}

export const createCandidatesStore = (props: CandidatesStoreProps) => {
  const state = {
    sortBy: 'updatedAt',
    sortDirection: SortDirection.DESCENDING,
    table: {
      columns: undefined as ColumnsConfig | undefined,
    },
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
  }

  const store = createStore({
    config,
    state,
    variables,
    data,
  })(props)

  return store
}
