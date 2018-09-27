export type TObjectWithId<T = object> = T & {
  id: string
}

export type TItems<T> = Array<TObjectWithId<T>>

export type TGroup<T> = Array<TItems<T>>
