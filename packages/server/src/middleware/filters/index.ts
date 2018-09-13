import { IMiddlewareTypeMap } from '../../utils'
import {
  composeFilters,
  dataWorkspaceConnectF,
  whereFixToWorkspace,
  whereUserF,
  whereWorkspaceF,
} from './filters'


export const filters: IMiddlewareTypeMap = {
  Query: {},
  Mutation: {},
}
