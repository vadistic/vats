import { DocumentNode } from 'graphql'
import { Exact, Merge, Omit } from '../../utils'

export interface IWhereVariables {
  where?: any
}

export interface IDataVariables {
  data?: any
}

export type TQueryVariables = IWhereVariables
export type TCreateVariables = IDataVariables
export type TUpdateVariables = IWhereVariables & IDataVariables
export type TDeleteVariables = IWhereVariables
export type TUpdateManyVariables = IWhereVariables & IDataVariables
export type TDeleteManyVariables = IWhereVariables

interface IGraphqlObject {
  id: string
  __typename: string
}

type SingleResponse<T> = { [K in keyof T]: T[K] extends IGraphqlObject | null ? T[K] : never }

type MultiResponse<T> = { [K in keyof T]: T[K] extends Array<IGraphqlObject | null> ? T[K] : never }

// TODO: maybe allow for 'count'
type GraphqlBatch<T> = { [K in keyof T]: any }

export interface IGraphqlSingleQueryTyping<
  Query extends SingleResponse<Query> = SingleResponse<any>,
  QueryVariables extends TQueryVariables = TQueryVariables
> {
  query: Query
  queryVariables: QueryVariables
}

export interface IGraphqlSingleMutationTyping<
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

export interface IGraphqlMultiQueryTyping<
  Query extends MultiResponse<Query> = MultiResponse<any>,
  QueryVariables extends TQueryVariables = TQueryVariables
> {
  query: Query
  queryVariables: QueryVariables
}

export interface IGraphqlMultiMutationTyping<
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

// for helpers only
export type TGraphqlSingleTyping = Merge<IGraphqlSingleQueryTyping, IGraphqlSingleMutationTyping>

export type TGraphqlMultiTyping = Merge<IGraphqlMultiQueryTyping, IGraphqlMultiMutationTyping>

export type TGraphqlTyping = TGraphqlSingleTyping & TGraphqlMultiTyping

export type GraphqlSingleTypingCreator<
  T extends Exact<T, IGraphqlSingleQueryTyping & Partial<IGraphqlSingleMutationTyping>>
> = T & Omit<IGraphqlSingleMutationTyping, keyof T>

export type GraphqlMultiTypingCreator<
  T extends Exact<
    T,
    IGraphqlMultiQueryTyping & Partial<IGraphqlSingleMutationTyping & IGraphqlMultiMutationTyping>
  >
> = T & Omit<IGraphqlSingleMutationTyping & IGraphqlMultiMutationTyping, keyof T>

export interface IHostGraphqlSingleConfig {
  query: DocumentNode
  queryRoot: string
  createMutation?: DocumentNode
  createMutationRoot?: string
  updateMutation?: DocumentNode
  updateMutationRoot?: string
  deleteMutation?: DocumentNode
  deleteMutationRoot?: string
}

export interface IHostGraphqlMultiConfig extends IHostGraphqlSingleConfig {
  updateManyMutation: DocumentNode
  updateManyMutationRoot: string
  deleteManyMutation: DocumentNode
  deleteManyMutationRoot: string
}

export type TGraphqlConfig = IHostGraphqlSingleConfig | IHostGraphqlMultiConfig
