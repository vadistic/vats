import { allow, and, deny, IRule, IRules, rule, shield } from 'graphql-shield'
import * as R from 'ramda'

import { ShieldRule } from 'graphql-shield/dist/types'
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

const toManyDataWorkspaceConnection = (target: string) => (field: string) =>
  rule()(async (parent, args, ctx: Context) => {
    // shortcircuit
    if (!R.has(field, args.data)) {
      return true
    }

    const workspaceId = getId(ctx).workspaceId
    const targetConnect = args.data[field].connect

    const validationP = targetConnect.map(connect => {
      return ctx.db.exists[target]({
        AND: {
          id: connect.id,
          workspace: { id: workspaceId },
        },
      }).then(res => (res === true ? Promise.resolve(true) : Promise.reject('Not Authorized')))
    })

    const result = R.all(R.equals(true), await Promise.all(validationP).catch(rej => [false]))

    return result
  })

const toOneDataWorkspaceConnection = (target: string) => (field: string) =>
  rule()(async (parent, args, ctx: Context) => {
    // shortcircuit
    if (!R.has(field, args.data)) {
      return true
    }

    const workspaceId = getId(ctx).workspaceId

    const result: boolean = await ctx.db.exists[target]({
      AND: {
        id: args.data[field].connect.id,
        workspace: { id: workspaceId },
      },
    })

    return result
  })

const toOneWhereWorkspace = (target: string) =>
  rule()(async (parent, args, ctx: Context) => {
    // shortcircuit
    if (!R.has('id', args.where)) {
      return true
    }

    const workspaceId = getId(ctx).workspaceId

    const result: boolean = await ctx.db.exists[target]({
      AND: {
        id: args.where.id,
        workspace: { id: workspaceId },
      },
    })
    return result
  })

interface ConnectionRuleMap {
  [key: string]: (field: string) => IRule
}

const verifyConnections = (connectionRuleMap: ConnectionRuleMap) => {
  const rulesArr = Object.entries(connectionRuleMap).map(([key, fn]) => fn(key))
  return and(...rulesArr)
}

type FieldRule = (fieldName: string) => IRule

const fieldAnd = (fieldName: string) => (...args: FieldRule[]) =>
  and(...args.map(arg => arg(fieldName)))

export const rules: IRules = {
  Query: {
    // action
    // application
    application: and(isAuthenticated, toOneWhereWorkspace('User')),
    applications: isAuthenticated,
    // auth
    // candidate
    candidate: and(isAuthenticated, toOneWhereWorkspace('Candidate')),
    candidates: isAuthenticated,
    // comment
    // invite
    invite: and(isAuthenticated, toOneWhereWorkspace('Invite')),
    invites: isAuthenticated,
    // job
    job: and(isAuthenticated, toOneWhereWorkspace('Offer')),
    jobs: isAuthenticated,
    // stage
    // task
    // user
    user: and(isAuthenticated, toOneWhereWorkspace('User')),
    users: allow,
    // workspace
    workspace: and(isAuthenticated, workspaceHasUser),
  },
  Mutation: {
    createApplication: and(
      isAuthenticated,
      verifyConnections({
        owners: toManyDataWorkspaceConnection('User'),
        subscribers: toManyDataWorkspaceConnection('User'),
        job: toOneDataWorkspaceConnection('Job'),
        candidate: toOneDataWorkspaceConnection('Candidate'),
      })
    ),
    // action
    // application
    // auth
    signup: allow,
    login: allow,
    // candidate
    // comment
    // invite
    createInvite: and(isAuthenticated, toOneWhereWorkspace('Invite')),
    updateInvite: and(isAuthenticated, toOneWhereWorkspace('Invite')),
    deleteInvite: and(isAuthenticated, toOneWhereWorkspace('Invite')),
    // job
    // stage
    // task

    // Task
    createTask: and(
      isAuthenticated,
      verifyConnections({
        owners: toManyDataWorkspaceConnection('User'),
        subscribers: toManyDataWorkspaceConnection('User'),
        job: toOneDataWorkspaceConnection('Job'),
        candidate: toOneDataWorkspaceConnection('Candidate'),
      })
    ),
    updateTask: and(
      isAuthenticated,
      verifyConnections({
        owners: toManyDataWorkspaceConnection('User'),
        subscribers: toManyDataWorkspaceConnection('User'),
        job: toOneDataWorkspaceConnection('Job'),
        candidate: toOneDataWorkspaceConnection('Candidate'),
      })
    ),
    deleteTask: and(isAuthenticated, toOneWhereWorkspace('Task')),

    createWorkspace: allow,
  },
}

const permissions = shield(rules)

export default permissions
