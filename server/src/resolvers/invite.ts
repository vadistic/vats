import * as dayjs from 'dayjs'
import { forwardTo } from 'prisma-binding'

import { getId, Mutation } from '../utils'

export const invite = forwardTo('db')
export const invites = forwardTo('db')

export const InviteQueries = {
  invite,
  invites,
}

export const createInvite: Mutation['createInvite'] = async (
  parent,
  { data: { email } },
  ctx,
  info
) => {
  const { userId, workspaceId } = getId(ctx)

  const expireAt = dayjs()
    .add(7, 'day')
    .format()

  // TODO: trriger invitation email

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

export const updateInvite: Mutation['updateInvite'] = async (
  parent,
  { where: { id } },
  ctx,
  info
) => {
  const expireAt = dayjs()
    .add(7, 'day')
    .format()

  // TODO: trriger invitation email

  return ctx.db.mutation.updateInvite({ where: { id }, data: { expireAt } }, info)
}

export const deleteInvite: Mutation['deleteInvite'] = forwardTo('db')

export const InviteMutations = {
  createInvite,
  updateInvite,
  deleteInvite,
}
