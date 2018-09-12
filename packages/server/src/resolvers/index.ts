import { forwardTo } from 'prisma-binding'

import { IMutation, IQuery } from '../utils'
import { createWorkspace, login, signup, refresh } from './auth'

const me = async (parent, args, ctx, info) =>
  ctx.db.query.user({ where: { id: ctx.auth.userId } }, info)

export const Query: IQuery = {}

export const Mutation: IMutation = {
  // CUSTOM / AUTH
  signup,
  login,
  refresh,
}

export { AuthPayload } from './auth'
