import { GraphQLResolveInfo } from 'graphql'
import * as R from 'ramda'

import { IMiddlewareFunction } from 'graphql-middleware'
import { IContext } from '../../utils'

export interface IArgs {
  data?: object
  where?: object
}

export type Filter = (
  parent: any,
  args: IArgs,
  ctx: IContext,
  info: GraphQLResolveInfo
) => Promise<{
  parent: any
  args: IArgs
  ctx: IContext
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

export const whereWorkspaceF: Filter = async (parent, args, ctx, info) => ({
  parent,
  args: { where: { workspace: { id: ctx.token.tenant.id } } },
  ctx,
  info,
})

export const whereUserF: Filter = async (parent, args, ctx, info) => ({
  parent,
  args: { where: { user: { id: ctx.token.user.id } } },
  ctx,
  info,
})

export const dataWorkspaceConnectF: Filter = async (parent, args, ctx, info) => ({
  parent,
  args: { data: { workspace: { connect: { id: ctx.token.user.id } } } },
  ctx,
  info,
})

export const noopF: Filter = async (parent, args, ctx, info) => ({
  parent,
  args,
  ctx,
  info,
})

// fix input
export const whereFixToUser: IMiddlewareFunction<any, IContext, any> = async (
  resolve,
  parent,
  args,
  ctx,
  info
) => resolve(parent, { where: { user: { id: ctx.token.user.id } } }, ctx, info)

export const whereFixToWorkspace: IMiddlewareFunction<any, IContext, any> = async (
  resolve,
  parent,
  args,
  ctx,
  info
) => resolve(parent, { where: { workspace: { id: ctx.token.tenant.id } } }, ctx, info)
