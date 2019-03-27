import { DeepAnyTypename } from './types'

export const isArrEmpty = (arr: unknown[]): arr is [] => arr.length === 0

export const isObjEmpty = (obj: object): obj is {} => Object.keys(obj).length === 0

export const anyTypename = <T>(data: T) => (data as unknown) as DeepAnyTypename<T>

export const filterNull = <T>(arr: T[]) =>
  arr.filter(el => el && el !== null) as Array<NonNullable<T>>

export const hasKey = <O>(obj: O, key: string | number | symbol): key is keyof O => key in obj

// https://github.com/Microsoft/TypeScript/issues/29780
export const tuplify = <T extends [any] | any[]>(tuple: T): T => tuple

export const XOR = (a: boolean, b: boolean) => (a && !b) || (!a && b)
export const XNOR = (a: boolean, b: boolean) => (a && b) || !(a || b)

export const nullableFn = <T, R>(input: T, fn: (nonullable: NonNullable<T>) => R) =>
  (input === null ? input : fn(input as NonNullable<T>)) as T extends null ? R | null : R

/**
 * for index stringatures in object switch
 */

export type ObjectSwitch<T> = { [K in keyof T]: T[keyof T] }

export const objSwitch = <T extends {}>(cases: T) => cases as ObjectSwitch<T>
