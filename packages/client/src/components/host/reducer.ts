import { applyDiff, diff } from 'deep-diff'
import { DocumentNode } from 'graphql'
import React from 'react'
import { client } from '../../apollo'
import { IStrictIndexSignature, mutableSetValueIn, setValueIn } from '../../utils'
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
  Create = 'CREATE',
  Update = 'UPDATE',
  Delete = 'DELETE',
}

// TODO: strict generic?
export type IHostActions =
  | {
      type: HostActionType.Reset
      payload: object // State
    }
  | {
      type: HostActionType.Create
    }
  | {
      type: HostActionType.Update
      payload: object // State
    }
  | {
      type: HostActionType.Delete
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
}: IHostConfig<Value, State, CustomActions, InitArg>) => {
  const hostReducer: React.Reducer<State, IHostActions> = (state, action) => {
    switch (action.type) {
      case HostActionType.Reset:
        // do stuff
        return action.payload
      case HostActionType.Create:
        // do stuff
        return state
      case HostActionType.Update:
        if (!updateMutation) {
          return state
        }

        const prev = client.readQuery<IStrictIndexSignature>({ query, variables: state.variables })

        if (prev === null) {
          console.error(`Host ${name}: cannot read query in update reducer`)
          return state
        }

        const clientValue = prev[propName]

        const updateDiffs = diff<Value, Partial<Value>>(clientValue, action.payload as Partial<
          Value
        >)

        if (updateDiffs) {
          const data = {}

          // TODO: refactor as fn of diff and source
          updateDiffs.forEach(change => {
            if (change.kind === 'N' && change.path) {
              mutableSetValueIn(data, change.rhs, change.path)
            }
            if (change.kind === 'E' && change.path) {
              mutableSetValueIn(data, change.rhs, change.path)
            }
            if (change.kind === 'D' && change.path) {
              mutableSetValueIn(data, null, change.path)
            }

            client.mutate({
              mutation: updateMutation,
              variables: {
                ...state.variables,
                data,
              },
            })
          })
        }

        return state
      case HostActionType.Delete:
        // do stuff
        return state
      default:
        // use provided reducer
        return reducer(state, action)
    }
  }

  // hack for correct discriminitation in switch
  type AllActions = CustomActions | IHostActions
  return hostReducer as React.Reducer<State, AllActions>
}
