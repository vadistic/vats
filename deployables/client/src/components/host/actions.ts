import { ActionsUnion, createAction, Enum } from '@martin_hotell/rex-tils'
import { HostConfigI, HostStateI, HostTypingI } from './types'

const RESET = 'RESET'
const SET_STATE = 'SET_STATE'
const SET_LOCAL_STATE = 'SET_LOCAL_STATE'

export const HostActions = {
  reset: <HostTyping extends HostTypingI>(initArg: HostTyping['initArg']) =>
    createAction(RESET, initArg),
  setState: <HostTyping extends HostTypingI>(state: HostStateI<HostTyping>) =>
    createAction(SET_STATE, state),
  setLocalState: <HostTyping extends HostTypingI>(state: HostTyping['localState']) =>
    createAction(SET_LOCAL_STATE, state),
}

export type HostActions = ActionsUnion<typeof HostActions>

export const HostActionsType = Enum(RESET, SET_STATE, SET_LOCAL_STATE)

export const hostReducer = <HostTyping extends HostTypingI>(config: HostConfigI<HostTyping>) => (
  state: HostStateI<HostTyping>,
  action: HostActions,
) => {
  switch (action.type) {
    case HostActionsType.RESET:
      return {
        ...state,
        local: config.initState
          ? config.initState('payload' in action ? action.payload : undefined)
          : {},
        variables: config.initVariables
          ? config.initVariables('payload' in action ? action.payload : undefined)
          : {},
      }
    case HostActionsType.SET_STATE:
      return { ...state, ...action.payload }
    case HostActionsType.SET_LOCAL_STATE:
      return { ...state, local: { ...state.local, ...action.payload } }
    default:
      return state
  }
}
