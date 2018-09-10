import { forwardTo } from 'prisma-binding'

import { IMutation, IQuery } from '../utils'
import { createWorkspace, login, signup } from './auth'
import { createInvite, updateInvite } from './invite'

const me = async (parent, args, ctx, info) =>
  ctx.db.query.user({ where: { id: ctx.auth.userId } }, info)

export const Query: IQuery = {
  // AUTH SERVER
  persons: forwardTo('authDb'),
  // CUSTOM
  me,

  // SINGLE
  application: forwardTo('db'),
  candidate: forwardTo('db'),
  invite: forwardTo('db'),
  job: forwardTo('db'),
  notification: forwardTo('db'),
  task: forwardTo('db'),
  user: forwardTo('db'),
  workspace: forwardTo('db'),

  // MULTI
  applications: forwardTo('db'),
  candidates: forwardTo('db'),
  invites: forwardTo('db'),
  jobs: forwardTo('db'),
  notifications: forwardTo('db'),
  tasks: forwardTo('db'),
  users: forwardTo('db'),

  // CONNECTIONS
  applicationsConnection: forwardTo('db'),
  candidatesConnection: forwardTo('db'),
  commentsConnection: forwardTo('db'),
  eventsConnection: forwardTo('db'),
  fieldsConnection: forwardTo('db'),
  invitesConnection: forwardTo('db'),
  jobsConnection: forwardTo('db'),
  locationsConnection: forwardTo('db'),
  notificationsConnection: forwardTo('db'),
  stagesConnection: forwardTo('db'),
  tagsConnection: forwardTo('db'),
  tasksConnection: forwardTo('db'),
  usersConnection: forwardTo('db'),
  workspacesConnection: forwardTo('db'),
}

export const Mutation: IMutation = {
  // CUSTOM / AUTH
  createWorkspace,
  signup,
  login,
  createInvite,
  updateInvite,

  // CREATE
  createApplication: forwardTo('db'),
  createCandidate: forwardTo('db'),
  createComment: forwardTo('db'),
  createJob: forwardTo('db'),
  createStage: forwardTo('db'),
  createTask: forwardTo('db'),

  // UPDATE
  updateApplication: forwardTo('db'),
  updateCandidate: forwardTo('db'),
  updateComment: forwardTo('db'),
  updateJob: forwardTo('db'),
  updateStage: forwardTo('db'),
  updateTask: forwardTo('db'),
  updateUser: forwardTo('db'),
  updateWorkspace: forwardTo('db'),

  // DELETE
  deleteApplication: forwardTo('db'),
  deleteCandidate: forwardTo('db'),
  deleteComment: forwardTo('db'),
  deleteJob: forwardTo('db'),
  deleteStage: forwardTo('db'),
  deleteTask: forwardTo('db'),
  deleteUser: forwardTo('db'),
}

export { AuthPayload } from './auth'
