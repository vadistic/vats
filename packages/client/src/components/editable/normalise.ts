import { IStringIndexSignature } from '../../utils'

/*
 * Formik and subsequent input fields & react expect undefined for empty, not null
 */
export type NullToUndefinedLit<T> = T extends null ? undefined : T

export type NullToUndefinedObjOrLit<T> = T extends object
  ? { [K in keyof T]: DeepNullToUndefined<T[K]> }
  : NullToUndefinedLit<T>

export type NullToUndefinedArray<T> = T extends Array<infer E>
  ? Array<NullToUndefinedObjOrLit<E>>
  : never

export type DeepNullToUndefined<T> = T extends any[]
  ? NullToUndefinedArray<T>
  : T extends object
  ? NullToUndefinedObjOrLit<T>
  : NullToUndefinedLit<T>

export const deepNullToUndefined = <T extends any>(obj: T) => {
  const result: IStringIndexSignature = {}

  Object.keys(obj).forEach(key => {
    const value = obj[key]
    result[key] =
      typeof value === 'object' && value !== null
        ? deepNullToUndefined(value)
        : value === null
        ? undefined
        : value
  })

  return result as DeepNullToUndefined<T>
}

export const normaliseFormikInput = deepNullToUndefined

/*
 * Formik changes payload from arrays to number indexed objects
 * https://github.com/jaredpalmer/formik/issues/936
 */

interface INumberIndexed<T> {
  [index: number]: T[keyof T]
}

type ArrayFromObject<T> = T extends INumberIndexed<T> ? Array<T[number]> : never

// specifically empty objects will be treated as arrays
// (coz formik does it and it's impossible to differentiate)
const isArrayLike = <T>(obj: T) =>
  obj && (Object.keys(obj).length === 0 || (obj.hasOwnProperty(0) && !Array.isArray(obj)))

const convertToArray = <T>(obj: T): ArrayFromObject<T> => {
  const length = Object.keys(obj).length

  return Array.from({ ...obj, length }, el => deepNumberIndexedObjectsToArr(el)) as ArrayFromObject<
    T
  >
}

// reversing input normalisation
const converUndefinedToNull = (input: any) => (input === undefined ? null : input)

export const deepNumberIndexedObjectsToArr = <T extends any>(input: T) => {
  const result: IStringIndexSignature = {}

  if (typeof input !== 'object' || input === null) {
    return input
  }

  if (Array.isArray(input)) {
    return input.map((el: any) => deepNumberIndexedObjectsToArr(el))
  }

  if (isArrayLike(input)) {
    return convertToArray(input)
  }

  Object.keys(input).forEach(key => {
    result[key] = isArrayLike(input[key])
      ? deepNumberIndexedObjectsToArr(input[key])
      : converUndefinedToNull(input[key])
  })

  return result as T
}

export const normaliseFormikResult = deepNumberIndexedObjectsToArr
