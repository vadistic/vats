import { Exact, Omit } from '../../utils'
import { HostActions } from './actions'
import { IAction, IAugumentedDispatch } from './augument'
import { Relations } from './diff'
import { IHostGraphqlMultiConfig, IHostGraphqlSingleConfig, TQueryVariables } from './graphql-types'

export enum HostType {
  Single = 'SINGLE',
  Multi = 'MULTI',
}

export type HostFilterFn<HostTyping extends IHostTyping> = (
  value: HostTyping['value'],
  state: IHostState<HostTyping>,
) => HostTyping['value']

export type ThunkAction<HostTyping extends IHostTyping> = (
  dispatch: IAugumentedDispatch<HostActions | HostTyping['actions'], IHostState<HostTyping>>,
  state: IHostState<HostTyping>,
) => any

export interface IHostTyping<
  Value = {},
  LocalState = {},
  Actions extends IAction = any,
  InitArg = any,
  QueryVariables extends TQueryVariables = TQueryVariables
> {
  value: Value
  localState: LocalState
  actions: Actions
  initArg: InitArg
  queryVariables: QueryVariables
}

export type HostTypingCreator<T extends Exact<T, Partial<IHostTyping>>> = T &
  Omit<IHostTyping, keyof T>

export interface IHostConfig<HostTyping extends IHostTyping = IHostTyping> {
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
  graphql: HostTyping['value'] extends any[] ? IHostGraphqlMultiConfig : IHostGraphqlSingleConfig
  relations?: Relations<HostTyping['value']>
}

export interface IHostState<HostTyping extends IHostTyping = IHostTyping> {
  variables: HostTyping['queryVariables']
  local: HostTyping['localState']
}
