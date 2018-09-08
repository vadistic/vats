import * as bcrypt from 'bcryptjs'
import * as dayjs from 'dayjs'
import * as jwt from 'jsonwebtoken'

import { Mutation } from '../utils'

export const signup: Mutation['signup'] = async (
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
    token: jwt.sign({ userId: user.id, workspaceId: invite.workspace.id }, process.env.APP_SECRET, {
      expiresIn: '7 days',
    }),
    user,
  }
}

export const login: Mutation['login'] = async (
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

  return {
    token: jwt.sign({ userId: user.id, workspaceId: user.workspace.id }, process.env.APP_SECRET, {
      expiresIn: '7 days',
    }),
    user,
  }
}

export const AuthMutations = {
  signup,
  login,
}
