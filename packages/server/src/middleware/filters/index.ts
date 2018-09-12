import { IMiddlewareTypeMap } from '../../utils'
import {
  composeFilters,
  dataWorkspaceConnectF,
  whereFixToWorkspace,
  whereUserF,
  whereWorkspaceF,
} from './filters'

/*
  Filters secure:
  singleQueries => Fix whole inputs on some fields
  multiQueries => By narrowing where with AND
  createOne => Data filters for fixed value fields
  updateOne => Fix where for workspace?
  deleteOne => Nope
*/

export const filters: IMiddlewareTypeMap = {
  Query: {},
  Mutation: {},
}
