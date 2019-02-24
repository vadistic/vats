import React from 'react'

export interface IAction {
  type: string
}

export interface IAugumentedDispatch<A extends IAction, S> {
  (input: A): void
  <V>(input: (dispatch: React.Dispatch<A>, state: S) => V): V
}

export const augumentDispatch = <A extends IAction, S>(dispatch: React.Dispatch<A>, state: S) => {
  const augumentedDispatch: IAugumentedDispatch<A, S> = (input: any) => {
    return input instanceof Function ? input(dispatch, state) : dispatch(input)
  }

  return augumentedDispatch
}
