export type ElementType<T> = T extends Array<infer U> ? U : never

export type FirstArgument<T> = T extends (arg1: infer U, ...args: any[]) => any ? U : any

export const nonNullable = <T extends [any] | object>(input: T | null): T => {
  if (Array.isArray(input)) {
    return input || []
  } else {
    // Object constructor create empty obj from null val and simply pass val that are already obj
    return Object(input)
  }
}

export type NonNullArray<T extends any[] | null> = T extends Array<infer U>
  ? Array<NonNullable<U>>
  : never

type Lit = number | boolean | string | object | [any]

export const filterNull = <T extends Lit>(input: Array<T | null>) =>
  input.filter(val => val !== null) as T[]
