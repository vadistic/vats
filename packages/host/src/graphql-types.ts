import { Assign, Exact, Omit } from '@vats/utils'

/*
 * Variables
 */
export interface WhereVariables {
  where?: any
}

export interface DataVariables {
  data?: any
}

export type TQueryVariables = WhereVariables
export type TCreateVariables = DataVariables
export type TUpdateVariables = WhereVariables & DataVariables
export type TDeleteVariables = WhereVariables
export type TUpdateManyVariables = WhereVariables & DataVariables
export type TDeleteManyVariables = WhereVariables

/*
 * Helper
 */

interface GraphqlObject {
  id: string
  __typename: string
}

type SingleResponse<T> = { [K in keyof T]: T[K] extends GraphqlObject | null ? T[K] : never }

type MultiResponse<T> = { [K in keyof T]: T[K] extends Array<GraphqlObject | null> ? T[K] : never }

// TODO: maybe allow for 'count'
type GraphqlBatch<T> = { [K in keyof T]: any }

/*
 * Single query
 */

export interface GraphqlSingleQueryTyping<
  Query extends SingleResponse<Query> = SingleResponse<any>,
  QueryVariables extends TQueryVariables = TQueryVariables
> {
  query: Query
  queryVariables: QueryVariables
}

export interface GraphqlSingleMutationTyping<
  CreateMutation extends SingleResponse<CreateMutation> = SingleResponse<any>,
  CreateMutationVariables extends TCreateVariables = TCreateVariables,
  UpdateMutation extends SingleResponse<UpdateMutation> = SingleResponse<any>,
  UpdateMutationVariables extends TUpdateVariables = TUpdateVariables,
  DeleteMutation extends SingleResponse<DeleteMutation> = SingleResponse<any>,
  DeleteMutationVariables extends TDeleteVariables = TDeleteVariables
> {
  createMutation: CreateMutation
  createMutationVariables: CreateMutationVariables
  updateMutation: UpdateMutation
  updateMutationVariables: UpdateMutationVariables
  deleteMutation: DeleteMutation
  deleteMutationVariables: DeleteMutationVariables
}

export type TGraphqlSingleTyping = Assign<
  GraphqlSingleQueryTyping,
  Partial<GraphqlSingleMutationTyping>
>

/*
 * Multi query
 */

export interface GraphqlMultiQueryTyping<
  Query extends MultiResponse<Query> = MultiResponse<any>,
  QueryVariables extends TQueryVariables = TQueryVariables
> {
  query: Query
  queryVariables: QueryVariables
}

export interface GraphqlMultiMutationTyping<
  UpdateManyMutation extends GraphqlBatch<UpdateManyMutation> = GraphqlBatch<any>,
  UpdateManyMutationVariables extends TUpdateManyVariables = TUpdateManyVariables,
  DeleteManyMutation extends GraphqlBatch<DeleteManyMutation> = GraphqlBatch<any>,
  DeleteManyMutationVariables extends TDeleteManyVariables = TDeleteManyVariables
> {
  updateManyMutation: UpdateManyMutation
  updateManyMutationVariables: UpdateManyMutationVariables
  deleteManyMutation: DeleteManyMutation
  deleteManyMutationVariables: DeleteManyMutationVariables
}

export type TGraphqlMultiTyping = Assign<
  GraphqlMultiQueryTyping,
  Partial<GraphqlMultiMutationTyping>
>

/*
 *  Typing creators
 */
export type TGraphqlTyping = TGraphqlSingleTyping | TGraphqlMultiTyping

export type GraphqlSingleTypingCreator<
  T extends Exact<T, GraphqlSingleQueryTyping & Partial<GraphqlSingleMutationTyping>>
> = T & Omit<GraphqlSingleMutationTyping, keyof T>

export type GraphqlMultiTypingCreator<
  T extends Exact<
    T,
    GraphqlMultiQueryTyping & Partial<GraphqlSingleMutationTyping & GraphqlMultiMutationTyping>
  >
> = T & Omit<GraphqlSingleMutationTyping & GraphqlMultiMutationTyping, keyof T>
