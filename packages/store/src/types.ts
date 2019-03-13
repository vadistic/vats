import { DeepStringIndex } from '@vats/utils'
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

/*
 * Remove null from data:{key: (null|Type)[] } since it never appears
 *
 * And make elements/object readonly - corresponding to shallownes of observable
 */
type NonNullableImmutableProps<T> = {
  [K in keyof T]: T[K] extends Array<infer E | null> ? Array<Readonly<E>> : Readonly<T[K]>
}

/*
 * And add string index signatures since graphql res objects are always string indexed
 */
export type SafeData<Data> = DeepStringIndex<NonNullableImmutableProps<Data>>

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
