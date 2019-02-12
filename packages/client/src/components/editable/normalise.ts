import { recursiveTransform } from '../../utils'

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

export const normaliseFormikInitialValues = <T>(obj: T): DeepNullToUndefined<T> =>
  recursiveTransform(obj, [], value => {
    // null vals to undefined
    if (value === null) {
      return undefined
    }

    return value
  })

/*
 * And now reverse
 */
export const normaliseFormikPayload = <T>(obj: T): DeepNullToUndefined<T> =>
  recursiveTransform(obj, [], value => {
    if (value === undefined) {
      return null
    } else {
      return value
    }
  })
