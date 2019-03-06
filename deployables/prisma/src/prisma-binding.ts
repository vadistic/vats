import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { Options } from 'graphql-binding'
import { BasePrismaOptions, makePrismaBindingClass } from 'prisma-binding'
import { typeDefs } from './generated/prisma-client/prisma-schema'

type BindingOperation<T = any> = (
  args: any,
  info?: GraphQLResolveInfo | string,
  options?: Options,
) => Promise<T | null>

interface Query {
  [index: string]: BindingOperation
}

interface Mutation {
  [index: string]: BindingOperation
}

interface Subscription {
  [index: string]: BindingOperation
}

export interface Exists {
  [index: string]: (where?: any) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: { [key: string]: any }) => Promise<T>
  delegate(
    operation: 'query' | 'mutation',
    fieldName: string,
    args: {
      [key: string]: any
    },
    infoOrQuery?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<any>
  delegateSubscription(
    fieldName: string,
    args?: {
      [key: string]: any
    },
    infoOrQuery?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<AsyncIterator<any>>
  getAbstractResolvers(filterSchema?: GraphQLSchema | string): any
}

export type BindingConstructor<T> = new (options: BasePrismaOptions) => T

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({ typeDefs })
