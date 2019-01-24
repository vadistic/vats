import { forwardTo } from 'prisma-binding'

import { IMutation, IQuery } from '../utils'

export const Query: Required<IQuery> = {
  user: forwardTo('db'),
  users: forwardTo('db'),
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

const tyest = resolvers.Query
