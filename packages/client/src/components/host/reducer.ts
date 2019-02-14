import React, { useMemo, useReducer as useReactReducer, useState } from 'react'
import { tuplify } from '../../utils'
import { actionsReducers, hostActionsFactory, HostActionsUnion, HostActionTypes } from './actions'
import { IHostTyping } from './types'

// deps losely typed - only for non-public apis
interface IHostReducerFactoryDependencies {
  Actions: ReturnType<typeof hostActionsFactory>['Actions']
}

export const hostReducerFactory = <HostTyping extends IHostTyping>(
  config: IHostTyping['config'],
  { Actions }: IHostReducerFactoryDependencies,
) => {
  const hostReducer: React.Reducer<
    IHostTyping['state'],
    HostActionsUnion<HostTyping> | IHostTyping['types']['customActions']
  > = (state, action) => {
    // TODO: combine reducers fn
    switch (action.type) {
      case HostActionTypes.RESET:
        return actionsReducers.reset(state, action)
      case HostActionTypes.UPDATE:
        return actionsReducers.update(state, action)
      case HostActionTypes.CUSTOM_UPDATE:
        return actionsReducers.customUpdate(state, action)
      case HostActionTypes.SET_STATE:
        return actionsReducers.setState(state, action)
      case HostActionTypes.SET_CONFIG:
        return actionsReducers.setConfig(state, action)
      default:
        // delegate to provided reducer
        return config.reducer(state, action)
    }
  }

  const useReducer = (initArg?: HostTyping['types']['initArg']) => {
    // implementation of hooked forceUpdate
    const [, forceUpdate] = useState<void>(undefined)

    // same as Reset reducer
    const hostInit = (_initArg: HostTyping['types']['initArg']): HostTyping['state'] => ({
      local: config.initState(_initArg),
      variables: config.initVariables(_initArg),
      config,
      forceUpdate,
    })

    const initalState = useMemo(() => hostInit(initArg), [initArg])

    // TODO: fix reinspect...
    // const [state, dispatch] = useInspectedReducer(hostReducer, initalState, undefined as any, config.displayName)
    const [state, dispatch] = useReactReducer(hostReducer, initalState, undefined as any)

    if (initArg && config.resetOnInitArgPropChange) {
      useMemo(() => {
        dispatch(Actions.reset(initArg))
      }, [initArg])
    }

    return tuplify([state, dispatch])
  }

  return { hostReducer, useReducer }
}
