import { IReactionDisposer, IReactionOptions, IReactionPublic, reaction, runInAction } from 'mobx'
import { useDisposable } from 'mobx-react-lite'
import { useCallback } from 'react'

/*
 * shortcut action creator
 */

export type UseAction<A extends any[], T> = (...args: A) => T

export const useAction = <A extends any[], T>(name: string, cb: (...args: A) => T) =>
  useCallback<any>((...args: A) => runInAction<T>(name, () => cb(...args)), []) as UseAction<A, T>

/*
 * shortcut reaction creator with rewired naming arg
 */
export type UseReaction = <T>(
  name: string,
  expression: (r: IReactionPublic) => T,
  effect: (arg: T, r: IReactionPublic) => void,
  opts?: IReactionOptions,
) => IReactionDisposer

export const useReaction: UseReaction = (name, expression, effect, opts) =>
  useDisposable(() => reaction(expression, effect, { name, ...opts }))
