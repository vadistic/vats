import { Enum } from '@martin_hotell/rex-tils'
import { DocumentNode } from 'graphql'
import { Batch } from './batch'
import { TQueryVariables } from './graphql-types'
import { DispatchActions, HostActions, HostActionsU } from './reducer'

export type StringIndex<T = {}> = {
  [index: string]: unknown
} & { [K in keyof T]: T[K] }

export type LooseStringIndex<T = {}> = {
  [index: string]: any
} & { [K in keyof T]: T[K] }

export type StrictStringIndex<T = {}> = {
  [index: string]: never
} & { [K in keyof T]: T[K] }

export interface HostTypingI<
  State = {},
  Data = {},
  Variables extends TQueryVariables = TQueryVariables
> {
  data: StringIndex<Data>
  state: StringIndex<State>
  variables: Variables
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

// TODO: maybe differentiate between query update and mutation? MUTATE status?
export const HostStatus = Enum('START', 'LOADING', 'REFETCH', 'MUTATE', 'READY', 'ERROR')
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
