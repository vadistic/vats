import { allow, and, shield } from 'graphql-shield'

import { IRuleMutation, IRuleQuery } from '../../utils'
import {
  connectToManyByWorkspace,
  connectToOneByWorkspace,
  fieldRules,
  hasSpecialPermission,
  isAuthenticated,
  whereSameUser,
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

const Query: IRuleQuery = {
  // CUSTOM
  me: isAuthenticated,
  workspace: isAuthenticated,

  // SINGLE
  application: and(isAuthenticated, whereSameWorkspace('Application')),
  candidate: and(isAuthenticated, whereSameWorkspace('Candidate')),
  invite: and(isAuthenticated, whereSameWorkspace('Invite')),
  job: and(isAuthenticated, whereSameWorkspace('Job')),
  user: and(isAuthenticated, whereSameWorkspace('User')),

  // MULTI
  applications: isAuthenticated,
  candidates: isAuthenticated,
  invites: isAuthenticated,
  jobs: isAuthenticated,
  notifications: isAuthenticated,
  tasks: isAuthenticated,
}

const Mutation: IRuleMutation = {
  // CUSTOM/ AUTH
  createWorkspace: allow,
  signup: allow,
  login: allow,
  createInvite: and(isAuthenticated, whereSameWorkspace('Invite')),
  updateInvite: and(isAuthenticated, whereSameWorkspace('Invite')),

  // CREATE
  createApplication: and(isAuthenticated, fieldRules({})),
  createCandidate: and(isAuthenticated, fieldRules({})),
  createTask: and(
    isAuthenticated,
    fieldRules({
      owners: connectToManyByWorkspace('User'),
      subscribers: connectToManyByWorkspace('User'),
      job: connectToOneByWorkspace('Job'),
      candidate: connectToOneByWorkspace('Candidate'),
    })
  ),

  // UPDATE
  updateApplication: and(isAuthenticated, whereSameWorkspace('Application')),
  updateCandidate: and(isAuthenticated, whereSameWorkspace('Candidate')),
  updateTask: and(
    isAuthenticated,
    whereSameWorkspace('Task'),
    fieldRules({
      owners: connectToManyByWorkspace('User'),
      subscribers: connectToManyByWorkspace('User'),
      job: connectToOneByWorkspace('Job'),
      candidate: connectToOneByWorkspace('Candidate'),
    })
  ),
  updateUser: and(isAuthenticated, whereSameWorkspace('User'), hasSpecialPermission),
  updateWorkspace: and(isAuthenticated, hasSpecialPermission),

  updateNotification: and(isAuthenticated, whereSameUser('Notification')),

  // DELETE
  deleteTask: and(isAuthenticated, whereSameWorkspace('Task')),
  deleteWorkspace: and(isAuthenticated, hasSpecialPermission),

  deleteInvite: and(isAuthenticated, whereSameWorkspace('Invite')),
}

export const permissions = shield({ Query, Mutation })
