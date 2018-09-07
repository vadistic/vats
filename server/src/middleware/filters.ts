import { GraphQLResolveInfo } from 'graphql'
import { IMiddleware } from 'graphql-middleware'
import * as R from 'ramda'

import { Context, getId, MiddlewareFieldMap, MiddlewarePropMap } from '../utils'

const whereWorkspace = async (resolve, parent, args, ctx, info) => {
  const workspaceId = getId(ctx).workspaceId

  return resolve(
    parent,
    {
      ...args,
      where: { AND: { ...args.where, workspace: { id: workspaceId } } },
    },
    ctx,
    info
  )
}

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

const whereWorkspaceFilter: Filter = async (parent, args, ctx, info) => {
  const workspaceId = getId(ctx).workspaceId
  return { parent, args: { where: { workspace: { id: workspaceId } } }, ctx, info }
}

const whereUserFilter: Filter = async (parent, args, ctx, info) => {
  const id = getId(ctx).userId
  return { parent, args: { where: { user: { id } } }, ctx, info }
}

const dataWorkspaceFilter: Filter = async (parent, args, ctx, info) => {
  const id = getId(ctx).workspaceId
  return { parent, args: { data: { workspace: { connect: { id } } } }, ctx, info }
}

const filters: IMiddleware & MiddlewareFieldMap = {
  Query: {
    // action
    // application
    notifications: composeFilters([whereUserFilter]),
    applications: composeFilters([whereWorkspaceFilter]),
    // candidate
    candidates: composeFilters([whereWorkspaceFilter]),
    // comment
    // invite
    invites: composeFilters([whereWorkspaceFilter]),
    // job
    jobs: composeFilters([whereWorkspaceFilter]),
    // stage
    // task
    tasks: composeFilters([whereWorkspaceFilter]),
    // user
    users: composeFilters([whereWorkspaceFilter]),
    // workspace
    workspace: composeFilters([whereWorkspaceFilter]),
  },
  Mutation: {
    createTask: composeFilters([dataWorkspaceFilter]),
  },
}

export default filters
