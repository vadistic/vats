import {
  computed,
  IComputedValueOptions,
  IReactionDisposer,
  IReactionOptions,
  IReactionPublic,
  reaction,
  runInAction,
} from 'mobx'
import { useDisposable } from 'mobx-react-lite'
import { useCallback, useMemo } from 'react'
import { StoreValue } from './types'

/*
 * shortcut action creator with useCallback
 */

export type UseAction<A extends any[], T> = (...args: A) => T

export const useAction = <A extends any[], T>(
  name: string,
  cb: (...args: A) => T,
  deps: any[] = [],
) =>
  useCallback<any>((...args: A) => runInAction<T>(name, () => cb(...args)), deps) as UseAction<A, T>

/**
 * Same as useAction, but with automatic store in deps, name prefix and half-curried for nicer formatting^^
 */
export const useStoreAction = (store: StoreValue, name: string) => <A extends any[], T>(
  cb: (...args: A) => T,
  deps: any[] = [],
) =>
  useCallback<any>(
    (...args: A) => runInAction<T>(`${store.config.name}: ${name}`, () => cb(...args)),
    [store, ...deps],
  ) as UseAction<A, T>

/*
 * shortcut disposable reaction with rewired naming arg
 */
export type UseReaction = <T>(
  name: string,
  expression: (r: IReactionPublic) => T,
  effect: (arg: T, r: IReactionPublic) => void,
  deps?: any[],
  opts?: IReactionOptions,
) => IReactionDisposer

export const useReaction: UseReaction = (name, expression, effect, deps = [], opts) =>
  useDisposable(() => reaction(expression, effect, { name, ...opts }), deps)

// my own hook because provided is quite useless
// https://github.com/mobxjs/mobx-react-lite/issues/38
export const useComputed = <T>(
  name: string,
  func: () => T,
  deps: ReadonlyArray<any> = [],
  opts: IComputedValueOptions<T> = {},
) => useMemo(() => computed(func, { name, ...opts }), deps)
