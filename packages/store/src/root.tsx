import { StringMap } from '@vats/utils'
import { runInAction } from 'mobx'
import { observer, useObservable } from 'mobx-react-lite'
import React from 'react'
import { StoreValue } from './types'

type StoresMap = StringMap<StoreValue>

export interface RootStore {
  stores: StoresMap
  register: <S extends StoreValue>(store: S) => void
  unregister: <S extends StoreValue>(store: S) => void
}

/*
 * TODO: make sure it's not copying whole tree
 */
export const RootStoreContext = React.createContext({} as RootStore)

export const RootStoreProvider: React.FC = observer(({ children }) => {
  const stores = useObservable<StoresMap>({})

  const register: RootStore['register'] = store => {
    runInAction(`RootStore/${store.config.name}: register`, () => {
      if (stores[store.config.name] === undefined) {
        stores[store.config.name] = store
      } else {
        console.error('Duplicate register attempt', stores, store)
      }
    })
  }

  const unregister: RootStore['unregister'] = store => {
    runInAction(`RootStore/${store.config.name}: unregister`, () => {
      delete stores[store.config.name]
    })
  }

  return <RootStoreContext.Provider value={{ stores, register, unregister }} children={children} />
})
