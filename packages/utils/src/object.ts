import { XNOR } from './guards'
import { Head, StringIndex, Tail } from './types'

/*
 * GETTERS
 * https://www.reddit.com/r/ProgrammerHumor/comments/auz30h/when_you_make_documentation_for_a_settergetter/
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

  if (tail.length > 0) {
    return tryGetIn(state[head], ...tail)
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

  if (state === null) {
    console.log('null in value set ', state, value, path)
  }

  if (tail.length > 0) {
    const isHeadArray = Array.isArray(state[head])
    const shouldHeadBeArray = typeof tail[0] === 'number'
    // handle nulls & type obj <=> array conversion
    const nextState =
      state[head] !== null &&
      typeof state[head] === 'object' &&
      XNOR(shouldHeadBeArray, isHeadArray)
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

// quite wide definition of leaf/literal value, but ok
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
    const init: StringIndex = {}

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
    const init: StringIndex = {}

    const deepObj = Object.keys(input as object).reduce((acc, key) => {
      acc[key] = recursiveTransform(input[key], [...path, key], transformFn)
      return acc
    }, init)

    return transformFn(deepObj, path)
  } else {
    throw Error('Should never happen')
  }
}

export type CallbackFn = (value: any, path: Array<string | number>) => any

/*
 * just traversing, callback on parent before children!
 */
export const recursiveTraverse = (
  input: any,
  path: Array<string | number>,
  callback: CallbackFn,
): any => {
  if (isLeaf(input)) {
    return callback(input, path)
  } else if (Array.isArray(input)) {
    const parentReturn = callback(input, path)
    if (parentReturn) {
      return parentReturn
    }

    let index = 0
    for (const el of input) {
      const elementReturn = recursiveTraverse(el, [...path, index], callback)
      if (elementReturn) {
        return elementReturn
      }
      index += 1
    }
  } else if (typeof input === 'object') {
    const parentReturn = callback(input, path)
    if (parentReturn) {
      return parentReturn
    }

    const entries = Object.entries(input)
    for (const [key, val] of entries) {
      const elementReturn = recursiveTraverse(val, [...path, key], callback)
      if (elementReturn) {
        return elementReturn
      }
    }
  }
}

/**
 * For creating fresh references on not immutable products
 */
export const shallowClone = <T extends any>(input: T) =>
  (Array.isArray(input)
    ? [...(input as any[])]
    : typeof input === 'object' && input !== null
    ? { ...input }
    : input) as T

/**
 * Standard shallow equal implementation
 */
export const shallowEqual = <T>(objA: T, objB: T) => {
  if (objA === objB) {
    return true
  }

  if (!objA || !objB) {
    return false
  }

  // arrays
  if (Array.isArray(objA) && Array.isArray(objB)) {
    // length
    if (objA.length !== objB.length) {
      return false
    }

    const length = objA.length

    for (let i = 0; i < length; i++) {
      if (objA[i] !== objB[i]) {
        return false
      }
    }

    return true
  }

  // ! nulls are checked above
  if (typeof objA === 'object' && typeof objA === 'object') {
    // length
    const aKeys = Object.keys(objA)
    const bKeys = Object.keys(objB)

    if (aKeys.length !== bKeys.length) {
      return false
    }

    const length = aKeys.length

    for (let i = 0; i < length; i++) {
      const key = aKeys[i]

      if ((objA as any)[key] !== (objB as any)[key]) {
        return false
      }
    }

    return true
  }

  return false
}
