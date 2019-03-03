import React from 'react'

export interface Action {
  type: string
}

export interface AugumentedDispatch<A extends Action, S> {
  (input: A): void
  <V>(input: (dispatch: React.Dispatch<A>, state: S) => V): V
}

export const augumentDispatch = <A extends Action, S>(dispatch: React.Dispatch<A>, state: S) => {
  const augumentedDispatch: AugumentedDispatch<A, S> = (input: any) => {
    return input instanceof Function ? input(dispatch, state) : dispatch(input)
  }

  return augumentedDispatch
}
