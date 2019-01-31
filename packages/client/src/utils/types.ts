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
export type NonUndefined<T> = T extends undefined ? never : T

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
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
 * Id utils
 */
export interface IIDProp<T = string> {
  id: T
}

export type StrictId<IdString, T> = Exclude<T, IIDProp> & {
  id: IdString
}
