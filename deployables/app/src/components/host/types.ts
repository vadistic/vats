import { Exact, Omit } from '@vats/utils'
import ApolloClient from 'apollo-client'
import { HostActions } from './actions'
import { Action, AugumentedDispatch } from './augument'
import { RelationsType } from './diff'
import { HostGraphqlMultiConfig, HostGraphqlSingleConfig, TQueryVariables } from './graphql-types'

export enum HostType {
  Single = 'SINGLE',
  Multi = 'MULTI',
}

export type HostFilterFn<HostTyping extends HostTypingI> = (
  value: HostTyping['value'],
  state: HostStateI<HostTyping>,
) => HostTyping['value']

export type ThunkAction<HostTyping extends HostTypingI> = (
  dispatch: AugumentedDispatch<HostActions | HostTyping['actions'], HostStateI<HostTyping>>,
  state: HostStateI<HostTyping>,
) => any

export interface HostTypingI<
  Value = {},
  LocalState = {},
  Actions extends Action = any,
  InitArg = any,
  QueryVariables extends TQueryVariables = TQueryVariables
> {
  value: Value
  localState: LocalState
  actions: Actions
  initArg: InitArg
  queryVariables: QueryVariables
}

export type HostTypingCreator<T extends Exact<T, Partial<HostTypingI>>> = T &
  Omit<HostTypingI, keyof T>

export interface HostConfigI<HostTyping extends HostTypingI = HostTypingI> {
  displayName: string
  type: HostType
  reducer?: React.Reducer<any, any>
  filter?: HostFilterFn<HostTyping>
  initState?:
    | ((initArg: HostTyping['initArg']) => HostTyping['localState'])
    | (() => HostTyping['localState'])
  initVariables?:
    | (() => HostTyping['queryVariables'])
    | ((initArg: HostTyping['initArg']) => HostTyping['queryVariables'])
  resetOnInitArgPropChange?: boolean
  graphql: HostTyping['value'] extends any[] ? HostGraphqlMultiConfig : HostGraphqlSingleConfig
  relations?: RelationsType<HostTyping['value']>
}

export interface HostStateI<HostTyping extends HostTypingI = HostTypingI> {
  variables: HostTyping['queryVariables']
  local: HostTyping['localState']
}
