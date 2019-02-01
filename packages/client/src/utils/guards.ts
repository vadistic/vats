import { AnyTypename, DeepAnyTypename, IStringIndexSignature, NonUndefined } from './types'

export const isArrEmpty = (arr: Array<unknown>): arr is [] => arr.length === 0

export const isObjEmpty = (obj: object): obj is {} => Object.keys(obj).length === 0

export const anyTypename = <T>(data: T) => (data as unknown) as DeepAnyTypename<T>

export const filterNull = <T>(arr: T[]) =>
  arr.filter(el => el && el !== null) as Array<NonNullable<T>>

export const hasKey = <O>(obj: O, key: string | number | symbol): key is keyof O => key in obj
