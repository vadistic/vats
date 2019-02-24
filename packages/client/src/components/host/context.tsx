import React from 'react'
import { IAugumentedDispatch } from './augument'
import { useHostReducer } from './reducer'
import { HostType, IHostConfig, IHostState, IHostTyping } from './types'

export interface IHostContextValue<HostTyping extends IHostTyping> {
  value: HostTyping['value']
  // TODO: dispatch here should validate specific type
  dispatch: IAugumentedDispatch<any, IHostState<HostTyping>>
  state: IHostState<HostTyping>
  config: IHostConfig<HostTyping>
}

export type HostContext<HostTyping extends IHostTyping> = React.Context<
  IHostContextValue<HostTyping>
>

export interface IHostProviderProps<HostTyping extends IHostTyping = IHostTyping> {
  initArg?: HostTyping['initArg']
}

export const hostContextFactory = <HostTyping extends IHostTyping = IHostTyping>(
  config: IHostConfig<HostTyping>,
) => {
  const Context = React.createContext<IHostContextValue<HostTyping>>({} as any)

  const useContext = () => React.useContext(Context)

  const HostProvider: React.FC<IHostProviderProps<HostTyping>> = ({ initArg, children }) => {
    const [state, dispatch] = useHostReducer<HostTyping>(config)(initArg)

    // value will be set by HostQuery, and I want to avoid bothersome null checks
    const initValue = config.type === HostType.Multi ? [] : {}

    return (
      <Context.Provider value={{ value: initValue as any, dispatch, state, config }}>
        {children}
      </Context.Provider>
    )
  }

  return { Context, useContext, HostProvider }
}
