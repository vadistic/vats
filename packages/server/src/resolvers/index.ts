import { forwardTo } from 'prisma-binding'

import { IMutation, IQuery } from '../utils'

const me = async (parent, args, ctx, info) =>
  ctx.db.query.user({ where: { id: ctx.auth.userId } }, info)

export const Query: IQuery = {
  users: forwardTo('db'),
}

export const Mutation: IMutation = {
  createApplication: forwardTo('db'),
  createCandidate: forwardTo('db'),
  createJob: forwardTo('db'),
  createTask: forwardTo('db'),
}
