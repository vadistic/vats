import { forwardTo } from 'prisma-binding'

import { IMutation, IQuery } from '../utils'

const randomResolver: IQuery['random'] = async (_, args, ctx) => {
  const test = await ctx.client.jobs({ first: 3 })

  return JSON.stringify(test)
}

export const Query: IQuery = {
  user: forwardTo('db'),
  users: forwardTo('db'),
  random: randomResolver,
}

export const Mutation: Required<IMutation> = {
  createApplication: forwardTo('db'),
  createCandidate: forwardTo('db'),
  createJob: forwardTo('db'),
  createTask: forwardTo('db'),
}

export const resolvers = {
  Query,
  Mutation,
}
