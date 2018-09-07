import { allow, and, deny, IRules, rule, shield } from 'graphql-shield'
import * as R from 'ramda'

import { Context, DataInputFieldsRules, getId, RuleMutation, RuleQuery } from '../utils'
import { Args } from './filters'

// TODO: Evaluate if this is secure?
const isAuthenticated = rule()(async (parent, args, ctx) => ctx.user !== null)

const isSameWorkspace = (type: string) =>
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

/* Input field permission */

const arraize = (val: any) => (Array.isArray(val) ? val : [val])

const createTaskInputRule: DataInputFieldsRules['createTask'] = {
  data: {
    owners: async (parent, args, ctx) => {
      const workspaceId = getId(ctx).workspaceId

      const ids = arraize(R.path(['data', 'owners', 'connect'], args))

      const validations = ids.map(id =>
        ctx.db.exists.Workspace({
          AND: { users_some: { id }, id: workspaceId },
        })
      )

      return R.all(R.equals(true), await Promise.all(validations))
    },
    subscribers: async (parent, args, ctx) => {
      const workspaceId = getId(ctx).workspaceId

      const ids = arraize(R.path(['data', 'owners', 'connect'], args))

      const validations = ids.map(id =>
        ctx.db.exists.Workspace({
          AND: { users_some: { id }, id: workspaceId },
        })
      )

      return R.all(R.equals(true), await Promise.all(validations))
    },
  },
}

interface InputRuleMap {
  data: {
    [name: string]: (parent, args, ctx: Context, info) => Promise<boolean>
  }
}

const inputRule = (inputRuleMap: InputRuleMap) =>
  rule()(async (parent, args: Args, ctx: Context, info) => {
    const rulesP = R.keys(args.data).map(
      async key =>
        R.has(key, inputRuleMap)
          ? inputRuleMap.data[key](parent, args, ctx, info)
          : Promise.resolve(true)
    )


    return R.all(R.equals(true), await Promise.all(rulesP))
  })

interface Rules {
  Query: RuleQuery
  Mutation: RuleMutation
}

export const rules: IRules = {
  Query: {
    // action
    // application
    application: and(isAuthenticated, isSameWorkspace('User')),
    applications: isAuthenticated,
    // auth
    // candidate
    candidate: and(isAuthenticated, isSameWorkspace('Candidate')),
    candidates: isAuthenticated,
    // comment
    // invite
    invite: and(isAuthenticated, isSameWorkspace('Invite')),
    invites: isAuthenticated,
    // job
    job: and(isAuthenticated, isSameWorkspace('Offer')),
    jobs: isAuthenticated,
    // stage
    // task
    // user
    user: and(isAuthenticated, isSameWorkspace('User')),
    users: allow,
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
    createInvite: and(isAuthenticated, isSameWorkspace('Invite')),
    updateInvite: and(isAuthenticated, isSameWorkspace('Invite')),
    deleteInvite: and(isAuthenticated, isSameWorkspace('Invite')),
    // job
    // stage
    // task
    createTask: inputRule(createTaskInputRule),
    updateTask: allow,
    deleteTask: allow,
    // user
    // workspace
    createWorkspace: allow,
  },
}

const permissions = shield(rules)

export default permissions
