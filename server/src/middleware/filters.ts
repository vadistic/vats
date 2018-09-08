import { GraphQLResolveInfo } from 'graphql'
import { IMiddleware } from 'graphql-middleware'
import * as R from 'ramda'

import { Context, MiddlewareFieldMap } from '../utils'

export interface Args {
  data?: object
  where?: object
}

type Filter = (
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

type ComposeFilters = (filterArr: Filter[]) => any

const composeFilters: ComposeFilters = filterArr => async (resolve, parent, args, ctx, info) => {
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

const whereWorkspace: Filter = async (parent, args, ctx, info) => {
  return { parent, args: { where: { workspace: { id: ctx.auth.workspaceId } } }, ctx, info }
}

const whereUserFilter: Filter = async (parent, args, ctx, info) => {
  return { parent, args: { where: { user: { id: ctx.auth.userId } } }, ctx, info }
}

const dataWorkspaceConnect: Filter = async (parent, args, ctx, info) => {
  return {
    parent,
    args: { data: { workspace: { connect: { id: ctx.auth.workspaceId } } } },
    ctx,
    info,
  }
}

const filters: IMiddleware & MiddlewareFieldMap = {
  Query: {
    // action
    // application
    notifications: composeFilters([whereUserFilter]),
    applications: composeFilters([whereWorkspace]),
    // candidate
    candidates: composeFilters([whereWorkspace]),
    // comment
    // invite
    invites: composeFilters([whereWorkspace]),
    // job
    jobs: composeFilters([whereWorkspace]),
    // stage
    // task
    tasks: composeFilters([whereWorkspace]),
    // user
    // workspace
    workspace: composeFilters([whereWorkspace]),
  },
  Mutation: {
    createTask: composeFilters([dataWorkspaceConnect]),
  },
}

export default filters
