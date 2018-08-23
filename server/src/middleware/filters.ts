import { Context, getId } from '../utils'

const whereSameWorkspace = async (resolve, parent, args, ctx, info) => {
  const workspaceId = getId(ctx).workspaceId

  return resolve(
    parent,
    { ...args, where: { AND: { ...args.where, workspace: { id: workspaceId } } } },
    ctx,
    info
  )
}

const filters = {
  Query: {
    users: whereSameWorkspace,
    invites: whereSameWorkspace,
    offers: whereSameWorkspace,
    candidates: whereSameWorkspace,
  },
}

export default filters
