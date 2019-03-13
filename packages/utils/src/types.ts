/*
 * Function arguments
 */

export type Head<U> = U extends [any]
  ? ((...args: U) => any) extends (head: infer H, ...args: any) => any
    ? H
    : never
  : never

export type Tail<U> = U extends [any]
  ? ((...args: U) => any) extends (head: any, ...args: infer T) => any
    ? T
    : never
  : never

/*
 * Index signatures
 */

export type StringIndex<T = {}> = {
  [index: string]: unknown
} & { [K in keyof T]: T[K] }

export type LooseStringIndex<T = {}> = {
  [index: string]: any
} & { [K in keyof T]: T[K] }

export type StrictStringIndex<T = {}> = {
  [index: string]: never
} & { [K in keyof T]: T[K] }

// for arrays
export type StringIndexArrayElements<A = []> = Array<StringIndex<ElementType<A>>>

// helper
export type DeepStringIndexChildren<C = {}> = C extends any[]
  ? DeepStringIndexArray<C>
  : C extends object
  ? DeepStringIndex<C>
  : C

// helper for arrays in arrays
export type DeepStringIndexArray<A = []> = {
  [index: number]: unknown
} & { [K in keyof A]: DeepStringIndexChildren<A[K]> }

export type DeepStringIndex<T = {}> = {
  [index: string]: unknown
} & {
  [K in keyof T]: T[K] extends any[]
    ? Array<DeepStringIndexChildren<ElementType<T[K]>>>
    : T[K] extends object
    ? DeepStringIndex<T[K]>
    : T[K]
}

// ! prefer just this for simplicity
export interface StringMap<V = any> {
  [index: string]: V
}

/*
 * Conditional & mapped types
 */

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>> // tslint:disable-next-line: no-shadowed-variable
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]>
}

/*
 * Return type of array element or just the same type
 */

export type ElementType<T> = T extends Array<infer E> ? E : never
export type ElementTypeOr<T> = T extends Array<infer E> ? E : T

/*
 * Helpers
 */

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

export type AnyFunction = (...args: any[]) => any

/**
 * It's basically filter keys but nvm
 *
 * Allow to force type T extending S to have only props from S
 * Or removing index signatures?
 *
 * @example
 * type Strict<T extends Exact<T, Base>> = T
 */
export type Exact<T, Base> = { [K in keyof T]: K extends keyof Base ? T[K] : never }

/**
 * merge types by prop, S to T prefering S;
 * like Object.assign(target, source)
 */
export type Assign<T, S> = {
  [K in keyof T | keyof S]: K extends keyof S ? S[K] : K extends keyof T ? T[K] : never
}

export type UnionOnProps<A, B> = {
  [K in keyof A | keyof B]: K extends keyof A & keyof B
    ? A[K] | B[K]
    : K extends keyof A
    ? A[K]
    : K extends keyof B
    ? B[K]
    : never
}

/*
 * Nullability
 */

export type NonUndefined<T> = T extends undefined ? never : T

export type NonNullableObjOrLit<T> = T extends object
  ? { [K in keyof T]: Idx<T[K]> }
  : NonNullable<T>

export type NonNullableArray<T> = T extends Array<infer E> ? Array<NonNullableObjOrLit<E>> : never

export type Idx<T> = T extends any[]
  ? NonNullableArray<T>
  : T extends object
  ? NonNullableObjOrLit<T>
  : NonNullable<T>

/*
 * Filter interfaces by condition
 */

export type FilterKeys<T, Condition> = { [Key in keyof T]: Key extends Condition ? T[Key] : never }

export type FilterValues<T, Condition> = {
  [Key in keyof T]: T[Key] extends Condition ? T[Key] : never
}

export type RejectKeys<T, Condition> = { [Key in keyof T]: Key extends Condition ? never : T[Key] }

export type RejectValues<T, Condition> = {
  [Key in keyof T]: T[Key] extends Condition ? never : T[Key]
}

/*
 * Prevent extending string union to strings
 * https://stackoverflow.com/questions/54333982/why-is-typescript-converting-string-literal-union-type-to-string-when-assigning
 */
export type Narrowable =
  | string
  | number
  | boolean
  | symbol
  | object
  | null
  | undefined
  | void
  | ((...args: any[]) => any)
  | {}

export const literally = <
  T extends V | Array<V | T> | { [k: string]: V | T },
  V extends Narrowable
>(
  input: T,
) => input

/*
 * Graphql utils
 */

// tslint:disable-next-line: interface-name
export interface IDProp<T = string> {
  id: T
}

export type AnyTypename<T> = Omit<T, '__typename'> & {
  __typename: any
}

export type DeepAnyTypename<T> = AnyTypename<T> & { [K in keyof T]: DeepAnyTypename<T[K]> }
