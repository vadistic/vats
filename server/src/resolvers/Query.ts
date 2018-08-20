import { getUserId } from 'graphql-authentication'

import { Context } from '../utils'

export const users = async (root, args, ctx: Context, info) => {
  return await ctx.db.query.users({}, info)
}
