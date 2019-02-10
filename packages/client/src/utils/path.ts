import { getIn } from './object'
import { Head, Tail } from './types'

/*
 * util for safely building nested properties paths (for formik)
 * TODO: maybe change void error type, but it seems most semantic (since void === error)
 */
export type CheckPath<State extends any, Paths extends any[]> = Head<Paths> extends keyof State
  ? {
      0: string
      1: CheckPath<State[Head<Paths>], Tail<Paths>>
    }[Tail<Paths> extends never ? 0 : 1]
  : void

type Leaf = string | number | boolean | undefined

export type CheckLeafPath<State extends any, Paths extends any[]> = Head<Paths> extends keyof State
  ? {
      0: State[Head<Paths>] extends Leaf ? string : never
      1: CheckPath<State[Head<Paths>], Tail<Paths>>
    }[Tail<Paths> extends never ? 0 : 1]
  : void

/**
 * validate type path and transform to lodash.style
 */
export const buildLoPath = (paths: Array<string | number>) => {
  const loPath = paths.reduce((acc, el, i) => {
    acc += typeof el === 'number' ? `[${el}]` : i === 0 ? el : `.${el}`

    return acc
  }, '')

  return loPath
}

export const getLoPath = <S, P extends string[]>(state: S, ...paths: P) =>
  (buildLoPath(paths) as unknown) as CheckPath<S, P>

/**
 * validate type path for leaf node and transform to lodash.style
 */
export const getLoLeafPath = <S, P extends Array<string | number>>(state: S, ...paths: P) =>
  (buildLoPath(paths) as unknown) as CheckLeafPath<S, P>

/**
 *  and now reversing lodash style paths :/
 */
export const getInByPath = (state: object, path: string) =>
  getIn(state, ...path.split(/\.|(?:\[|\])/).filter(el => !!el))
