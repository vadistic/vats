import { GraphQLResolveInfo } from 'graphql'
import { IMiddlewareResolver } from 'graphql-middleware/dist/types'
import { IRules } from 'graphql-shield'
import { ShieldRule } from 'graphql-shield/dist/types'
import * as jwt from 'jsonwebtoken'

import { Mutation as ApiMutation, Query as ApiQuery } from './generated/app'
import { Prisma, User } from './generated/prisma'

export interface JWTPayload {
  userId: string
  workspaceId: string
}

export interface Context {
  db: Prisma
  auth: JWTPayload
  request: any
}

// https://github.com/prisma/prisma-binding/issues/202
export type FirstArgument<T> = T extends (arg1: infer U, ...args: any[]) => any ? U : any

export type Remapped<T> = {
  [P in keyof T]?: (
    parent: null | undefined,
    args: FirstArgument<T[P]>,
    ctx: Context,
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
    ctx: Context,
    info?: GraphQLResolveInfo
  ) => any
}

export type MiddlewarePropMap<T> = {
  [P in keyof T]?: IMiddlewareResolver<any, Context, FirstArgument<T[P]>>
}

// TODO: Add subscriptions and custom types
export interface MiddlewareFieldMap {
  Query: MiddlewarePropMap<ApiQuery>
  Mutation: MiddlewarePropMap<ApiMutation>
}

export type RuleRemapped<T> = { [P in keyof T]?: ShieldRule }

export type IRuleQuery = RuleRemapped<ApiQuery>
export type IRuleMutation = RuleRemapped<ApiMutation>

interface StringIndexed {
  [index: string]: any
}

export type DataInputFieldsRules<T extends StringIndexed = ApiMutation> = {
  [P in keyof T]: {
    data: {
      [K in keyof FirstArgument<T[P]>['data']]: (
        parent: null | undefined,
        args: FirstArgument<T[P]>,
        ctx: Context,
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
        ctx: Context,
        info?: GraphQLResolveInfo
      ) => Promise<boolean>
    }
  }
}
