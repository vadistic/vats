import { forwardTo } from 'prisma-binding'

// Invite
export const createInvite = forwardTo('db')
export const updateInvite = forwardTo('db')
export const deleteInvite = forwardTo('db')

// Workspace
export const createWorkspace = forwardTo('db')
export const updateWorkspace = forwardTo('db')
export const deleteWorkspace = forwardTo('db')

// User
export const createUser = forwardTo('db')
export const updateUser = forwardTo('db')
export const deleteUser = forwardTo('db')

// Offer
export const createOffer = forwardTo('db')
export const updateOffer = forwardTo('db')
export const deleteOffer = forwardTo('db')

// Stage
export const createStage = forwardTo('db')
export const updateStage = forwardTo('db')
export const deleteStage = forwardTo('db')

// Application
export const createApplication = forwardTo('db')
export const updateApplication = forwardTo('db')
export const deleteApplication = forwardTo('db')

// Candidate
export const createCandidate = forwardTo('db')
export const updateCandidate = forwardTo('db')
export const deleteCandidate = forwardTo('db')

// Comment
export const createComment = forwardTo('db')
export const updateComment = forwardTo('db')
export const deleteComment = forwardTo('db')

// Task
export const createTask = forwardTo('db')
export const updateTask = forwardTo('db')
export const deleteTask = forwardTo('db')
