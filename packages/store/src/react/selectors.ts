import { DeepPartial, Exact } from '@vats/utils'
import { useMemo, useRef } from 'react'

type Resolver<R, D extends any[]> = (...deps: D) => R

export interface Selector {
  <R, D extends [any]>(r: Resolver<R, D>): (...deps: D) => R
  <R, D extends [any, any]>(r: Resolver<R, D>): (...deps: D) => R
  <R, D extends [any, any, any]>(r: Resolver<R, D>): (...deps: D) => R
  <R, D extends [any, any, any]>(r: Resolver<R, D>): (...deps: D) => R
  <R, D extends [any, any, any, any]>(r: Resolver<R, D>): (...deps: D) => R
  <R, D extends [any, any, any, any, any]>(r: Resolver<R, D>): (...deps: D) => R
}

/**
 * standard simple selector
 */
export const createSelector: Selector = <R, D extends any[]>(resolver: Resolver<R, D>) => {
  const selector = (...deps: D) => useMemo(() => resolver(...deps), deps)

  return selector
}

/**
 * selector for slicing set of simmilar bigger interfaces into memoized (should be great for graphql data)
 *
 * main goals:
 * - memoize by partial keys of input, not input itself
 * - allow any input type that matches partial shape
 * - reusablility for nested selector composition or use with mobx computed
 *
 */

export const createPartialSelector = <
  Obj,
  // partial can be deep & must be exact (for error checking)
  Partial extends Exact<Partial, DeepPartial<Obj>>,
  Derived
>(
  partial: (obj: Obj) => Partial,
  derived?: (obj: Partial) => Derived,
) => (input: Partial) => ({
  ...partial((input as unknown) as Obj),
  ...(derived ? derived(input) : undefined),
})

export const usePartialSelector = <I, R>(selector: (input: I) => R) => (input: I) => {
  // it's a duplication but hooks deps must be unchanged
  const keys = useRef<string[]>(
    Object.keys(selector(input)).filter(key => (input as any)[key] === undefined),
  )

  const memo = useMemo(() => selector(input), [...pickValues(input, keys.current)])

  return memo
}

const pickValues = (input: any, keys: string[]) =>
  keys.reduce((acc, key) => [...acc, input[key]], [] as any[])
