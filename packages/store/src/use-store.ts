import { Omit, shallowEqual } from '@vats/utils'
import { runInAction } from 'mobx'
import { useContext, useEffect, useRef } from 'react'
import { ApolloContext } from './react-apollo'
import { StoreProps, StoreValue } from './types'
/**
 * Create store instance, reinitialised on deps change
 * DO NOT USE INSIDE OBSERVER (or action will be hidden in UI observer reaction)
 */
export const useStore = <Store extends StoreValue, Args extends StoreProps>(
  factory: (args: Args) => Store,
  args: Omit<Args, 'client'>,
  deps: any[] = [],
): Store => {
  const prevDepsRef = useRef<any[]>([])
  const storeRef = useRef<Store | null>(null)
  const client = useContext(ApolloContext)

  if (!storeRef.current || !shallowEqual(prevDepsRef.current, deps)) {
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

  return storeRef.current as Store
}
