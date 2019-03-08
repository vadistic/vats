import React, { useContext, useMemo, useReducer } from 'react'
import { Batch, getBatchDispatch } from './batch'
import { DispatchActions, getDispatchActions, HostActions, HostActionsU, reducer } from './reducer'
import { HostConfig, HostState, HostStatus, HostTypingI } from './types'

/*
 * Instantiate host (by creating it's context)
 * Config for  confinince and object params for possible extension
 */

export interface Host<HostTyping extends HostTypingI> {
  config: HostConfig<HostTyping>
  context: HostContext<HostTyping>
  initialState: HostState<HostTyping>
}

export type HostContextValue<HostTyping extends HostTypingI> = HostState<HostTyping> & {
  dispatchActions: DispatchActions<HostTyping>
  dispatch: React.Dispatch<HostActionsU>
  actions: typeof HostActions
  batch: Batch<HostTyping>
}

export type HostContext<HostTyping extends HostTypingI> = React.Context<
  HostContextValue<HostTyping>
>

export const createHost = <
  Value,
  State,
  Variables,
  HostTyping extends HostTypingI = HostTypingI<Value, State, Variables>
>(
  config: HostConfig<HostTyping>,
): Host<HostTyping> => {
  const Context = React.createContext<HostContextValue<HostTyping>>({} as any)

  const initialState: HostState<any> = {
    config,
    value: null,
    variables: {},
    state: config.initState,
    status: HostStatus.INIT,
  }

  return {
    config,
    initialState,
    context: Context,
  }
}

/*
 * Just tiny alias
 */

export const useHostContext = <HostTyping extends HostTypingI>(host: Host<HostTyping>) =>
  useContext(host.context)

/*
 * Provider + state instance
 */
export interface HostProviderProps {
  host: Host<any>
}

export const HostProvider: React.FC<HostProviderProps> = ({ host, children }) => {
  const Context = host.context

  const [hostState, dispatch] = useReducer(reducer, host.initialState)

  const dispatchActions = useMemo(() => getDispatchActions(dispatch), [])
  const batch = getBatchDispatch(dispatch, hostState, reducer)

  const value = {
    ...hostState,
    dispatchActions,
    dispatch,
    actions: HostActions,
    batch: getBatchDispatch(dispatch, hostState, reducer),
  }

  return <Context.Provider value={value} children={children} />
}
