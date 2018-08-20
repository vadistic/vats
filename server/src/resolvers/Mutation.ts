import { forwardTo } from 'prisma-binding'

import { Context } from '../utils'

// Make avalible only via web
export const createOrganisation = (root, { data }, ctx: Context, info) =>
  ctx.db.mutation.createOrganisation({ data }, info)

export const createPost = forwardTo('db')
export const createUser = forwardTo('db')

