import { DocumentNode } from 'graphql'
import { HostActionsUnion } from './actions'

export interface IAction {
  type: string
}

export enum HostType {
  Single = 'SINGLE',
  Multi = 'MULTI',
}

export type FilterFn<HostTyping extends IHostTyping> = (
  value: HostTyping['types']['value'],
  state: HostTyping['state'],
) => HostTyping['types']['value']

export interface IHostTyping<
  Value = any,
  LocalState = any,
  ActionsUnion extends IAction = any,
  InitArg = any,
  QueryVariables = any,
  DataVariable = any
> {
  types: {
    value: Value
    dataVariable: DataVariable
    initArg: InitArg
    customActions: ActionsUnion
  }
  config: {
    displayName: string
    rootField: string
    type: HostType
    reducer: React.Reducer<any, any>
    query: DocumentNode
    updateMutation?: DocumentNode
    filter?: FilterFn<
      IHostTyping<Value, LocalState, ActionsUnion, InitArg, QueryVariables, DataVariable>
    >
    initState: (initArg: InitArg) => LocalState | (() => LocalState)
    initVariables: (initArg: InitArg) => QueryVariables | (() => QueryVariables)
    resetOnInitArgPropChange?: boolean
  }
  state: {
    variables: QueryVariables
    local: LocalState
    config: IHostTyping<
      Value,
      LocalState,
      ActionsUnion,
      InitArg,
      QueryVariables,
      DataVariable
    >['config']
    forceUpdate: React.Dispatch<React.SetStateAction<void>>
  }
}

// export nicer aliases?
