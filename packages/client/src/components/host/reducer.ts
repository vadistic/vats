import React from 'react'
import { client } from '../../apollo'
import { IStringIndexSignature } from '../../utils'
import { diffAutoUpdataData } from './diff'
import { IHostConfig } from './host'

export interface IIntristicActions {
  type: string
}

export interface IHostState<LocalState = {}, HostQueryVariables = {}> {
  variables: HostQueryVariables
  local: LocalState
}

export interface IHostStateForceUpdateProp {
  forceUpdate: React.Dispatch<React.SetStateAction<void>>
}

export enum HostActionType {
  Reset = 'RESET',
  AutoUpdate = 'AUTO_UPDATE',
}

export type IHostActions<Value = object, InitArg = any> =
  | {
      type: HostActionType.Reset
      initArg: InitArg // State
    }
  | {
      type: HostActionType.AutoUpdate
      payload: Value // State
    }

export const hostReducerFactory = <
  Value,
  State extends IHostState,
  CustomActions extends IIntristicActions,
  InitArg
>({
  reducer,
  query,
  propName,
  name,
  updateMutation,
  init,
}: IHostConfig<Value, State, CustomActions, InitArg>) => {
  const hostReducer: React.Reducer<State & IHostStateForceUpdateProp, IHostActions> = (
    state,
    action,
  ) => {
    const hostInit = (_initArg: any) => ({ ...init(_initArg), forceUpdate: state.forceUpdate })

    switch (action.type) {
      case HostActionType.Reset:
        // do stuff
        return hostInit(action.initArg)
      case HostActionType.AutoUpdate:
        if (!updateMutation) {
          console.error(`Host ${name}: AutoUpdate action missing update mutation`)
          return state
        }

        // maybe fetch fresh data from server to awoid some edge case out-of-sync
        const queryCache = client.readQuery<IStringIndexSignature>({
          query,
          variables: state.variables,
        })

        if (queryCache === null) {
          console.error(`Host ${name}: AutoUpdate action cannot read query data`)
          return state
        }

        const cachedData = queryCache[propName]

        const { updateData, queryData } = diffAutoUpdataData(cachedData, action.payload)

        if (updateData) {
          client.mutate({
            mutation: updateMutation,
            variables: {
              ...state.variables,
              data: updateData,
            },
          })

          client.writeQuery({
            query,
            variables: state.variables,
            data: { [propName]: { ...cachedData, queryData } },
          })

          // state.forceUpdate()
        }

        return state
      default:
        return reducer(state, action)
    }
  }

  // hack for correct discriminitation in switch
  type AllActions = CustomActions | IHostActions
  // and hiding force update from myself for now
  return (hostReducer as unknown) as React.Reducer<State, AllActions>
}
