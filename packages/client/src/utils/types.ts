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
/**
 * Return type of array element or just the same type
 */
export type ElementType<T> = T extends Array<infer E> ? E : never
export type ElementTypeOr<T> = T extends Array<infer E> ? E : T

export type NonUndefined<T> = T extends undefined ? never : T

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

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

/**
 * accept only interface keys, and nothing more
 *
 * (typescript sometimes does not enforce type of unspecified properties
 * in function return type annotation)
 */
export type StrictReturnInterface<T> = T & FilterKeys<any, keyof T>

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
