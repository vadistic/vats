import {forwardTo} from 'prisma-binding'

// Workspace
export const workspace = forwardTo('db')
export const workspaces = forwardTo('db')

// User
export const user = forwardTo('db')
export const users = forwardTo('db')

// Offer
export const offer = forwardTo('db')
export const offers = forwardTo('db')

// Stage
export const stage = forwardTo('db')
export const stages = forwardTo('db')

// Application
export const application = forwardTo('db')
export const applications = forwardTo('db')

// Candidate
export const candidate = forwardTo('db')
export const candidates = forwardTo('db')

// Comment
export const comment = forwardTo('db')
export const comments = forwardTo('db')

// Task
export const task = forwardTo('db')
export const tasks = forwardTo('db')



