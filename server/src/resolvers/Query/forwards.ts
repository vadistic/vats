import { forwardTo } from 'prisma-binding'

// User
export const user = forwardTo('db')
export const users = forwardTo('db')

// Invite
export const invite = forwardTo('db')
export const invites = forwardTo('db')

// Offer
export const offer = forwardTo('db')
export const offers = forwardTo('db')

// Candidate
export const candidate = forwardTo('db')
export const candidates = forwardTo('db')

// Workspace
export const workspace = forwardTo('db')
export const workspaces = forwardTo('db')
