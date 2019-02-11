import cloneDeep from 'clone-deep'
import { IStringIndexSignature, recursiveTransformLeafs } from '../../utils'

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

export const deepNullToUndefined = <T>(obj: T): DeepNullToUndefined<T> =>
  recursiveTransformLeafs(obj, 'root', (value, key) => {
    if (value === null) {
      return undefined
    } else {
      return value
    }
  })

export const normaliseFormikInput = deepNullToUndefined

/*
 * And now reverse
 */
export const deepUndefinedToNull = <T>(obj: T): DeepNullToUndefined<T> =>
  recursiveTransformLeafs(obj, 'root', (value, key) => {
    if (value === undefined) {
      return null
    } else {
      return value
    }
  })

export const normaliseFormikResult = deepUndefinedToNull
