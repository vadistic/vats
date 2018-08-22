import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import * as dayjs from 'dayjs'

import { getId, Context, Mutation } from '../../utils'

const jwtPayload = (userId, workspaceId) => ({
  // userId
  uid: userId,
  // workspaceId
  wid: workspaceId,
  // token expiration date
  exp: dayjs()
    .add(7, 'day')
    .format(),
})

export const invite = async (parent, { email }, ctx: Context, info) => {
  const { userId, workspaceId } = getId(ctx)

  const expireAt = dayjs()
    .add(7, 'day')
    .format()

  return ctx.db.mutation.createInvite(
    {
      data: {
        email,
        expireAt,
        workspace: { connect: { id: workspaceId } },
        invitedBy: { connect: { id: userId } },
      },
    },
    info
  )
}

export const signup: Mutation['signup'] = async (parent, args, ctx, info) => {
  const password = await bcrypt.hash(args.password, 10)
  const invite = await ctx.db.query.invite(
    { where: { id: args.inviteId } },
    `{email, workspace {id}}`
  )

  const user = await ctx.db.mutation.createUser({
    data: {
      username: args.username,
      password,
      email: invite.email,
      workspace: { connect: { id: invite.workspace.id } },
    },
  })

  return {
    // or invite.workspace.id as wid - check!
    token: jwt.sign(jwtPayload(user.id, user.workspace.id), process.env.APP_SECRET),
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
    token: jwt.sign(jwtPayload(user.id, user.workspace.id), process.env.APP_SECRET),
    user,
  }
}
