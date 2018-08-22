import * as jwt from 'jsonwebtoken'
import { GraphQLResolveInfo } from 'graphql'
import * as dayjs from 'dayjs'

import { Mutation as ApiMutation, Query as ApiQuery, AuthPayload } from './generated/app'
import { Prisma } from './generated/prisma'

interface JWTPayload {
  uid: string
  wip: string
  exp: string
}

export const getId = (ctx: Context) => {
  const Authorization = ctx.request.get('Authorization')

  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { uid, wip, exp } = jwt.verify(token, process.env.APP_SECRET) as JWTPayload

    if (!(uid && wip && exp)) {
      throw new Error('Invalid Authorization Token')
    } else if (dayjs(exp).isBefore(dayjs())) {
      throw new Error('Expired Authorization Token')
    } else {
      return { userId: uid, workspaceId: wip }
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
