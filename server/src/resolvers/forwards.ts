import { forwardTo } from 'prisma-binding'
import { Mutation, Query } from '../utils'

export const QueryForwards: Query = {
  notification: forwardTo('db'),
  notifications: forwardTo('db'),

  application: forwardTo('db'),
  applications: forwardTo('db'),

  candidate: forwardTo('db'),
  candidates: forwardTo('db'),

  job: forwardTo('db'),
  jobs: forwardTo('db'),

  task: forwardTo('db'),
  tasks: forwardTo('db'),

  user: forwardTo('db'),
  users: forwardTo('db'),
}

export const MutationForwards: Mutation = {
  createApplication: forwardTo('db'),
  updateApplication: forwardTo('db'),
  deleteApplication: forwardTo('db'),

  createCandidate: forwardTo('db'),
  updateCandidate: forwardTo('db'),
  deleteCandidate: forwardTo('db'),

  createComment: forwardTo('db'),
  updateComment: forwardTo('db'),
  deleteComment: forwardTo('db'),

  createJob: forwardTo('db'),
  updateJob: forwardTo('db'),
  deleteJob: forwardTo('db'),

  createStage: forwardTo('db'),
  updateStage: forwardTo('db'),
  deleteStage: forwardTo('db'),

  createTask: forwardTo('db'),
  updateTask: forwardTo('db'),
  deleteTask: forwardTo('db'),

  updateUser: forwardTo('db'),
  deleteUser: forwardTo('db'),
}
