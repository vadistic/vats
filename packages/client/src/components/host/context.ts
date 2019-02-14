import React from 'react'
import { HostActionsUnion } from './actions'
import { IHostTyping } from './types'

export interface IHostContextValue<HostTyping extends IHostTyping> {
  value: HostTyping['types']['value']
  dispatch: React.Dispatch<HostActionsUnion<IHostTyping> | HostTyping['types']['customActions']>
  state: HostTyping['state']
}

export type HostContext<HostTyping extends IHostTyping> = React.Context<
  IHostContextValue<HostTyping>
>

export const hostContextFactory = <HostTyping extends IHostTyping>() => {
  const Context = React.createContext<IHostContextValue<HostTyping>>({} as any)

  const useContext = () => React.useContext(Context)

  return { Context, useContext }
}
