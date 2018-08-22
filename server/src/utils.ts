import * as jwt from 'jsonwebtoken'
import { GraphQLResolveInfo } from 'graphql'

import { Mutation as ApiMutation, Query as ApiQuery, AuthPayload } from './generated/app'
import { Prisma } from './generated/prisma'

export const getUserId = (ctx: Context) => {
  const Authorization = ctx.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, process.env.APP_SECRET) as { userId: string }
    return userId
  }

  throw new Error('Not Authorized')
}

export const getWorkspaceId = (ctx: Context) => {
  const workspaceId = ctx.request.get('Workspace')
  if (workspaceId) {
    return workspaceId
  }

  throw Error('Invalid Workspace Authorization')
}

export interface Context {
  db: Prisma
  request: any
}

// file: utils.ts
// https://github.com/prisma/prisma-binding/issues/202

export type FirstArgument<T> = T extends (arg1: infer U, ...args: any[]) => any ? U : any

type Return = ReturnType<ApiMutation['signup']>

export type Remapped<T extends FuncObj<T>> = {
  [P in keyof T]: (
    parent: null | undefined,
    args: FirstArgument<T[P]>,
    ctx: Context,
    info?: GraphQLResolveInfo
  ) => any
}

export type Query = Partial<Remapped<ApiQuery>>
export type Mutation = Partial<Remapped<ApiMutation>>
