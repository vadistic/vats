import { ElementTypeOr, sortByGetter, SortDirection, StringIndex, tuplify } from '@vats/utils'
import { reaction, set } from 'mobx'
import { StoreConfig, StoreGraphqlRoots } from './types'

interface RootsProps {
  graphqlRoots: StoreGraphqlRoots
}

interface SortProps {
  sortDirection: SortDirection
  sortBy: any
}

/*
 * merges provided state sortBy value with automatic key sorts
 */
export type SortByUnion<State, Data> =
  | (State extends { sortBy: infer V } ? V : never)
  | keyof NonNullable<ElementTypeOr<StringIndex<Data>[keyof Data]>>

export interface StoreSortProps<State, Data, Config> {
  state: State
  data: Data
  config: Config
}

const getSortedValue = (value: any, sortBy: string, sortDirection: SortDirection) => {
  if (
    // sorting off
    !sortBy ||
    // invalid/custom sortBy
    !(sortBy in value[0])
  ) {
    return
  }

  // now tricky part... I cannot know what kind of value prop has
  let getterType: undefined | 'count' | 'value'

  for (const el of value) {
    if (el[sortBy] !== null) {
      getterType = Array.isArray(el[sortBy]) ? 'count' : 'value'
      break
    }
  }

  // something wrong with sortBy by or all elements has null prop value
  if (!getterType) {
    return
  }

  const getter = (item: any) => (getterType === 'value' ? item[sortBy] : item[sortBy].length)

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

      if (!value || !Array.isArray(value)) {
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

      if (!value || !Array.isArray(value)) {
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
