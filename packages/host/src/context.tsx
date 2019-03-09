import React, { useContext, useMemo, useReducer } from 'react'
import { getBatchDispatch } from './batch'
import { getGraphqlRoots } from './graphql-roots'
import { TGraphqlTyping } from './graphql-types'
import { getDispatchActions, HostActions, reducer } from './reducer'
import { Host, HostConfig, HostContextValue, HostState, HostStatus, HostTypingI } from './types'

/*
 * Instantiate host (by creating it's context)
 * Config for  confinince and object params for possible extension
 */

export const createHost = <
  State extends {} = {},
  GraphqlTyping extends TGraphqlTyping = TGraphqlTyping,
  HostTyping extends HostTypingI = HostTypingI<
    State,
    GraphqlTyping['query'],
    GraphqlTyping['queryVariables']
  >
>(
  config: HostConfig<HostTyping>,
): Host<HostTyping> => {
  const Context = React.createContext<HostContextValue<HostTyping>>({} as any)

  const initialState: HostState<any> = {
    config: {
      ...config,
      graphqlRoots: config.graphqlRoots || getGraphqlRoots(config),
    },
    data: {},
    variables: {},
    state: config.initState,
    status: HostStatus.START,
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

export const useHostContext = <HostTyping extends HostTypingI>(host: Host<HostTyping>) => {
  const ctx = useContext(host.context)

  if (!ctx) {
    throw Error('Trying to use host context without provider')
  }

  return ctx
}

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
    batch,
  }

  return <Context.Provider value={value} children={children} />
}
