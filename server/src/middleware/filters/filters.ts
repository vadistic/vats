import { GraphQLResolveInfo } from 'graphql'
import * as R from 'ramda'

import { Context } from '../../utils'

export interface Args {
  data?: object
  where?: object
}

export type Filter = (
  parent: any,
  args: Args,
  ctx: Context,
  info: GraphQLResolveInfo
) => Promise<{
  parent: any
  args: Args
  ctx: Context
  info: GraphQLResolveInfo
}>

export type ComposeFilters = (filterArr: Filter[]) => any

export const composeFilters: ComposeFilters = filterArr => async (
  resolve,
  parent,
  args,
  ctx,
  info
) => {
  const filtersP = filterArr.reduce(
    (acc, filter) => {
      return R.append(filter(parent, args, ctx, info), acc)
    },
    [] as Array<ReturnType<Filter>>
  )

  const { data, where } = await Promise.all(filtersP)
    .then(res => ({
      data: res.reduce((acc, val) => R.merge(acc, val.args.data), args.data ? args.data : {}),
      where: res.reduce((acc, val) => R.merge(acc, val.args.where), {}),
    }))
    .catch(() => {
      throw new Error(`Error in compose filters`)
    })

  // assign data, enclose where in AND rule and skip the rest of args
  return resolve(parent, { data, where: { AND: { ...args.where, ...where } } }, ctx, info)
}

export const whereWorkspaceF: Filter = async (parent, args, ctx, info) => {
  return { parent, args: { where: { workspace: { id: ctx.auth.workspaceId } } }, ctx, info }
}

export const whereUserF: Filter = async (parent, args, ctx, info) => {
  return { parent, args: { where: { user: { id: ctx.auth.userId } } }, ctx, info }
}

export const noopF: Filter = async (parent, args, ctx, info) => ({
  parent,
  args,
  ctx,
  info,
})
