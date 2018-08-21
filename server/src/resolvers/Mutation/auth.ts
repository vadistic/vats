import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import * as dayjs from 'dayjs'

import { Context, getUserId } from '../../utils'

export const invite = async (parent, { email, workspaceId }, ctx: Context, info) => {
  const userId = getUserId(ctx)

  const expireAt = dayjs()
    .add(7, 'day')
    .format()

  return ctx.db.mutation.createInvite({
    data: {
      email,
      expireAt,
      workspace: { connect: { id: workspaceId } },
      invitedBy: { connect: { id: userId } },
    },
  })
}

export const signup = async (parent, args, ctx: Context, info) => {
  const password = await bcrypt.hash(args.password, 10)
  const invite = await ctx.db.query.invite({ where: { id: args.inviteId } })

  const user = await ctx.db.mutation.createUser({
    data: { ...args, password, email: invite.email, workspace: invite.workspace },
  })

  return {
    token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
    user,
  }
}

export const login = async (parent, { email, password }, ctx: Context, info) => {
  const user = await ctx.db.query.user({ where: { email } })
  if (!user) {
    throw new Error(`No such user found for email: ${email}`)
  }

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  return {
    token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
    user,
  }
}
