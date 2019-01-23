import { forwardTo } from 'prisma-binding'

import { QueryResolvers } from '../generated/server'
import { IMutation, IQuery } from '../utils'

export const Query: IQuery = {
  users: forwardTo('db'),
}

export const Mutation: IMutation = {
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
