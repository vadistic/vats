import * as bcrypt from 'bcryptjs'
import * as dayjs from 'dayjs'
import * as jwt from 'jsonwebtoken'

import { IMutation } from '../utils'
import { IContext } from '../utils'

export const AuthPayload = {
  user: async ({ user: { id } }, args, ctx: IContext, info) => {
    return ctx.db.query.user({ where: { id } }, info)
  },
}

export const signToken = (userId, workspaceId) =>
  jwt.sign({ userId, workspaceId }, process.env.APP_SECRET, {
    expiresIn: '7 days',
  })

export const createWorkspace: IMutation['createWorkspace'] = async (
  parent,
  { data: { name, password: passwordRaw, ...args } },
  ctx,
  info
) => {
  const password = await bcrypt.hash(passwordRaw, 10)

  const workspace = await ctx.db.mutation.createWorkspace({
    data: { name },
  })

  const user = await ctx.db.mutation.createUser({
    data: { ...args, password, workspace: { connect: { id: workspace.id } } },
  })

  return {
    token: signToken(user.id, workspace.id),
    user,
  }
}

export const signup: IMutation['signup'] = async (
  parent,
  { data: { inviteId, password: passwordRaw, username } },
  ctx,
  info
) => {
  const invite = await ctx.db.query.invite(
    { where: { id: inviteId } },
    `{email, expireAt, workspace { id }}`
  )

  if (!invite) {
    throw Error('Ivalid Invitation')
  }

  if (dayjs(invite.expireAt).isBefore(dayjs())) {
    throw Error('Invitation expired')
  }

  const password = await bcrypt.hash(passwordRaw, 10)

  const deleteInvite = await ctx.db.mutation.deleteInvite({ where: { id: inviteId } })

  if (!deleteInvite) {
    throw Error('Signup processing failed (cannot delete invitation)')
  }

  const user = await ctx.db.mutation.createUser({
    data: {
      username,
      password,
      email: invite.email,
      workspace: { connect: { id: invite.workspace.id } },
    },
  })

  if (!user) {
    throw Error('Signup processing failed (cannot create user)')
  }

  return {
    token: signToken(user.id, invite.workspace.id),
    user,
  }
}

export const login: IMutation['login'] = async (
  parent,
  { data: { email, password } },
  ctx,
  info
) => {
  const user = await ctx.db.query.user({ where: { email } }, `{id, password, workspace { id }}`)

  if (!user) {
    throw new Error(`No such user found for email: ${email}`)
  }

  const valid = await bcrypt.compare(password, user.password)

  if (!valid) {
    throw new Error('Invalid password')
  }

  // update last login
  ctx.db.mutation.updateUser({ data: { lastLogin: dayjs().format() }, where: { id: user.id } })

  return {
    token: signToken(user.id, user.workspace.id),
    user,
  }
}
