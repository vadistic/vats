import { Context } from '..'
import { MutationResolvers, QueryResolvers } from '../generated/server'

// Utils
export interface StringIndexSignature {
  [index: string]: any
}

export type Indexed<T> = T & StringIndexSignature

export type DeepIndexed<T> = { [K in keyof T]: T[K] extends object ? DeepIndexed<T> : T[K] }

export type FirstArgument<T> = T extends (arg1: infer U, ...args: any[]) => any ? U : any

// Resolvers
export type IQuery = Indexed<QueryResolvers.Resolvers<Context>>

export type IMutation = Indexed<MutationResolvers.Resolvers<Context>>

// context
export interface AccessTokenPayload {
  user: {
    id: string
    scope: string
    status: string
  }
  tenant: {
    id: string
    scope: string
    status: string
  }
  endpoint: string
}

export type SecondArgument<T> = T extends (arg1: any, arg2: infer U, ...args: any[]) => any
  ? U
  : never
