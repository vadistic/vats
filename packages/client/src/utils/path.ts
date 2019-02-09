import { tuplify } from './guards'
import { Head, Omit, Tail } from './types'
/*
 * util for safely traversing object trees
 */
export type TraversePath<State extends any, Paths extends any[]> = Head<Paths> extends keyof State
  ? {
      0: State[Head<Paths>]
      1: TraversePath<State[Head<Paths>], Tail<Paths>>
    }[Tail<Paths> extends never ? 0 : 1]
  : void

/**
 * access nested object property
 */
export const getIn = <State extends any, Paths extends Array<string | number>>(
  state: State,
  ...paths: Paths
): TraversePath<State, Paths> => {
  const [head, ...tail] = paths

  if (!state.hasOwnProperty(head)) {
    throw new Error(`state has not ${head}`)
  }

  if (tail.length) {
    return getIn(state[head], ...tail)
  }

  return state[head]
}

/**
 * set nested object property to value
 */

export const mutableSetValueIn = <
  State extends any,
  Value extends any,
  Paths extends Array<string | number>
>(
  state: State,
  value: Value,
  path: Paths,
) => {
  const [head, ...tail] = path

  if (tail.length > 0) {
    state[head] = mutableSetValueIn(state[head] || typeof head === 'number' ? [] : {}, value, tail)
  }

  if (tail.length === 0) {
    state[head] = value
  }

  return state
}

/**
 * this one's immutable
 */
export const setValueIn = <
  State extends any,
  Value extends any,
  Paths extends Array<string | number>
>(
  state: State,
  value: Value,
  path: Paths,
) => {
  const [head, ...tail] = path

  let temp: any

  if (tail.length > 0) {
    temp = mutableSetValueIn(state[head] || typeof head === 'number' ? [] : {}, value, tail)
  }

  if (tail.length === 0) {
    temp = value
  }

  return { ...state, [head]: temp }
}

/*
 * util for safely building nested properties paths (for formik)
 * TODO: maybe change void error type, but it seems most semantic (since void === error)
 */
export type CheckPath<State extends any, Paths extends any[]> = Head<Paths> extends keyof State
  ? {
      0: string
      1: CheckPath<State[Head<Paths>], Tail<Paths>>
    }[Tail<Paths> extends never ? 0 : 1]
  : void

type Leaf = string | number | number[] | string[] | boolean | undefined | []

export type CheckLeafPath<State extends any, Paths extends any[]> = Head<Paths> extends keyof State
  ? {
      0: State[Head<Paths>] extends Leaf ? string : never
      1: CheckPath<State[Head<Paths>], Tail<Paths>>
    }[Tail<Paths> extends never ? 0 : 1]
  : void

/**
 * validate path and transform to lodash.style
 */
export const getLoPath = <S, P extends string[]>(state: S, ...paths: P) =>
  (paths.join('.') as unknown) as CheckPath<S, P>

/**
 * validate path for leaf node and transform to lodash.style
 */
export const getLeafPath = <S, P extends string[]>(state: S, ...paths: P) =>
  (paths.join('.') as unknown) as CheckLeafPath<S, P>

/**
 *  and now reversing lodash style paths :/
 */
export const getInByPath = (state: object, path: string) => getIn(state, ...path.split('.'))
