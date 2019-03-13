import { AnyFunction } from '@vats/utils'
import { runInAction } from 'mobx'
import React, { useContext, useEffect, useMemo } from 'react'
import { ApolloContext } from './react-apollo'
import { StoreStatus } from './store'
import { StoreValue } from './types'

export interface StoreProviderProps {
  context: React.Context<any>
  createStore: AnyFunction
  createStoreProps?: any
  children: React.ReactNode
}
/*
 * Observer here seem unnecesary and increase init time ~3x
 */
export const StoreProvider = ({
  context: Context,
  createStore,
  createStoreProps,
  children,
}: StoreProviderProps) => {
  const client = useContext(ApolloContext)

  /*
   * theoretically useMemo() may be unstable in future
   * but it seems the best hooks to keep store instace,
   * because ref as auto-call function run on every render
   * and I want to keep store init in action
   *
   * also, garbage collection would not hurt, should be fine
   */

  let instance = useMemo<StoreValue>(() => {
    return runInAction(`StoreProvider: ${createStore.name}`, () => {
      return createStore({ ...createStoreProps, client })
    })
  }, [])

  // restarter
  useMemo(() => {
    if (instance.config.restartOnInitChange && instance.meta.status !== StoreStatus.init) {
      instance.dispose()

      instance = runInAction(`${createStore.name} restart`, () => {
        return createStore({ ...createStoreProps, client })
      })

      instance.init()
    }
  }, [createStoreProps])

  useEffect(() => {
    instance.init()

    return () => {
      instance.dispose()
    }
  }, [])

  return <Context.Provider value={instance} children={children} />
}
