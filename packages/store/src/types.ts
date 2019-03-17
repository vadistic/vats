import { DeepStringIndex } from '@vats/utils'
import ApolloClient from 'apollo-client'
import { DocumentNode } from 'graphql'
import { createStore } from './store'

export interface WhereVariables {
  where?: any
}

export interface DataVariables {
  data: any
}

export type TQueryVariables = WhereVariables
export type TUpdateVariables = WhereVariables & DataVariables
export type TCreateVariables = DataVariables
export type TDeleteVariables = WhereVariables

/**
 * - remove null from data:{key: (null|Type)[] } since it never appears
 * - make elements/object readonly - corresponding to shallownes of observable
 */
type NonNullableImmutableProps<T> = {
  [K in keyof T]: T[K] extends Array<infer E | null> ? Array<Readonly<E>> : Readonly<T[K]>
}

/**
 * add to NonNullableImmutableProps string index signatures
 * since graphql response is always string indexed
 */
export type SafeData<Data> = DeepStringIndex<NonNullableImmutableProps<Data>>

export interface GraphqlTyping<
  CreateMutation = {},
  CreateVariables extends TCreateVariables = TCreateVariables,
  UpdateMutation = {},
  UpdateVariables extends TUpdateVariables = TUpdateVariables,
  DeleteMutation = {},
  DeleteVariables extends TDeleteVariables = TDeleteVariables
> {
  createMutation: CreateMutation
  createVariables: CreateVariables
  updateMutation: UpdateMutation
  updateVariables: UpdateVariables
  deleteMutation: DeleteMutation
  deleteVariables: DeleteVariables
  updateManyMutation: UpdateMutation
  updateManyVariables: UpdateVariables
  deleteManyMutation: DeleteMutation
  deleteManyVariables: DeleteVariables
}
/**
 * utility to create strict graphql typing using only partial
 */
export type GraphqlTypingCreator<P extends Partial<GraphqlTyping>> = {
  [K in keyof GraphqlTyping]: K extends keyof P ? NonNullable<P[K]> : GraphqlTyping[K]
}

/**
 * graphql operation definitinos
 */
export interface StoreGraphqlConfig {
  query: DocumentNode
  createMutation?: DocumentNode
  updateMutation?: DocumentNode
  deleteMutation?: DocumentNode
  updateManyMutation?: DocumentNode
  deleteManyMutation?: DocumentNode
}

export type StoreGraphqlRoots = { [K in keyof StoreGraphqlConfig]: string }

export interface StoreConfig {
  name: string
  autoFetch?: boolean
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
