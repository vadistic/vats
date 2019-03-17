import { AnyFunction, shallowEqual } from '@vats/utils'
import { runInAction } from 'mobx'
import React, { useContext, useEffect, useRef } from 'react'
import { ApolloContext } from './apollo-context'
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

  const instanceRef = useRef<StoreValue | null>(null)
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
    instanceRef.current.config.restartOnInitChange &&
    !shallowEqual(prevPropsRef.current, createStoreProps)
  ) {
    instanceRef.current.dispose()

    runInAction(`${createStore.name} restart`, () => {
      instanceRef.current = createStore({ ...createStoreProps, client })
    })

    instanceRef.current.init()
  }

  // init/cleanup
  useEffect(() => {
    instanceRef.current.init()

    return () => {
      instanceRef.current.dispose()
    }
  }, [])

  return <Context.Provider value={instanceRef.current} children={children} />
}
