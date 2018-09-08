import { allow, and, IRule, IRules, shield } from 'graphql-shield'

import { IRuleMutation, IRuleQuery } from '../../utils'
import {
  fieldRules,
  isAuthenticated,
  toManyDataWorkspaceConnection,
  toOneDataWorkspaceConnection,
  whereSameWorkspace,
} from './rules'

/*
  Permissions secure:
  singleQueries => auth & testing `where { id}`, so testing if exist in X
  multiQueries => only auth
  createOne => Nope
  updateOne => Nope
  deleteOne => Nope
*/

const QueryRules: IRuleQuery = {
  application: and(isAuthenticated, whereSameWorkspace('Application')),
  applications: isAuthenticated,
  candidate: and(isAuthenticated, whereSameWorkspace('Candidate')),
  candidates: isAuthenticated,
  invite: and(isAuthenticated, whereSameWorkspace('Invite')),
  invites: isAuthenticated,
  job: and(isAuthenticated, whereSameWorkspace('Job')),
  jobs: isAuthenticated,
  user: and(isAuthenticated, whereSameWorkspace('User')),
  users: isAuthenticated,
  // args fixed in reolver
  workspace: isAuthenticated,
  me: isAuthenticated,
}
const MutationRules: IRuleMutation = {
  createApplication: and(
    isAuthenticated,
    fieldRules({
      owners: toManyDataWorkspaceConnection('User'),
      subscribers: toManyDataWorkspaceConnection('User'),
      job: toOneDataWorkspaceConnection('Job'),
      candidate: toOneDataWorkspaceConnection('Candidate'),
    })
  ),
  // action
  // application
  // auth
  signup: allow,
  login: allow,
  // candidate
  // comment
  // invite
  createInvite: and(isAuthenticated, whereSameWorkspace('Invite')),
  updateInvite: and(isAuthenticated, whereSameWorkspace('Invite')),
  deleteInvite: and(isAuthenticated, whereSameWorkspace('Invite')),
  // job
  // stage
  // task

  // Task
  createTask: and(
    isAuthenticated,
    fieldRules({
      owners: toManyDataWorkspaceConnection('User'),
      subscribers: toManyDataWorkspaceConnection('User'),
      job: toOneDataWorkspaceConnection('Job'),
      candidate: toOneDataWorkspaceConnection('Candidate'),
    })
  ),
  updateTask: and(
    isAuthenticated,
    fieldRules({
      owners: toManyDataWorkspaceConnection('User'),
      subscribers: toManyDataWorkspaceConnection('User'),
      job: toOneDataWorkspaceConnection('Job'),
      candidate: toOneDataWorkspaceConnection('Candidate'),
    })
  ),
  deleteTask: and(isAuthenticated, whereSameWorkspace('Task')),

  createWorkspace: allow,
}

export const permissions = shield({ QueryRules, MutationRules })
