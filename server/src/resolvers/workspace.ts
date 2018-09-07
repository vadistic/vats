import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { forwardTo } from 'prisma-binding'

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
  // tslint:disable-next-line:no-console
  console.log(name)
  const password = await bcrypt.hash(passwordRaw, 10)
  // tslint:disable-next-line:no-console
  console.log(password)

  // tslint:disable-next-line:no-shadowed-variable
  const workspace = await ctx.db.mutation.createWorkspace({
    data: { name },
  })
  // tslint:disable-next-line:no-console
  console.log(workspace.id)
  // tslint:disable-next-line:no-console
  console.log('workspace created')

  const user = await ctx.db.mutation.createUser({
    data: { ...args, password, workspace: { connect: { id: workspace.id } } },
  })

  // tslint:disable-next-line:no-console
  console.log(user.id)
  // tslint:disable-next-line:no-console
  console.log('user created')

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
