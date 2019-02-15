import { DocumentNode } from 'graphql'
import { IStringIndexSignature, Omit } from '../../utils'

export interface IWhereVariables {
  where?: any
}

export interface IDataVariables {
  data?: any
}

type TQueryVariables = IWhereVariables
type TCreateVariables = IDataVariables
type TUpdateVariables = IWhereVariables & IDataVariables
type TDeleteVariables = IWhereVariables
type TUpdateManyVariables = IWhereVariables & IDataVariables
type TDeleteManyVariables = IWhereVariables

interface IGraphqlObject {
  id: string
  __typename: string
}

type SingleResponse<T> = { [K in keyof T]: T[K] extends IGraphqlObject | null ? T[K] : never }

type MultiResponse<T> = { [K in keyof T]: T[K] extends Array<IGraphqlObject | null> ? T[K] : never }

// TODO: maybe allow for 'count'
type GraphqlBatch<T> = { [K in keyof T]: any }

type OmitSystemFields<T> = Omit<T, 'id' | '__typename' | 'createdAt' | 'updatedAt' | 'deletedAt'>

export interface IGraphqlSingleTyping<
  Query extends SingleResponse<Query> = SingleResponse<any>,
  QueryVariables extends TQueryVariables = TQueryVariables,
  CreateMutation extends SingleResponse<CreateMutation> = SingleResponse<any>,
  CreateMutationVariables extends TCreateVariables = TCreateVariables,
  UpdateMutation extends SingleResponse<UpdateMutation> = SingleResponse<any>,
  UpdateMutationVariables extends TUpdateVariables = TUpdateVariables,
  DeleteMutation extends SingleResponse<DeleteMutation> = SingleResponse<any>,
  DeleteMutationVariables extends TDeleteVariables = TDeleteVariables
> {
  query: Query
  queryVariables: QueryVariables
  createMutation: CreateMutation
  createMutationVariables: CreateMutationVariables
  updateMutation: UpdateMutation
  updateMutationVariables: UpdateMutationVariables
  deleteMutation: DeleteMutation
  deleteMutationVariables: DeleteMutationVariables
}

export interface IGraphqlMultiTyping<
  Query extends MultiResponse<Query> = MultiResponse<any>,
  QueryVariables extends TQueryVariables = TQueryVariables,
  CreateMutation extends SingleResponse<CreateMutation> = SingleResponse<any>,
  CreateMutationVariables extends TCreateVariables = TCreateVariables,
  UpdateMutation extends SingleResponse<UpdateMutation> = SingleResponse<any>,
  UpdateMutationVariables extends TUpdateVariables = TUpdateVariables,
  DeleteMutation extends SingleResponse<DeleteMutation> = SingleResponse<any>,
  DeleteMutationVariables extends TDeleteVariables = TDeleteVariables,
  UpdateManyMutation extends GraphqlBatch<UpdateManyMutation> = GraphqlBatch<any>,
  UpdateManyMutationVariables extends TUpdateManyVariables = TUpdateManyVariables,
  DeleteManyMutation extends GraphqlBatch<DeleteManyMutation> = GraphqlBatch<any>,
  DeleteManyMutationVariables extends TDeleteManyVariables = TDeleteManyVariables
> {
  query: Query
  queryVariables: QueryVariables
  createMutation: CreateMutation
  createMutationVariables: CreateMutationVariables
  updateMutation: UpdateMutation
  updateMutationVariables: UpdateMutationVariables
  deleteMutation: DeleteMutation
  deleteMutationVariables: DeleteMutationVariables
  updateManyMutation: UpdateManyMutation
  updateManyMutationVariables: UpdateManyMutationVariables
  deleteManyMutation: DeleteManyMutation
  deleteManyMutationVariables: DeleteManyMutationVariables
}

export type TGraphqlTyping = IGraphqlSingleTyping | IGraphqlMultiTyping

export interface IHostGraphqlSingleConfig {
  query: DocumentNode
  queryRoot: string
  createMutation: DocumentNode
  createMutationRoot: string
  updateMutation: DocumentNode
  updateMutationRoot: string
  deleteMutation: DocumentNode
  deleteMutationRoot: string
}

export interface IHostGraphqlMultiConfig {
  query: DocumentNode
  queryRoot: string
  createMutation: DocumentNode
  createMutationRoot: string
  updateMutation: DocumentNode
  updateMutationRoot: string
  deleteMutation: DocumentNode
  deleteMutationRoot: string
  updateManyMutation: DocumentNode
  updateManyMutationRoot: string
  deleteManyMutation: DocumentNode
  deleteManyMutationRoot: string
}

export type TGraphqlConfig = IHostGraphqlSingleConfig | IHostGraphqlMultiConfig
