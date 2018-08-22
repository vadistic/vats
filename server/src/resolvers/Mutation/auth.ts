import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import * as dayjs from 'dayjs'

import { getId, Mutation } from '../../utils'

export interface JWTPayload {
  userId: string
  workspaceId: string
}

export const invite: Mutation['invite'] = async (parent, { email }, ctx, info) => {
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
  const invite = await ctx.db.query.invite(
    { where: { id: args.inviteId } },
    `{email, expireAt, workspace {id}}`
  )

  if (!invite) {
    throw Error('Ivalid Invitation Token')
  }

  if (dayjs(invite.expireAt).isBefore(dayjs())) {
    throw Error('Invitation token expired')
  }

  const password = await bcrypt.hash(args.password, 10)

  ctx.db.mutation.deleteInvite({ where: { id: args.inviteId } })

  const user = await ctx.db.mutation.createUser({
    data: {
      username: args.username,
      password,
      email: invite.email,
      workspace: { connect: { id: invite.workspace.id } },
    },
  })

  return {
    token: jwt.sign({ userId: user.id, workspaceId: invite.workspace.id }, process.env.APP_SECRET, {
      expiresIn: '7 days',
    }),
    user,
  }
}

export const login: Mutation['login'] = async (parent, { email, password }, ctx, info) => {
  const user = await ctx.db.query.user({ where: { email } }, `{id, password, workspace {id}}`)

  console.log(user)

  if (!user) {
    throw new Error(`No such user found for email: ${email}`)
  }

  const valid = await bcrypt.compare(password, user.password)

  if (!valid) {
    throw new Error('Invalid password')
  }

  return {
    token: jwt.sign({ userId: user.id, workspaceId: user.workspace.id }, process.env.APP_SECRET, {
      expiresIn: '7 days',
    }),
    user,
  }
}
