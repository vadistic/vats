export interface IStrictIndexSignature {
  [index: string]: never
}

export interface IStringIndexSignature {
  [index: string]: any
}

export type StrictlyIndexed<T> = T & IStrictIndexSignature
export type Indexed<T> = T & IStringIndexSignature

export type FilterKeys<T, Condition> = { [Key in keyof T]: Key extends Condition ? T[Key] : never }

export type FilterValues<T, Condition> = {
  [Key in keyof T]: T[Key] extends Condition ? T[Key] : never
}

export type RejectKeys<T, Condition> = { [Key in keyof T]: Key extends Condition ? never : T[Key] }

export type RejectValues<T, Condition> = {
  [Key in keyof T]: T[Key] extends Condition ? never : T[Key]
}

export type NonUndefined<T> = T extends undefined ? never : T

export interface IdProp<T = string> {
  id: T
}

export type StrictId<IdString, T> = Exclude<T, IdProp> & {
  id: IdString
}
