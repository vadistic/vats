import { forwardTo } from 'prisma-binding'

// Stage
export const createStage = forwardTo('db')
export const updateStage = forwardTo('db')
export const deleteStage = forwardTo('db')

// Comment
export const createComment = forwardTo('db')
export const updateComment = forwardTo('db')
export const deleteComment = forwardTo('db')

// Task
export const task = forwardTo('db')
export const tasks = forwardTo('db')
export const createTask = forwardTo('db')
export const updateTask = forwardTo('db')
export const deleteTask = forwardTo('db')

// Invite
export const invite = forwardTo('db')
export const invites = forwardTo('db')

// User
export const user = forwardTo('db')
export const users = forwardTo('db')
export const updateUser = forwardTo('db')
export const deleteUser = forwardTo('db')

// Offer
export const offer = forwardTo('db')
export const offers = forwardTo('db')
export const createOffer = forwardTo('db')
export const updateOffer = forwardTo('db')
export const deleteOffer = forwardTo('db')

// Candidate
export const candidate = forwardTo('db')
export const candidates = forwardTo('db')
export const createCandidate = forwardTo('db')
export const updateCandidate = forwardTo('db')
export const deleteCandidate = forwardTo('db')

// Application
export const application = forwardTo('db')
export const applications = forwardTo('db')
export const createApplication = forwardTo('db')
export const updateApplication = forwardTo('db')
export const deleteApplication = forwardTo('db')

// Workspace
export const workspace = forwardTo('db')
export const workspaces = forwardTo('db')
export const updateWorkspace = forwardTo('db')
export const deleteWorkspace = forwardTo('db')
