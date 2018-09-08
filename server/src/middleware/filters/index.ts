import { IMiddleware } from 'graphql-middleware'

import { MiddlewareFieldMap } from '../../utils'
import { composeFilters, whereUserF, whereWorkspaceF } from './filters'

/*
  Filters secure:
  singleQueries => Nope
  multiQueries => by narrowing where with AND
  createOne => Nope
  updateOne => Nope
  deleteOne => Nope
*/

export const filters: IMiddleware & MiddlewareFieldMap = {
  Query: {
    applications: composeFilters([whereWorkspaceF]),
    candidates: composeFilters([whereWorkspaceF]),
    invites: composeFilters([whereWorkspaceF]),
    jobs: composeFilters([whereWorkspaceF]),
    notifications: composeFilters([whereUserF]),
    tasks: composeFilters([whereWorkspaceF]),
  },
  Mutation: {},
}
