import React from 'react'
import { HostActionsUnion } from './actions'
import { TGraphqlTyping } from './graphql-types'
import { HostThunk, IHostState, IHostTyping } from './types'

export interface IHostContextValue<
  HostTyping extends IHostTyping,
  GraphqlTyping extends TGraphqlTyping
> {
  value: HostTyping['value']
  dispatch: React.Dispatch<
    | HostActionsUnion<HostTyping, GraphqlTyping>
    | HostTyping['customActions']
    | HostThunk<HostTyping, GraphqlTyping>
  >
  state: IHostState<HostTyping, GraphqlTyping>
}

export type HostContext<
  HostTyping extends IHostTyping,
  GraphqlTyping extends TGraphqlTyping
> = React.Context<IHostContextValue<HostTyping, GraphqlTyping>>

export const hostContextFactory = <
  HostTyping extends IHostTyping,
  GraphqlTyping extends TGraphqlTyping
>() => {
  const Context = React.createContext<IHostContextValue<HostTyping, GraphqlTyping>>({} as any)

  const useContext = () => React.useContext(Context)

  return { Context, useContext }
}
