import React, { useMemo, useReducer as useReactReducer, useState } from 'react'
import { client } from '../../apollo'
import { IStringIndexSignature, tuplify, useInspectedReducer } from '../../utils'
import { diffAutoUpdataData } from './diff'
import { IAction, IHostTyping } from './types'

// inspiration
// https://medium.com/@martin_hotell/redux-typescript-typed-actions-with-less-keystrokes-d984063901d

// TODO: Upgrade and to utils
const reducerLog = (state: IHostTyping['state'], action: IAction, ...print: string[]) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(`Host ${state.config.displayName}/${action.type}: `, ...print)
    console.warn(`STATE:`, state, 'ACTION:', action)
  }
}

type HostReducer<HostTyping extends IHostTyping> = (
  state: HostTyping['state'],
  action: any,
) => HostTyping['state']

const RESET = 'RESET'

class Reset<InitArg = any> {
  readonly type = RESET
  constructor(public initArg: InitArg) {}
}

const resetReducer: HostReducer<IHostTyping> = (state, action: Reset) => {
  return {
    ...state,
    local: state.config.init(action.initArg),
    variables: state.config.initVariables(action.initArg),
  }
}

const SINGLE_UPDATE = 'SINGLE_UPDATE'

class SingleUpdate<Data = any> {
  readonly type = SINGLE_UPDATE
  constructor(public data: Data) {}
}

const singleUpdateReducer: HostReducer<IHostTyping> = (state, action: SingleUpdate) => {
  if (!state.config.updateMutation) {
    reducerLog(state, action, `missing graphql update mutation`)
    return state
  }

  // maybe fetch fresh data from server to awoid some edge case out-of-sync
  const queryCache = client.readQuery<IStringIndexSignature>({
    query: state.config.query,
    variables: state.variables,
  })

  if (queryCache === null) {
    reducerLog(state, action, `cached query read returned null`)
    return state
  }

  const cache = queryCache[state.config.rootField]

  const { updateData, queryData } = diffAutoUpdataData(cache, action.data)

  if (updateData) {
    client.mutate({
      mutation: state.config.updateMutation,
      variables: {
        ...state.variables,
        data: updateData,
      },
    })

    client.writeQuery({
      query: state.config.query,
      variables: state.variables,
      data: { [state.config.rootField]: { ...cache, queryData } },
    })
  }

  return state
}

// use HostTyping?
export type HostActions = Reset | SingleUpdate

// this can be done by some fn
export const HostActionType = {
  SingleUpdate: SINGLE_UPDATE as typeof SINGLE_UPDATE,
  Reset: RESET as typeof RESET,
}

export type HostUseReducer<HostTyping extends IHostTyping> = (
  initArg?: HostTyping['types']['initArg'],
) => [HostTyping['state'], React.Dispatch<HostActions | HostTyping['types']['customActions']>]

export const hostReducerFactory = <HostTyping extends IHostTyping>(
  config: IHostTyping['config'],
) => {
  const hostReducer: React.Reducer<
    IHostTyping['state'],
    HostActions | HostTyping['types']['customActions']
  > = (state, action) => {
    // TODO: combine reducers fn
    switch (action.type) {
      case HostActionType.Reset:
        return resetReducer(state, action)
      case HostActionType.SingleUpdate:
        return singleUpdateReducer(state, action)
      // delegate to provided reducer
      default:
        return config.reducer(state, action)
    }
  }

  const useReducer = (initArg?: HostTyping['types']['initArg']) => {
    // implementation of hooked forceUpdate
    const [, forceUpdate] = useState<void>(undefined)

    // same as Reset reducer
    const hostInit = (_initArg: HostTyping['types']['initArg']): HostTyping['state'] => ({
      local: config.init(_initArg),
      variables: config.initVariables(_initArg),
      config,
      forceUpdate,
    })

    const initalState = useMemo(() => hostInit(initArg), [initArg])

    // TODO: fix reinspect...
    // const [state, dispatch] = useInspectedReducer(hostReducer, initalState, undefined as any, config.displayName)
    const [state, dispatch] = useReactReducer(hostReducer, initalState, undefined as any)

    if (initArg && config.resetOnInitArgChange) {
      useMemo(() => {
        dispatch({ type: RESET, initArg })
      }, [initArg])
    }

    return tuplify([state, dispatch])
  }

  return { hostReducer, useReducer }
}
