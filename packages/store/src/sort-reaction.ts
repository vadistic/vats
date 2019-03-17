import { StringIndex, tuplify } from '@vats/utils'
import { reaction, set } from 'mobx'
import { sortValue, StoreSortDirection } from './sort'
import { StoreConfig, StoreGraphqlRoots } from './types'

interface RootsProps {
  graphqlRoots: StoreGraphqlRoots
}

interface SortProps {
  sortDirection: StoreSortDirection
  sortBy: unknown
}

export interface StoreSortProps<State, Data, Config> {
  state: State
  data: Data
  config: Config
}

export const storeSortReaction = <
  State extends SortProps,
  Data extends StringIndex<Data>,
  Config extends StoreConfig & RootsProps
>({
  state,
  data,
  config,
}: StoreSortProps<State, Data, Config>) => {
  const sortByReaction = reaction(
    // on data, sortBy or sortDirection change
    () => tuplify([state.sortBy, state.sortDirection]),
    ([sortBy, sortDirection]) => {
      const value = data[config.graphqlRoots.query] as any[]

      if (!value || !Array.isArray(value) || typeof sortBy !== 'string') {
        return
      }

      const sortedValue = sortValue(value, sortBy, sortDirection)

      if (sortedValue) {
        set(data, config.graphqlRoots.query, sortedValue)
      }
    },
    { name: `${config.name}: sort change` },
  )

  const sortDataReaction = reaction(
    // on data, sortBy or sortDirection change
    () => data.length,
    () => {
      const value = data[config.graphqlRoots.query] as any[]

      if (!value || !Array.isArray(value) || typeof state.sortBy !== 'string') {
        return
      }

      const sortedValue = sortValue(value, state.sortBy, state.sortDirection)

      if (!sortedValue) {
        return
      }

      // set data only if elements changed
      for (let i = 0; i < sortedValue.length; i++) {
        if (sortedValue[i] !== value[i]) {
          set(data, config.graphqlRoots.query, sortedValue)
          break
        }
      }
    },
    { name: `${config.name}: sort new data` },
  )

  const dispose = () => {
    sortByReaction()
    sortDataReaction()
  }

  return { dispose }
}
