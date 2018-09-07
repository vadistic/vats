import { GraphQLResolveInfo } from 'graphql'
import { IMiddlewareResolver } from 'graphql-middleware/dist/types'
import { IRules } from 'graphql-shield'
import * as jwt from 'jsonwebtoken'

import { Mutation as ApiMutation, Query as ApiQuery } from './generated/app'
import { Prisma } from './generated/prisma'

export interface JWTPayload {
  userId: string
  workspaceId: string
}

export const getId = (ctx: Context) => {
  const Authorization = ctx.request.get('Authorization')

  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId, workspaceId } = jwt.verify(token, process.env.APP_SECRET) as JWTPayload

    if (!(userId && workspaceId)) {
      throw new Error('Invalid Authorization Token')
    } else {
      return { userId, workspaceId }
    }
  }

  throw new Error('Not Authorized!')
}

export interface Context {
  db: Prisma
  request: any
}

// https://github.com/prisma/prisma-binding/issues/202
export type FirstArgument<T> = T extends (arg1: infer U, ...args: any[]) => any ? U : any

export type Remapped<T> = {
  [P in keyof T]: (
    parent: null | undefined,
    args: FirstArgument<T[P]>,
    ctx: Context,
    info?: GraphQLResolveInfo
  ) => any
}

export type Query = Partial<Remapped<ApiQuery>>
export type Mutation = Partial<Remapped<ApiMutation>>

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

export type RuleRemapped<T> = { [P in keyof T]: IRules }

export type RuleQuery = Partial<RuleRemapped<ApiQuery>>
export type RuleMutation = Partial<RuleRemapped<ApiMutation>>

export type DataInputFieldsRules<T = ApiMutation> = {
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
