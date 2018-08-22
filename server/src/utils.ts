import * as jwt from 'jsonwebtoken'
import { GraphQLResolveInfo } from 'graphql'
import * as dayjs from 'dayjs'

import { Mutation as ApiMutation, Query as ApiQuery, AuthPayload } from './generated/app'
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

  throw new Error('Not Authorized')
}

export interface Context {
  db: Prisma
  request: any
}

// file: utils.ts
// https://github.com/prisma/prisma-binding/issues/202

export type FirstArgument<T> = T extends (arg1: infer U, ...args: any[]) => any ? U : any

type Return = ReturnType<ApiMutation['signup']>

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
