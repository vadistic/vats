import React from 'react'
import { CandidateQuery, CandidateQueryVariables } from '../../generated/queries'
import { createStore, StoreConfig, StoreProps } from '../../store'
import {
  CANDIDATE_CREATE_MUTATION,
  CANDIDATE_DELETE_MUTATION,
  CANDIDATE_QUERY,
  CANDIDATE_UPDATE_MUTATION,
} from './host'

export const CandidateContext = React.createContext<ReturnType<typeof createCandidateStore>>(
  {} as any,
)

export interface CandidateStoreProps extends StoreProps {
  id: string
}

export const createCandidateStore = (props: CandidateStoreProps) => {
  const state = { editable: false, field: true, num: 123 }

  const variables: CandidateQueryVariables = { where: { id: props.id } }

  const data: CandidateQuery = { candidate: null }

  const config: StoreConfig = {
    name: 'CandidateStore',
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
