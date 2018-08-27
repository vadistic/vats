import { forwardTo } from 'prisma-binding'

export const QueryForwards = {
  // Action
  // TODO

  // Application
  application: forwardTo('db'),
  applications: forwardTo('db'),

  // Auth
  // Separeate file!

  // Candidate
  candidate: forwardTo('db'),
  candidates: forwardTo('db'),

  // Comments
  // Only as subquery!

  // Invite
  // Separate file!

  // Offer
  offer: forwardTo('db'),
  offers: forwardTo('db'),

  // Stage
  // Only as subquery!

  // Task
  task: forwardTo('db'),
  tasks: forwardTo('db'),

  // User
  user: forwardTo('db'),
  users: forwardTo('db'),

  // Workspace
  // Separate file!
}

export const MutationForwards = {
  // Action
  // TODO

  // Application
  createApplication: forwardTo('db'),
  updateApplication: forwardTo('db'),
  deleteApplication: forwardTo('db'),

  // Auth
  // Separeate file!

  // Candidate
  createCandidate: forwardTo('db'),
  updateCandidate: forwardTo('db'),
  deleteCandidate: forwardTo('db'),

  // Comment
  createComment: forwardTo('db'),
  updateComment: forwardTo('db'),
  deleteComment: forwardTo('db'),

  // Invite
  // Separate file!

  // Offer
  createOffer: forwardTo('db'),
  updateOffer: forwardTo('db'),
  deleteOffer: forwardTo('db'),

  // Stage
  createStage: forwardTo('db'),
  updateStage: forwardTo('db'),
  deleteStage: forwardTo('db'),

  // Task
  createTask: forwardTo('db'),
  updateTask: forwardTo('db'),
  deleteTask: forwardTo('db'),

  // User
  updateUser: forwardTo('db'),
  deleteUser: forwardTo('db'),

  // Workspace
  // Separate file!
}
