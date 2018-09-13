import { GraphQLResolveInfo } from 'graphql'
import { IMiddlewareFunction } from 'graphql-middleware/dist/types'
import { ShieldRule } from 'graphql-shield/dist/types'

import { Prisma } from './generated/prisma'
import { ID_Output, Mutation as ApiMutation, Query as ApiQuery } from './generated/server'

export interface IStringIndexSignature {
  [index: string]: any
}

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

export interface IContext {
  db: Prisma
  token: IAccessTokenPayload
}

// https://github.com/prisma/prisma-binding/issues/202
export type FirstArgument<T> = T extends (arg1: infer U, ...args: any[]) => any ? U : any

export type Remapped<T> = {
  [P in keyof T]?: (
    parent: null | undefined,
    args: FirstArgument<T[P]>,
    ctx: IContext,
    info?: GraphQLResolveInfo
  ) => any
}

export type IQuery = Remapped<ApiQuery>
export type IMutation = Remapped<ApiMutation>

export type MiddlewareRemapped<T> = {
  [P in keyof T]: (
    resolve: Promise<any>,
    parent: null | undefined,
    args: FirstArgument<T[P]>,
    ctx: IContext,
    info?: GraphQLResolveInfo
  ) => any
}

export type MiddlewareFieldMap<T extends IStringIndexSignature> = {
  [P in keyof T]?: IMiddlewareFunction<any, IContext, FirstArgument<T[P]>>
}

// TODO: Add subscriptions and custom types
export interface IMiddlewareTypeMap extends IStringIndexSignature {
  Query?: MiddlewareFieldMap<ApiQuery>
  Mutation?: MiddlewareFieldMap<ApiMutation>
}

export type RuleRemapped<T> = { [P in keyof T]?: ShieldRule }

export type IRuleQuery = RuleRemapped<ApiQuery>
export type IRuleMutation = RuleRemapped<ApiMutation>

export type DataInputFieldsRules<T extends IStringIndexSignature = ApiMutation> = {
  [P in keyof T]: {
    data: {
      [K in keyof FirstArgument<T[P]>['data']]: (
        parent: null | undefined,
        args: FirstArgument<T[P]>,
        ctx: IContext,
        info?: GraphQLResolveInfo
      ) => Promise<boolean>
    }
  }
}

export type WhereInputFieldsRules<T = ApiQuery> = {
  [P in keyof T]: {
    where: {
      [K in keyof FirstArgument<T[P]>['data']]: (
        parent: null | undefined,
        args: FirstArgument<T[P]>,
        ctx: IContext,
        info?: GraphQLResolveInfo
      ) => Promise<boolean>
    }
  }
}
