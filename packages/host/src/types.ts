import { Enum } from '@martin_hotell/rex-tils'
import { DeepStringIndex } from '@vats/utils'
import { DocumentNode } from 'graphql'
import { Batch } from './batch'
import { TQueryVariables } from './graphql-types'
import { DispatchActions, HostActions, HostActionsU } from './reducer'

export interface HostTypingI<
  State = {},
  Data = {},
  Variables extends TQueryVariables = TQueryVariables
> {
  // string indexed for convinience
  data: DeepStringIndex<Data>
  state: DeepStringIndex<State>
  variables: DeepStringIndex<Variables>
}

export interface HostGraphql {
  query: DocumentNode
  createMutation: DocumentNode
  updateMutation: DocumentNode
  deleteMutation: DocumentNode
  updateManyMutation: DocumentNode
  deleteManyMutation: DocumentNode
}

export interface HostGraphqlRoots {
  query: string
  createMutation: string
  updateMutation: string
  deleteMutation: string
  updateManyMutation: string
  deleteManyMutation: string
}

export interface HostConfig<HostTyping extends HostTypingI> {
  initState: HostTyping['state']
  graphql?: Partial<HostGraphql>
  graphqlRoots?: Partial<HostGraphqlRoots>
  relations?: any
  debug?: boolean
}

export const HostStatus = Enum(
  /** on mount */
  'START',
  /** on first fetch */
  'LOADING',
  /** on refetch/variable change */
  'REFETCH',
  /** on mutation */
  'MUTATE',
  /** on success/completed */
  'READY',
  /** on error */
  'ERROR',
)

export type HostStatus = Enum<typeof HostStatus>

export interface Host<HostTyping extends HostTypingI> {
  config: HostConfig<HostTyping>
  context: HostContext<HostTyping>
  initialState: HostState<HostTyping>
}

export interface HostState<HostTyping extends HostTypingI> {
  state: HostTyping['state']
  data: HostTyping['data']
  variables: HostTyping['variables']
  config: HostConfig<HostTyping>
  status: HostStatus
}

export type HostContextValue<HostTyping extends HostTypingI> = HostState<HostTyping> & {
  dispatchActions: DispatchActions<HostTyping>
  dispatch: React.Dispatch<HostActionsU>
  actions: typeof HostActions
  batch: Batch<HostTyping>
}

export type HostContext<HostTyping extends HostTypingI> = React.Context<
  HostContextValue<HostTyping>
>
