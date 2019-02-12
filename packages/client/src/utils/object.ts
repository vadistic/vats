import { XNOR, XOR } from './guards'
import { Head, IStringIndexSignature, Tail } from './types'

/*
 * GET VALUE IN
 */

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
 * access existing nested object property
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

/**
 * same as getIn but with undefined as fallback
 */
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

/*
 * SET VALUE IN
 */

/**
 * set nested object property to value
 * allows arr <=> obj transform (but it wipes prev data)
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
    // handle obj <=> array conversion
    const isHeadArray = Array.isArray(state[head])
    const shouldHeadBeArray = typeof tail[0] === 'number'
    const nextState = XNOR(shouldHeadBeArray, isHeadArray)
      ? state[head]
      : shouldHeadBeArray
      ? []
      : {}

    state[head] = mutableSetValueIn(nextState, value, tail)
  }

  if (tail.length === 0) {
    state[head] = value
  }

  return state
}

/**
 * immutable set nested object property to value,
 * allows `arr <=> obj` transform (but it wipes prev data)
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
    // handle obj <=> array conversion
    const isHeadArray = Array.isArray(state[head])
    const shouldHeadBeArray = typeof tail[0] === 'number'
    const nextState = XNOR(shouldHeadBeArray, isHeadArray)
      ? state[head]
      : shouldHeadBeArray
      ? []
      : {}

    temp = mutableSetValueIn(nextState, value, tail)
  }

  if (tail.length === 0) {
    temp = value
  }

  return { ...state, [head]: temp }
}

/*
 * RECURSIVE TRANSFORM LEAFS
 */

export type TransformLeafFn = (value: any, keyOrIndex: string | number) => any

// quite wide definition of literal value
const isLeaf = (input: any) => typeof input !== 'object' || input === null

/**
 * traverse object and apply return some (immutable!) changes on leaf
 */
export const recursiveTransformLeafs = (
  input: any,
  keyOrIndex: string | number,
  transformFn: TransformLeafFn,
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

/*
 * RECURSIVE TRANSFORM
 */
export type TransformFn = (value: any, path: Array<string | number>) => any

/**
 * Same as recursiveTransformLeafs, but gets called on each level
 * Deep first!
 */
export const recursiveTransform = (
  input: any,
  path: Array<string | number>,
  transformFn: TransformFn,
): any => {
  if (isLeaf(input)) {
    return transformFn(input, path)
  } else if (Array.isArray(input)) {
    const deepArr = input.map((el, index) => recursiveTransform(el, [...path, index], transformFn))

    return transformFn(deepArr, path)
  } else if (typeof input === 'object') {
    const init: IStringIndexSignature = {}

    const deepObj = Object.keys(input as object).reduce((acc, key) => {
      acc[key] = recursiveTransform(input[key], [...path, key], transformFn)
      return acc
    }, init)

    return transformFn(deepObj, path)
  } else {
    throw Error('Should never happen')
  }
}
