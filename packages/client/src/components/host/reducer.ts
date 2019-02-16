import React, { useMemo, useReducer as useReactReducer, useState } from 'react'
import { client } from '../../apollo'
import { tuplify } from '../../utils'
import { actionsReducers, hostActionsFactory, HostActionsUnion, HostActionTypes } from './actions'
import { TGraphqlTyping } from './graphql-types'
import { helpers, IThunkHelpers } from './helper'
import { HostAction, HostThunk, IHostConfig, IHostState, IHostTyping } from './types'

// inspiration
// https://medium.com/yld-engineering-blog/rolling-your-own-redux-with-react-hooks-and-context-bbeea18b1253

interface IHostReducerFactoryDependencies {
  // deps losely typed
  Actions: ReturnType<typeof hostActionsFactory>['Actions']
}

export const hostReducerFactory = <
  HostTyping extends IHostTyping,
  GraphqlTyping extends TGraphqlTyping
>(
  config: IHostConfig<HostTyping, GraphqlTyping>,
  { Actions }: IHostReducerFactoryDependencies,
) => {
  type State = IHostState<HostTyping, GraphqlTyping>
  type Action = HostAction<HostTyping, GraphqlTyping>
  type Thunk = HostThunk<HostTyping, GraphqlTyping>
  type InitArg = HostTyping['initArg']

  type _HostOwnAction = HostActionsUnion<HostTyping, GraphqlTyping>
  type _State = IHostState<IHostTyping, TGraphqlTyping>

  const hostReducer: React.Reducer<State, Action> = (state, action) => {
    const _action = action as _HostOwnAction
    const _state = (state as unknown) as _State

    switch (_action.type) {
      case HostActionTypes.RESET:
        return actionsReducers.reset(_state, _action)
      case HostActionTypes.UPDATE:
        return actionsReducers.update(_state, _action)
      case HostActionTypes.CUSTOM_UPDATE:
        return actionsReducers.customUpdate(_state, _action)
      case HostActionTypes.SET_STATE:
        return actionsReducers.setState(_state, _action)
      case HostActionTypes.SET_CONFIG:
        // assertion because actions are loosely typed and do no fit
        return actionsReducers.setConfig(_state, _action as any)
      default:
        // delegate to provided reducer
        return config.reducer(state, action)
    }
  }

  const useReducer = (initArg?: InitArg) => {
    // implementation of hooked forceUpdate
    const [, forceUpdate] = useState<void>(undefined)

    // same as Reset reducer
    const hostInit = (_initArg: InitArg): State => ({
      local: config.initState(_initArg),
      variables: config.initVariables(_initArg),
      config,
      forceUpdate,
    })

    const initalState = useMemo(() => hostInit(initArg), [initArg])

    // const [state, dispatch] = useInspectedReducer(hostReducer, initalState, undefined as any, config.displayName)
    const [state, dispatch] = useReactReducer(hostReducer, initalState, undefined as any)

    // allow thunk-like actions
    type AugmentedDispatch = React.Dispatch<Thunk | Action>

    const augmentDispatch = (
      _dispatch: React.Dispatch<Action>,
      _state: State,
      _helpers: IThunkHelpers<GraphqlTyping>,
    ): AugmentedDispatch => (input: Thunk | Action) =>
      input instanceof Function ? input(_dispatch, _state, _helpers) : _dispatch(input)

    if (initArg && config.resetOnInitArgPropChange) {
      useMemo(() => {
        dispatch(Actions.reset(initArg))
      }, [initArg])
    }

    return tuplify([state, augmentDispatch(dispatch, state, helpers(state, client))])
  }

  return { hostReducer, useReducer }
}
