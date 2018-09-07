import { AuthMutations } from './auth'
import { MutationForwards, QueryForwards } from './forwards'
import { InviteMutations, InviteQueries } from './invite'
import { WorkspaceMutations, WorkspaceQueries } from './workspace'

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
