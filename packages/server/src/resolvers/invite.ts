import * as dayjs from 'dayjs'

import { IMutation } from '../utils'

export const createInvite: IMutation['createInvite'] = async (
  parent,
  { data: { email } },
  ctx,
  info
) => {
  const expireAt = dayjs()
    .add(7, 'day')
    .format()

  // TODO: trriger invitation email

  return ctx.db.mutation.createInvite(
    {
      data: {
        email,
        expireAt,
        workspace: { connect: { id: ctx.auth.workspaceId } },
        invitedBy: { connect: { id: ctx.auth.userId } },
      },
    },
    info
  )
}

export const updateInvite: IMutation['updateInvite'] = async (
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
