import React from 'react'

export interface IIntristicActions {
  type: string
}

export interface IHostState<LocalState = {}, HostQueryVariables = {}> {
  variables: HostQueryVariables
  local: LocalState
}

export enum HostActionType {
  Create = 'CREATE',
  Update = 'UPDATE',
  Delete = 'DELETE',
}

export type IHostActions =
  | {
      type: HostActionType.Create
    }
  | {
      type: HostActionType.Update
    }
  | {
      type: HostActionType.Delete
    }

export interface IHostReducerConfig<State, InitArg> {
  intristicReducer: React.Reducer<any, any>
}

export const hostReducerFactory = <Value, State, CustomActions extends IIntristicActions, InitArg>({
  intristicReducer,
}: IHostReducerConfig<State, InitArg>) => {
  const reducer: React.Reducer<State, CustomActions | IHostActions> = (state, action) => {
    switch (action.type) {
      case HostActionType.Create:
        // do stuff
        return state
      case HostActionType.Update:
        // do stuff
        return state
      case HostActionType.Delete:
        // do stuff
        return state
      default:
        // use provided reducer
        return intristicReducer(state, action)
    }
  }

  return reducer
}
