import { hostComponentFactory } from './component'
import { hostContextFactory } from './context'
import { hostReducerFactory } from './reducer'
import { IHostTyping } from './types'

export const hostFactory = <HostTyping extends IHostTyping>(config: HostTyping['config']) => {
  const { Context, useContext } = hostContextFactory<HostTyping>()

  const { hostReducer, useReducer } = hostReducerFactory<HostTyping>(config)

  const { Host } = hostComponentFactory<HostTyping>(config, { Context, useReducer })

  return { Context, useContext, hostReducer, useReducer, Host }
}
