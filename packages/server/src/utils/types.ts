import { IContext } from '..'
import { MutationResolvers, QueryResolvers } from '../generated/server'

// Utils
export interface IStringIndexSignature {
  [index: string]: any
}

export type Indexed<T> = T & IStringIndexSignature

export type DeepIndexed<T> = { [K in keyof T]: T[K] extends object ? DeepIndexed<T> : T[K] }

export type FirstArgument<T> = T extends (arg1: infer U, ...args: any[]) => any ? U : any

// Resolvers
export type IQuery = Indexed<QueryResolvers.Resolvers<IContext>>

export type IMutation = Indexed<MutationResolvers.Resolvers<IContext>>

// context
export interface IAccessTokenPayload {
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

export type SecondArgument<T> = T extends (arg1: any, arg2: infer U, ...args: any[]) => any ? U : never
