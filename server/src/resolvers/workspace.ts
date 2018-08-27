import { forwardTo } from 'prisma-binding'
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'

import { Mutation } from '../utils'

export const workspace = forwardTo('db')

export const WorkspaceQueries = {
  workspace,
}

export const createWorkspace: Mutation['createWorkspace'] = async (
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
    token: jwt.sign({ userId: user.id, workspaceId: workspace.id }, process.env.APP_SECRET, {
      expiresIn: '7 days',
    }),
    user,
  }
}

export const updateWorkspace = forwardTo('db')
export const deleteWorkspace = forwardTo('db')

export const WorkspaceMutations = {
  createWorkspace,
  updateWorkspace,
  deleteWorkspace,
}
