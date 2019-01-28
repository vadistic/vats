import { MutationResolvers, QueryResolvers } from '../generated/resolvers'
import { StrictlyIndexed } from '../utils'

import { IContext } from './client'

export type IQuery = QueryResolvers<IContext>
export type IMutation = MutationResolvers<IContext>

const Query: IQuery = {
  localField: (parent, args, { cache }) => {
    // noop

    return 'resolved'
  },
}

const Mutation: IMutation = {}

export const resolvers = {
  Query,
  Mutation,
}
