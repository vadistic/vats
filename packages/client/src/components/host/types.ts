import { HostActionsUnion } from './actions'
import { Relations } from './diff'
import { IHostGraphqlMultiConfig, IHostGraphqlSingleConfig, TGraphqlTyping } from './graphql-types'
import { IThunkHelpers } from './helper'

export interface IAction {
  type: string
}

interface ISingleInitArg {
  id: string
}

export enum HostType {
  Single = 'SINGLE',
  Multi = 'MULTI',
}

export type HostFilterFn<HostTyping extends IHostTyping, GraphqlTyping extends TGraphqlTyping> = (
  value: HostTyping['value'],
  state: IHostState<HostTyping, GraphqlTyping>,
) => HostTyping['value']

export type HostAction<HostTyping extends IHostTyping, GraphqlTyping extends TGraphqlTyping> =
  | HostActionsUnion<HostTyping, GraphqlTyping>
  | HostTyping['customActions']

export type HostThunk<HostTyping extends IHostTyping, GraphqlTyping extends TGraphqlTyping> = (
  dispatch: React.Dispatch<HostAction<HostTyping, GraphqlTyping>>,
  state: IHostState<HostTyping, GraphqlTyping>,
  helpers: IThunkHelpers<GraphqlTyping>,
) => void | Promise<void>

export interface IHostTyping<
  Value = any,
  LocalState = any,
  CustomActions extends IAction = IAction,
  InitArg extends Value extends any[] ? any : ISingleInitArg = any
> {
  value: Value
  localState: LocalState
  customActions: CustomActions
  initArg: InitArg
}

export interface IHostConfig<HostTyping extends IHostTyping, GraphqlTyping extends TGraphqlTyping> {
  displayName: string
  type: HostType
  reducer: React.Reducer<any, any>
  filter?: HostFilterFn<HostTyping, GraphqlTyping>
  initState:
    | ((initArg: HostTyping['initArg']) => HostTyping['localState'])
    | (() => HostTyping['localState'])
  initVariables:
    | (() => GraphqlTyping['queryVariables'])
    | ((initArg: HostTyping['initArg']) => GraphqlTyping['queryVariables'])
  resetOnInitArgPropChange?: boolean
  graphql: HostTyping['value'] extends any[] ? IHostGraphqlMultiConfig : IHostGraphqlSingleConfig
  relations?: Relations<HostTyping['value']>
}

export interface IHostState<HostTyping extends IHostTyping, GraphqlTyping extends TGraphqlTyping> {
  variables: GraphqlTyping['queryVariables']
  local: HostTyping['localState']
  config: IHostConfig<HostTyping, GraphqlTyping>
  forceUpdate: React.Dispatch<React.SetStateAction<void>>
}
