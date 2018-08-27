import { QueryForwards, MutationForwards } from './forwards'

import { AuthMutations } from './auth'
import { InviteQueries, InviteMutations } from './invite'
import { WorkspaceQueries, WorkspaceMutations } from './workspace'

export const Query = {
  ...QueryForwards,
  ...InviteQueries,
  ...WorkspaceQueries,
}

export const Mutation = {
  ...MutationForwards,
  ...AuthMutations,
  ...InviteMutations,
  ...WorkspaceMutations,
}

export { AuthPayload } from './AuthPayload'
