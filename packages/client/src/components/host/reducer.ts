import { applyDiff, diff } from 'deep-diff'
import { DocumentNode } from 'graphql'
import React from 'react'
import { client } from '../../apollo'
import {
  capitalise,
  IStrictIndexSignature,
  IStringIndexSignature,
  mutableSetValueIn,
  setValueIn,
} from '../../utils'
import { diffAutoUpdataData } from './diff'
import { IHostConfig } from './host'

export interface IIntristicActions {
  type: string
}

export interface IHostState<LocalState = {}, HostQueryVariables = {}> {
  variables: HostQueryVariables
  local: LocalState
}

export enum HostActionType {
  Reset = 'RESET',
  AutoUpdate = 'AUTO_UPDATE',
}

export type IHostActions<Value = object, State = object, CustomActions = any, InitArg = any> =
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
  const hostReducer: React.Reducer<State, IHostActions> = (state, action) => {
    switch (action.type) {
      case HostActionType.Reset:
        // do stuff
        return init(action.initArg)
      case HostActionType.AutoUpdate:
        if (!updateMutation) {
          return state
        }

        // maybe fetch fresh data from server to awoid some edge case out-of-sync
        // or async and validate by path with diff data
        const prev = client.readQuery<IStringIndexSignature>({ query, variables: state.variables })

        if (prev === null) {
          console.error(`Host ${name}: cannot read query data in AutoUpdate reducer`)
          return state
        }

        const clientData = prev[propName]

        const updateField = 'update' + capitalise(propName)

        const { updateData, queryData } = diffAutoUpdataData(clientData, action.payload)

        const optimisticResponse = {
          [updateField]: { ...clientData, ...queryData },
        }

        console.log('optimistic', optimisticResponse)

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
            data: {
              [propName]: action.payload,
            },
            variables: state.variables,
          })
        }

        return state
      default:
        return reducer(state, action)
    }
  }

  // hack for correct discriminitation in switch
  type AllActions = CustomActions | IHostActions
  return hostReducer as React.Reducer<State, AllActions>
}
