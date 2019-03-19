import { Omit, shallowEqual } from '@vats/utils'
import { runInAction } from 'mobx'
import { useContext, useEffect, useRef } from 'react'
import { Store, StoreProps } from '../core'
import { ApolloContext } from './apollo-context'
/**
 * Create store instance, reinitialised on deps change
 * DO NOT USE INSIDE OBSERVER (or action will be hidden in UI observer reaction)
 */
export const useStore = <S extends Store, Args extends StoreProps>(
  factory: (args: Args) => S,
  args: Omit<Args, 'client'>,
  deps: any[] = [],
) => {
  const prevDepsRef = useRef<any[]>([])
  const storeRef = useRef<S | null>(null)
  const client = useContext(ApolloContext)

  if (
    !storeRef.current ||
    (storeRef.current.config.autoRestart && !shallowEqual(prevDepsRef.current, deps))
  ) {
    // dispose on reinit
    if (storeRef.current) {
      storeRef.current.dispose()
    }

    // init in action with apollo client
    runInAction(`StoreProvider: ${factory.name} ${storeRef.current ? 'restart' : 'init'}`, () => {
      storeRef.current = factory({ client, ...args } as Args)
    })

    prevDepsRef.current = deps

    // init
    if (storeRef.current) {
      storeRef.current.init()
    }
  }

  // dispose on unmount
  useEffect(
    () => () => {
      if (storeRef.current) {
        storeRef.current.dispose()
      }
    },
    [],
  )

  return storeRef.current as S
}
