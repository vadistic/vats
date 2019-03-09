import { ActionsUnion, AnyFunction, createAction, Enum } from '@martin_hotell/rex-tils'
import produce from 'immer'
import React from 'react'
import { combineReducers } from './combine'
import { HostState, HostStatus, HostTypingI } from './types'

export const HostActionsType = Enum(
  'SET',
  'SET_STATUS',
  'SET_DATA',
  'SET_STATE',
  'SET_VARIABLES',
  'UPDATE_STATE',
  'UPDATE_VARIABLES',
)
export type HostActionsType = Enum<typeof HostActionsType>

export const HostActions = {
  set: <HostTyping extends HostTypingI>(hostState: HostState<HostTyping>) =>
    createAction(HostActionsType.SET, hostState),
  setStatus: (status: HostStatus) => createAction(HostActionsType.SET_STATUS, status),
  setData: <HostTyping extends HostTypingI>(data: HostTyping['data']) =>
    createAction(HostActionsType.SET_DATA, data),
  setState: <HostTyping extends HostTypingI>(state: HostTyping['state']) =>
    createAction(HostActionsType.SET_STATE, state),
  setVariables: <HostTyping extends HostTypingI>(variables: HostTyping['variables']) =>
    createAction(HostActionsType.SET_VARIABLES, variables),
  updateState: <HostTyping extends HostTypingI>(recipe: (state: HostTyping['state']) => void) =>
    createAction(HostActionsType.UPDATE_STATE, recipe),
  updateVariables: <HostTyping extends HostTypingI>(
    recipe: (variables: HostTyping['variables']) => void,
  ) => createAction(HostActionsType.UPDATE_VARIABLES, recipe),
}

export type HostActionsU = ActionsUnion<typeof HostActions>

export interface DispatchActions<HostTyping extends HostTypingI> {
  set: (hostState: HostState<HostTyping>) => void
  setStatus: (status: HostStatus) => void
  setState: (state: HostTyping['state']) => void
  setData: (data: HostTyping['data']) => void
  setVariables: (variables: HostTyping['variables']) => void
  updateState: (recipe: (state: HostTyping['state']) => void) => void
  updateVariables: (recipe: (variables: HostTyping['variables']) => void) => void
}

export const getDispatchActions = (dispatch: React.Dispatch<any>) => {
  const dispatchActions: DispatchActions<HostTypingI<any>> = {} as any

  for (const action of Object.keys(HostActions)) {
    const _action = action as keyof typeof HostActions
    const actionFn = HostActions[_action] as AnyFunction

    dispatchActions[_action] = (...args: any[]) => dispatch(actionFn(...args))
  }

  return dispatchActions
}

const immerReducer = produce<HostState<any>, [HostActionsU]>((draft, action) => {
  switch (action.type) {
    case HostActionsType.UPDATE_STATE:
      action.payload(draft.state)
      return
    case HostActionsType.UPDATE_VARIABLES:
      action.payload(draft.variables)
      return
    default:
      return
  }
})

const fluxReducer: React.Reducer<HostState<any>, HostActionsU> = (state, action) => {
  switch (action.type) {
    case HostActionsType.SET:
      return action.payload
    case HostActionsType.SET_STATUS:
      return { ...state, status: action.payload }
    case HostActionsType.SET_DATA:
      return { ...state, data: action.payload }
    case HostActionsType.SET_STATE:
      return { ...state, state: action.payload }
    case HostActionsType.SET_VARIABLES:
      return { ...state, variables: action.payload }
    default:
      return state
  }
}

export const reducer = combineReducers({
  immerReducer,
  fluxReducer,
})
