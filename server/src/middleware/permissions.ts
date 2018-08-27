import { rule, shield, allow, deny, and } from 'graphql-shield'

import { Context, getId } from '../utils'
import { UserWhereUniqueInput } from '../generated/app'

// TODO: Evaluate if this is secure?
const isAuthenticated = rule()(async (parent, args, ctx, info) => ctx.user !== null)

const isSameWorkspace = (type: string) =>
  rule()(async (parent, args, ctx: Context, info) => {
    const workspaceId = getId(ctx).workspaceId
    return ctx.db.exists[type]({ id: args.where.id, workspace: { id: workspaceId } })
  })

const workspaceHasUser = rule()(async (parent, args, ctx: Context, info) => {
  const userId = getId(ctx).userId
  return ctx.db.exists.Workspace({ id: args.where.id, users_some: { id: userId } })
})

export default shield({
  Query: {
    user: and(isAuthenticated, isSameWorkspace('User')),
    users: isAuthenticated,
    invite: and(isAuthenticated, isSameWorkspace('Invite')),
    invites: isAuthenticated,
    candidate: and(isAuthenticated, isSameWorkspace('Candidate')),
    candidates: isAuthenticated,
    offer: and(isAuthenticated, isSameWorkspace('Offer')),
    offers: isAuthenticated,
    workspace: and(isAuthenticated, workspaceHasUser),
  },
  Mutation: {
    createWorkspace: allow,
    signup: allow,
    login: allow,
    // secure because invite only can be created in user's workspace
    createInvite: isAuthenticated,
    // secure because update only extends expireBy date & resends email
    updateInvite: and(isAuthenticated, isSameWorkspace('Invite')),
    deleteInvite: and(isAuthenticated, isSameWorkspace('Invite')),
  },
})
