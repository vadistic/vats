import * as jwt from 'jsonwebtoken'

import { Prisma } from './generated/prisma'

export interface Context {
  db: Prisma
  request: any
}

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
