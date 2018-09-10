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
  Query: {
    workspace: whereFixToWorkspace,

    // MULTI
    applications: composeFilters([whereWorkspaceF]),
    candidates: composeFilters([whereWorkspaceF]),
    jobs: composeFilters([whereWorkspaceF]),
    tasks: composeFilters([whereWorkspaceF]),

    invites: composeFilters([whereWorkspaceF]),
    notifications: composeFilters([whereUserF]),
  },
  Mutation: {
    // CREATE
    createApplication: composeFilters([dataWorkspaceConnectF]),
    createCandidate: composeFilters([dataWorkspaceConnectF]),
    createJob: composeFilters([dataWorkspaceConnectF]),
    createTask: composeFilters([dataWorkspaceConnectF]),

    // UPDATE
    // updateApplication
    updateWorkspace: whereFixToWorkspace,

    // DELETE
    deleteWorkspace: whereFixToWorkspace,
  },
}
