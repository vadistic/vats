export interface IStringIndexSignature {
  [index: string]: any
}

export type Indexed<T> = T & IStringIndexSignature

export type NonUndefined<T> = T extends undefined ? never : T
