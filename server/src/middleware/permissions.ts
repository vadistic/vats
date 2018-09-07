import { allow, and, deny, IRules, rule, shield } from 'graphql-shield'
import * as R from 'ramda'

import {
  Context,
  DataInputFieldsRules,
  getId,
  RuleMutation,
  RuleQuery,
  WhereInputFieldsRules,
} from '../utils'
import { Args } from './filters'

/* tslint:disable:no-console */

// TODO: Evaluate if this is secure?
const isAuthenticated = rule()(async (parent, args, ctx) => ctx.user !== null)

const whereWorkspaceArg = (type: string) =>
  rule()(async (parent, args, ctx: Context) => {
    const workspaceId = getId(ctx).workspaceId
    return ctx.db.exists[type]({
      id: args.where.id,
      workspace: { id: workspaceId },
    })
  })

const workspaceHasUser = rule()(async (parent, args, ctx: Context) => {
  const userId = getId(ctx).userId
  return ctx.db.exists.Workspace({
    id: args.where.id,
    users_some: { id: userId },
  })
})


interface Rules {
  Query: RuleQuery
  Mutation: RuleMutation
}

const verifyWorkspaceConnection = (field: string) => (target: string) =>
  rule()(async (parent, args, ctx: Context) => {
    const workspaceId = getId(ctx).workspaceId
    const targetConnect = args.data[field].connect

    if (!R.has(field, args.data)) {
      console.log(`verifyConnection: no ${field} - shortcircut`)
      return true
    }

    const validationP = targetConnect.map(connect => {
      return ctx.db.exists[target]({
        AND: {
          id: connect.id,
          workspace: { id: workspaceId },
        },
      }).then(res => (res === true ? Promise.resolve(true) : Promise.reject('Not Authorized')))
    })

    return R.all(R.equals(true), await Promise.all(validationP).catch(rej => [false]))
  })

export const rules: IRules = {
  Query: {
    // action
    // application
    application: and(isAuthenticated, whereWorkspaceArg('User')),
    applications: isAuthenticated,
    // auth
    // candidate
    candidate: and(isAuthenticated, whereWorkspaceArg('Candidate')),
    candidates: isAuthenticated,
    // comment
    // invite
    invite: and(isAuthenticated, whereWorkspaceArg('Invite')),
    invites: isAuthenticated,
    // job
    job: and(isAuthenticated, whereWorkspaceArg('Offer')),
    jobs: isAuthenticated,
    // stage
    // task
    // user
    user: and(isAuthenticated, whereWorkspaceArg('User')),
    users: inputRule(usersWhereInputRule),
    // workspace
    workspace: and(isAuthenticated, workspaceHasUser),
  },
  Mutation: {
    // action
    // application
    // auth
    signup: allow,
    login: allow,
    // candidate
    // comment
    // invite
    createInvite: and(isAuthenticated, whereWorkspaceArg('Invite')),
    updateInvite: and(isAuthenticated, whereWorkspaceArg('Invite')),
    deleteInvite: and(isAuthenticated, whereWorkspaceArg('Invite')),
    // job
    // stage
    // task
    createTask: and(
      verifyWorkspaceConnection('owners')('User'),
      verifyWorkspaceConnection('subscribers')('User')
    ),
    updateTask: allow,
    deleteTask: allow,
    // user
    // workspace
    createWorkspace: allow,
  },
}

const permissions = shield(rules)

export default permissions
