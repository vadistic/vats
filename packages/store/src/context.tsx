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
 * ! Depreciated in favour of useState hook
 */
export const StoreProvider = ({
  context: Context,
  createStore,
  createStoreProps,
  children,
}: StoreProviderProps) => {
  const client = useContext(ApolloContext)

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
