import { StringMap } from '@vats/utils'
import { DocumentNode } from 'graphql'

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

export interface GraphqlTyping<
  CreateMutation = StringMap<any>,
  CreateVariables extends TCreateVariables = TCreateVariables,
  UpdateMutation = StringMap<any>,
  UpdateVariables extends TUpdateVariables = TUpdateVariables,
  DeleteMutation = StringMap<any>,
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
