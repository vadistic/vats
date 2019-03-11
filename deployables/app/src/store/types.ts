import ApolloClient from 'apollo-client'
import { DocumentNode } from 'graphql'
import { createStore } from './store'

export interface TQueryVariables {
  where?: any
}

export interface TUpdateVariables {
  data: any
  where: any
}

export interface GraphqlTyping<
  CreateData = {},
  CreateVariables = {},
  UpdateData = {},
  UpdateVariables extends TUpdateVariables = TUpdateVariables,
  DeleteData = {},
  DeleteVariables = {}
> {
  createData: CreateData
  createVariables: CreateVariables
  updateData: UpdateData
  updateVariables: UpdateVariables
  deleteData: DeleteData
  deleteVariables: DeleteVariables
}

export interface StoreGraphqlConfig {
  query: DocumentNode
  createMutation?: DocumentNode
  updateMutation?: DocumentNode
  deleteMutation?: DocumentNode
  updateManyMutation?: DocumentNode
  deleteManyMutation?: DocumentNode
}

/*
 * TODO: something cleaner
 */
export type StoreTypingCreator<P extends Partial<GraphqlTyping>> = {
  [K in keyof GraphqlTyping]: K extends keyof P ? NonNullable<P[K]> : GraphqlTyping[K]
}

export type StoreGraphqlRoots = { [K in keyof StoreGraphqlConfig]: string }

export interface StoreConfig {
  name: string
  autoFetch?: boolean
  restartOnInitChange?: boolean
  graphql: StoreGraphqlConfig
  relations?: any
  debug?: boolean
}

export interface StoreProps {
  client: ApolloClient<any>
}

export interface StoreObservables<State, Data, Variables> {
  state: State
  variables: Variables
  data: Data
  config: StoreConfig
}

export type StoreValue = ReturnType<ReturnType<typeof createStore>>
