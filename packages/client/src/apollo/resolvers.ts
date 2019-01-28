import { MutationResolvers, QueryResolvers } from '../generated/resolvers'
import { Indexed } from '../utils'

import { IContext } from './client'

export type IQuery = Indexed<QueryResolvers<IContext>>
export type IMutation = Indexed<MutationResolvers<IContext>>

const Query: IQuery = {
  localField: (parent, args, { cache }) => {
    // noop

    return 'resolved'
  }
}

const Mutation: IMutation = {}

export const resolvers = {
  Query,
  Mutation
}
