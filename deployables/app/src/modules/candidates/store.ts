import {
  createStore,
  GraphqlTypingCreator,
  StoreConfig,
  StoreProps,
  StoreSortDirection,
} from '@vats/store'
import { action } from 'mobx'
import { Selection, SelectionMode } from 'office-ui-fabric-react'
import React from 'react'
import {
  CandidateCreateMutation,
  CandidateCreateMutationVariables,
  CandidateDeleteMutation,
  CandidateDeleteMutationVariables,
  CandidatesDeleteManyMutation,
  CandidatesDeleteManyMutationVariables,
  CandidatesQuery,
  CandidatesQuery_candidates,
  CandidatesQueryVariables,
  CandidatesUpdateManyMutation,
  CandidatesUpdateManyMutationVariables,
  CandidateUpdateMutation,
  CandidateUpdateMutationVariables,
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

export interface CandidatesValueProps {
  candidates: CandidatesValue
}
export interface CandidatesElementProps {
  candidate: CandidatesElement
}

export type CandidatesStore = ReturnType<typeof createCandidatesStore>
export interface CandidatesStoreProps extends StoreProps {}

export type CandidatesGraphqlTyping = GraphqlTypingCreator<{
  createMutation: CandidateCreateMutation
  createVariables: CandidateCreateMutationVariables
  updateMutation: CandidateUpdateMutation
  updateVariables: CandidateUpdateMutationVariables
  deleteMutation: CandidateDeleteMutation
  deleteVariables: CandidateDeleteMutationVariables
  updateManyMutation: CandidatesUpdateManyMutation
  updateManyVariables: CandidatesUpdateManyMutationVariables
  deleteManyMutation: CandidatesDeleteManyMutation
  deleteManyVariables: CandidatesDeleteManyMutationVariables
}>

export const CandidatesContext = React.createContext<CandidatesStore>({} as any)

export const createCandidatesStore = (props: CandidatesStoreProps) => {
  const state = {
    sortBy: 'updatedAt',
    sortDirection: StoreSortDirection.descending,
    table: {
      columns: [] as ColumnsConfig,
    },
    selection: {
      instance: new Selection({
        getKey: (item: any) => item.id,
        selectionMode: SelectionMode.multiple,
        onSelectionChanged: () => handleSelection(),
      }),
      indicies: [] as number[],
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
  })<CandidatesGraphqlTyping>(props)

  const handleSelection = action(`selection change`, () => {
    store.state.selection.indicies = store.state.selection.instance.getSelectedIndices()
  })

  return store
}
