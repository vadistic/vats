import React from 'react'
import { AugumentedDispatch } from './augument'
import { useHostReducer } from './reducer'
import { HostConfigI, HostStateI, HostType, HostTypingI } from './types'

export interface HostContextValue<HostTyping extends HostTypingI> {
  value: HostTyping['value']
  // TODO: dispatch here should validate specific type
  dispatch: AugumentedDispatch<any, HostStateI<HostTyping>>
  state: HostStateI<HostTyping>
  config: HostConfigI<HostTyping>
}

export type HostContext<HostTyping extends HostTypingI> = React.Context<
  HostContextValue<HostTyping>
>

export interface HostProviderProps<HostTyping extends HostTypingI = HostTypingI> {
  initArg?: HostTyping['initArg']
}

export const hostContextFactory = <HostTyping extends HostTypingI = HostTypingI>(
  config: HostConfigI<HostTyping>,
) => {
  const Context = React.createContext<HostContextValue<HostTyping>>({} as any)

  const useContext = () => React.useContext(Context)

  const HostProvider: React.FC<HostProviderProps<HostTyping>> = ({ initArg, children }) => {
    const [state, dispatch] = useHostReducer<HostTyping>(config)(initArg)

    // value will be set by HostQuery, and I want to avoid bothersome null checks
    const initValue = config.type === HostType.Multi ? [] : {}

    return (
      <Context.Provider value={{ value: initValue, dispatch, state, config }}>
        {children}
      </Context.Provider>
    )
  }

  return { Context, useContext, HostProvider }
}
