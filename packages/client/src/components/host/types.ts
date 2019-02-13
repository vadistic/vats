import { DocumentNode } from 'graphql'

export interface IAction {
  type: string
}

export enum HostType {
  Single = 'SINGLE',
  Multi = 'MULTI',
}

// TODO: export type mixings like FilterFn

export interface IHostTyping<
  LocalState = any,
  CustomActions extends IAction = IAction,
  InitArg = any,
  QueryVariables = any,
  DataVariables = any
> {
  types: {
    value: DataVariables
    customActions: CustomActions
    initArg: InitArg
  }
  config: {
    displayName: string
    rootField: string
    type: HostType
    reducer: React.Reducer<any, any>
    query: DocumentNode
    updateMutation?: DocumentNode
    resetOnInitArgChange?: boolean
    filter?: (
      arr: DataVariables,
      state: IHostTyping<
        LocalState,
        CustomActions,
        InitArg,
        QueryVariables,
        DataVariables
      >['state'],
    ) => DataVariables
    init: (initArg: InitArg) => LocalState
    initVariables: (initArg: InitArg) => QueryVariables
  }
  state: {
    variables: QueryVariables
    local: LocalState
    config: IHostTyping<LocalState, CustomActions, InitArg, QueryVariables, DataVariables>['config']
    forceUpdate: React.Dispatch<React.SetStateAction<void>>
  }
}

// export nicer aliases?
