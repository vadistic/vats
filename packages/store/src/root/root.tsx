import { StringMap } from '@vats/utils'
import { runInAction } from 'mobx'
import { observer, useObservable } from 'mobx-react-lite'
import React from 'react'
import { Store } from '../core'

type StoresMap = StringMap<Store>

export interface RootStore {
  stores: StoresMap
  register: <S extends Store>(store: S) => void
  unregister: <S extends Store>(store: S) => void
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
