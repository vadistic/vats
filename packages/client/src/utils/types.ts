/*
 * Function arguments
 */
export type Head<U> = U extends [any, ...any[]]
  ? ((...args: U) => any) extends (head: infer H, ...args: any) => any
    ? H
    : never
  : never

export type Tail<U> = U extends [any, any, ...any[]]
  ? ((...args: U) => any) extends (head: any, ...args: infer T) => any
    ? T
    : never
  : never

/*
 * Index signatures
 */
export interface IStrictIndexSignature {
  [index: string]: never
}

export interface IStringIndexSignature {
  [index: string]: any
}

export type StrictlyIndexed<T> = T & IStrictIndexSignature

export type Indexed<T> = T & IStringIndexSignature

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

export type Exact<T, S> = { [K in keyof T]: K extends keyof S ? T[K] : never }

export type Merge<A, B> = {
  [K in keyof A | keyof B]: K extends keyof A ? A[K] : K extends keyof B ? B[K] : never
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
 * Graphql utils
 */
export interface IIDProp<T = string> {
  id: T
}

export type AnyTypename<T> = Omit<T, '__typename'> & {
  __typename: any
}

export type DeepAnyTypename<T> = AnyTypename<T> & { [K in keyof T]: DeepAnyTypename<T[K]> }
