import { and, IRule, rule } from 'graphql-shield'
import * as R from 'ramda'

import { Context } from '../../utils'

/* Syntax for input field rules */
export type FieldRule = (fieldName: string) => IRule

export interface FieldRuleMap {
  [key: string]: FieldRule
}

export const fieldRules = (connectionRuleMap: FieldRuleMap) => {
  const rulesArr = Object.entries(connectionRuleMap).map(([key, fn]) => fn(key))
  return and(...rulesArr)
}

export const fieldAnd = (fieldName: string) => (...args: FieldRule[]) =>
  and(...args.map(arg => arg(fieldName)))

/* Standard Rules */
export const isAuthenticated = rule()(async (parent, args, ctx) => ctx.auth !== null)

export const whereSameWorkspace = (target: string) =>
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

export const toOneWhereUser = (target: string) =>
  rule()(async (parent, args, ctx: Context) => {
    // shortcircuit
    if (!R.has('id', args.where)) {
      return true
    }

    const result: boolean = await ctx.db.exists.User({
      AND: {
        id: args.where.id,
        workspace: { id: ctx.auth.workspaceId },
      },
    })
    return result
  })

/* Field rules */
export const toOneDataWorkspaceConnection = (target: string) => (field: string) =>
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

export const toManyDataWorkspaceConnection = (target: string) => (field: string) =>
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

    const result = R.all(R.equals(true), await Promise.all(validationP).catch(() => [false]))

    return result
  })
