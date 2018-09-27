import * as R from 'ramda'

export type ElementType<T> = T extends Array<infer U> ? U : never

export type FirstArgument<T> = T extends (arg1: infer U, ...args: any[]) => any ? U : any

export type NonNullArray<T extends any[] | null> = T extends Array<infer U>
  ? Array<NonNullable<U>>
  : never

type Lit = number | boolean | string | object | [any]

export const nonNull = <T extends [any] | object>(input: T | null): T => {
  if (Array.isArray(input)) {
    return input || []
  } else {
    // Object constructor creates empty obj from null val and simply pass val that are already an obj
    return Object(input)
  }
}

export const filterNull = <T extends Lit>(input: Array<T | null>) =>
  input.filter(val => val !== null) as T[]

export const isNotEmpty = <T>(input: T | {} | []): input is T => {
  return !R.isEmpty(input)
}
