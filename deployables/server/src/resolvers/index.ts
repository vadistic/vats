import { forwardTo } from 'prisma-binding'
import { mutationList, queryList } from '../schema'
import { IMutation, IQuery } from '../utils'

export const Query: IQuery = {}

export const Mutation: IMutation = {}

const forwardMissingResolvers = <T extends IQuery | IMutation>(
  resolversNames: Array<keyof IQuery | keyof IMutation>,
  rootField: T,
) =>
  resolversNames.reduce((acc, name) => {
    if (acc[name] === undefined) {
      acc[name] = forwardTo('db')
    }
    return acc
  }, rootField)

export const resolvers = {
  Query: forwardMissingResolvers(queryList, Query),
  Mutation: forwardMissingResolvers(mutationList, Mutation),
}
