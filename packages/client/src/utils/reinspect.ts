import React, { Fragment, useReducer as useReactReducer, useState as useReactState } from 'react'
import {
  StateInspector as ReinspectStateInspector,
  useReducer as useReinspectReducer,
  useState as useReinspectState,
  // tslint:disable-next-line:no-implicit-dependencies
} from 'reinspect'

let useInspectedState: typeof useReinspectState
let useInspectedReducer: typeof useReinspectReducer
let StateInspector: typeof ReinspectStateInspector

if (process.env.NODE_ENV === 'development') {
  useInspectedState = useReinspectState
  StateInspector = ReinspectStateInspector

  // fallback to inital state to allow time-travel without crashing
  useInspectedReducer = (reducer, initalState, init, id) => {
    const reduxReducer = useReinspectReducer(reducer, initalState, init, id)
    const state = reduxReducer[0]

    if (!state) {
      const dispatch = reduxReducer[1]
      // assertion because reinspect is missing overloads (my bad :< )
      const initialState = init ? init(initalState) : (initalState as ReturnType<typeof init>)
      return [initialState, dispatch]
    }

    return reduxReducer
  }
} else {
  // pluck ids
  useInspectedState = (initalState, id) => useReactState(initalState)
  useInspectedReducer = (reducer, initalState, init, id) =>
    useReactReducer(reducer, initalState, init)
  // it's basically a noop
  StateInspector = ({ children }) => React.createElement(Fragment, {}, children)
}

export { useInspectedState, useInspectedReducer, StateInspector }
