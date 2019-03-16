import { getIn } from './object'
import { ElementType, Head, Tail } from './types'

/*
 * util for safely building nested properties paths (ie for formik)
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
 * build lodash paths (no type validation)
 */
export const buildLoPath = (paths: Array<string | number>) => {
  const loPath = paths.reduce((acc, el, i) => {
    acc += typeof el === 'number' ? `[${el}]` : i === 0 ? el : `.${el}`

    return acc
  }, '')

  return loPath
}

/**
 * validate type path and transform to lodash.style
 */
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
export const getInByPath = (state: any, path: string) => getIn(state, ...reverseLoPath(path))

/**
 * reverse lodash path, converts array accesors back to numbers
 */
export const reverseLoPath = (path: string) =>
  path
    .split(/\.|(?:\[|\])/)
    .filter(el => el !== '')
    .map(el => (isNaN(+el) ? el : +el))

/*
 * Different approach
 * https://github.com/jaredpalmer/formik/issues/1334
 */

// path getter
export interface FieldPath {
  PATH: string
}

type PathProxyObject<S extends object> = { [K in keyof S]: PathProxy<S[K]> } & FieldPath

// ! does not support arrays-in-arrays
// this somehow breaks typescript by creating cycle - there need to be type left off
type PathProxyArray<S extends any[]> = (ElementType<S> extends object
  ? Array<PathProxyObject<ElementType<S>>>
  : FieldPath[]) &
  FieldPath

export type PathProxy<S> = S extends any[]
  ? PathProxyArray<S>
  : S extends object
  ? PathProxyObject<S>
  : FieldPath

const idPath = { PATH: '' } as FieldPath

export const pathProxy = <S>(parent: FieldPath = idPath as any): PathProxy<S> => {
  return new Proxy(parent as any, {
    get(target: any, key: any) {
      if (key in target) {
        return target[key]
      }
      return pathProxy<any>({
        // proxy get keys as strings
        // so !isNan(+key) is just smarter typeof key === 'number'
        PATH: parent.PATH + (!isNaN(+key) ? `[${key}]` : parent.PATH === '' ? key : '.' + key),
      } as any)
    },
  })
}
