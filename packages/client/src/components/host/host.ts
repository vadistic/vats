import { hostActionsFactory } from './actions'
import { hostComponentFactory } from './component'
import { hostContextFactory } from './context'
import { TGraphqlTyping } from './graphql-types'
import { hostReducerFactory } from './reducer'
import { IHostConfig, IHostTyping } from './types'

export const hostFactory = <HostTyping extends IHostTyping, GraphqlTyping extends TGraphqlTyping>(
  config: IHostConfig<HostTyping, GraphqlTyping>,
) => {
  const { Context, useContext } = hostContextFactory<HostTyping, GraphqlTyping>()

  const { Actions } = hostActionsFactory<HostTyping, GraphqlTyping>()

  const { hostReducer, useReducer } = hostReducerFactory<HostTyping, GraphqlTyping>(config, {
    Actions: Actions as any,
  })

  const { Host } = hostComponentFactory<HostTyping, GraphqlTyping>(config, { Context, useReducer })

  return { Context, useContext, hostReducer, useReducer, Host, Actions }
}
