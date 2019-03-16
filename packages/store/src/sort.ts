import {
  reverseLoPath,
  sortByGetter,
  SortDirection,
  StringIndex,
  tryGetIn,
  tuplify,
} from '@vats/utils'
import { reaction, set } from 'mobx'
import { StoreConfig, StoreGraphqlRoots } from './types'

interface RootsProps {
  graphqlRoots: StoreGraphqlRoots
}

interface SortProps {
  sortDirection: SortDirection
  sortBy: unknown
}

export interface StoreSortProps<State, Data, Config> {
  state: State
  data: Data
  config: Config
}

const getSortedValue = (value: any, sortBy: string, sortDirection: SortDirection) => {
  const sortByPath = reverseLoPath(sortBy)

  // skip on non-nested sortBy strings that does not match value shape
  if (sortByPath[0] === sortBy && !(sortBy in value[0])) {
    return
  }

  // now the tricky part... I cannot know what kind of value prop has
  // I'll loop over data till some value is not null/ undefined to check
  let getterType: undefined | 'count' | 'value'

  for (const el of value) {
    const select = tryGetIn(el, ...sortByPath)

    if (select) {
      if (Array.isArray(select)) {
        getterType = 'count'
        break
      }

      // todo add date?
      if (typeof select === 'number' || typeof select === 'boolean' || typeof select === 'string') {
        getterType = 'value'
        break
      }

      console.error('invalid sortBy value')
      return
    }
  }

  // geter return value / length or null
  const getter = (item: any) => {
    const select = tryGetIn(item, ...sortByPath)

    if (select && getterType === 'value') {
      return select
    }

    if (select && Array.isArray(select) && getterType === 'count') {
      return select.length
    }

    return null
  }

  return sortByGetter(value, sortDirection, getter)
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

      const sortedValue = getSortedValue(value, sortBy, sortDirection)

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

      const sortedValue = getSortedValue(value, state.sortBy, state.sortDirection)

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
    { name: `${config.name}: sort data` },
  )

  const dispose = () => {
    sortByReaction()
    sortDataReaction()
  }

  return { dispose }
}
