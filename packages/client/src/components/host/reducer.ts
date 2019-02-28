import { tuplify } from '@vats/utils'
import { useMemo, useReducer as useReactReducer } from 'react'
import { HostActions, hostReducer } from './actions'
import { augumentDispatch } from './augument'
import { combineReducers } from './combine'
import { HostConfigI, HostStateI, HostTypingI } from './types'

export const useHostReducer = <HostTyping extends HostTypingI>(config: HostConfigI<HostTyping>) => (
  initArg: HostTyping['initArg'],
) => {
  // same as Reset reducer
  const hostInit = (_initArg: HostTyping['initArg']): HostStateI<HostTyping> => ({
    local: config.initState ? config.initState(_initArg) : {},
    variables: config.initVariables ? config.initVariables(_initArg) : {},
  })

  const combinedReducer = combineReducers({
    hostReducer: hostReducer<HostTyping>(config),
    ...(config.reducer ? { customReducer: config.reducer } : {}),
  })

  // const [state, dispatch] = useInspectedReducer(hostReducer, initalState, undefined as any, config.displayName)
  const [state, dispatch] = useReactReducer(combinedReducer, initArg, hostInit)

  if (initArg && config.resetOnInitArgPropChange) {
    useMemo(() => {
      dispatch(HostActions.reset(initArg))
    }, [initArg])
  }

  return tuplify([state, augumentDispatch(dispatch, state)])
}
