import React from 'react'

export interface ReducersStringMap {
  [index: string]: React.Reducer<any, any>
}

type NoUnion<T> = [T] extends [infer U]
  ? U extends any
    ? [T] extends [U]
      ? T
      : never
    : never
  : never

type CombinedReducers<R extends ReducersStringMap> = React.Reducer<
  NoUnion<React.ReducerState<R[keyof R]>>,
  // maybe allow smart state type merging?
  // React.ReducerState<R[keyof R]>
  React.ReducerAction<R[keyof R]>
>

// maybe combine by key to slice of state like redux?
export const combineReducers = <R extends ReducersStringMap>(reducers: R): CombinedReducers<R> =>
  Object.values(reducers).reduce(
    (acc, reducer) => (state, action) => reducer(acc(state, action), action),
    // init (somehow not sure if necessary)
    (state, action) => state,
  )
