import { allow, and, deny, IRule, IRules, rule, shield } from 'graphql-shield'
import * as R from 'ramda'

import { ShieldRule } from 'graphql-shield/dist/types'
import {
  Context,
  DataInputFieldsRules,
  RuleMutation,
  RuleQuery,
  WhereInputFieldsRules,
} from '../utils'
import { Args } from './filters'

/* tslint:disable:no-console */

const isAuthenticated = rule()(async (parent, args, ctx) => ctx.auth !== null)

const workspaceHasUser = rule()(async (parent, args, ctx: Context) => {
  return ctx.db.exists.Workspace({
    id: args.where.id,
    users_some: { id: ctx.auth.userId },
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

    const targetConnect = args.data[field].connect

    const validationP = targetConnect.map(connect => {
      return ctx.db.exists[target]({
        AND: {
          id: connect.id,
          workspace: { id: ctx.auth.workspaceId },
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

    const result: boolean = await ctx.db.exists[target]({
      AND: {
        id: args.data[field].connect.id,
        workspace: { id: ctx.auth.workspaceId },
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

    const result: boolean = await ctx.db.exists[target]({
      AND: {
        id: args.where.id,
        workspace: { id: ctx.auth.workspaceId },
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
    createTask: and(isAuthenticated),
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
