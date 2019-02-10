import { XNOR, XOR } from './guards'
import { Head, Tail } from './types'

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
    console.error(state, `has not ${head}`)
    throw new Error()
  }

  if (tail.length) {
    return getIn(state[head], ...tail)
  }

  return state[head]
}

export const tryGetIn = <State extends any, Paths extends Array<string | number>>(
  state: State,
  ...paths: Paths
): TraversePath<State, Paths> | undefined => {
  const [head, ...tail] = paths

  if (!state.hasOwnProperty(head)) {
    return undefined
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

  // handle obj <=> array conversion
  const isHeadArray = Array.isArray(state[head])
  const shouldHeadBeArray = typeof tail[0] === 'number'

  if (tail.length > 0) {
    const nextHead = XNOR(shouldHeadBeArray, isHeadArray)
      ? state[head]
      : shouldHeadBeArray
      ? []
      : {}

    state[head] = mutableSetValueIn(nextHead, value, tail)
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
