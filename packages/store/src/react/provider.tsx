import { AnyFunction, shallowEqual } from '@vats/utils'
import { runInAction } from 'mobx'
import React, { useContext, useEffect, useRef } from 'react'
import { Store } from '../core'
import { ApolloContext } from './apollo-context'

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

  const instanceRef = useRef<Store | null>(null)
  const prevPropsRef = useRef<any | null>(null)

  // init
  if (!instanceRef.current) {
    prevPropsRef.current = createStoreProps
    runInAction(`StoreProvider: ${createStore.name}`, () => {
      instanceRef.current = createStore({ ...createStoreProps, client })
    })
  }

  // restarter
  if (
    instanceRef.current &&
    instanceRef.current.config.autoRestart &&
    !shallowEqual(prevPropsRef.current, createStoreProps)
  ) {
    console.log(instanceRef.current, instanceRef.current.config.autoRestart)
    instanceRef.current.dispose()

    runInAction(`${createStore.name} restart`, () => {
      instanceRef.current = createStore({ ...createStoreProps, client })
    })

    instanceRef.current.init()
  }

  // init/cleanup
  useEffect(() => {
    if (instanceRef.current) {
      instanceRef.current.init()
    }

    return () => {
      if (instanceRef.current) {
        instanceRef.current.dispose()
      }
    }
  }, [])

  return <Context.Provider value={instanceRef.current} children={children} />
}
