import { XNOR, XOR } from './guards'
import { Head, IStringIndexSignature, Tail } from './types'

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

/**
 * traverse object and apply return some (immutable!) change on some prop
 */

export type TransformFn = (value: any, keyOrIndex: string | number) => any

// quite wide definition of literal value
const isLeaf = (input: any) => typeof input !== 'object' || input === null

export const recursiveTransformLeafs = (
  input: any,
  keyOrIndex: string | number,
  transformFn: TransformFn,
): any => {
  if (isLeaf(input)) {
    return transformFn(input, keyOrIndex)
  } else if (Array.isArray(input)) {
    return input.map((el, index) => recursiveTransformLeafs(el, index, transformFn))
  } else if (typeof input === 'object') {
    const init: IStringIndexSignature = {}

    return Object.keys(input as object).reduce((acc, key) => {
      acc[key] = recursiveTransformLeafs(input[key], key, transformFn)

      return acc
    }, init)
  } else {
    throw Error('Should never happen')
  }
}
