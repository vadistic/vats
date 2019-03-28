import { tuplify } from '@vats/utils'
import { action, reaction } from 'mobx'
import { sortApply, sortValue } from '../utils'
import { StoreTyping } from './create'
import { StoreHelper } from './helper'
import { SortProps, StoreObservables } from './observables'

export interface CreateStoreSortProps<Typing extends StoreTyping> {
  observables: StoreObservables<Typing, 'multi'>
  helper: StoreHelper<Typing>
}

export type StoreSort = ReturnType<typeof createStoreSort>

export const createStoreSort = <Typing extends StoreTyping>({
  helper,
  observables,
}: CreateStoreSortProps<Typing>) => {
  const executeSort = ({ sortBy, sortDirection }: SortProps) => {
    const value = observables.value.get()

    if (!Array.isArray(value) || typeof sortBy !== 'string') {
      return
    }

    const sortedValue = sortValue(value, sortBy, sortDirection)

    if (!sortedValue) {
      return
    }

    sortApply(observables.data, observables.config.roots.query, sortBy, sortDirection)
  }

  const sortChangeReaction = reaction(
    () => tuplify([observables.state.sortBy, observables.state.sortDirection]),
    ([sortBy, sortDirection]) => {
      if (helper.getValue().length === 0) {
        return
      }

      executeSort({ sortBy, sortDirection, keepSorted: observables.state.keepSorted })
    },
    { name: helper.actionName('sort change') },
  )

  const sortDataReaction = reaction(
    () => tuplify([observables.state.keepSorted, helper.getValue().length]),
    ([keepSorted, length]) => {
      if (!keepSorted || length === 0) {
        return
      }

      executeSort({
        sortBy: observables.state.sortBy,
        sortDirection: observables.state.sortDirection,
        keepSorted,
      })
    },
    { name: helper.actionName('sort data') },
  )

  const sort = action(helper.actionName('sort'), (by?: Partial<SortProps>) => {
    if (by) {
      if (by.sortBy) {
        observables.state.sortBy = by.sortBy
      }
      if (by.sortDirection) {
        observables.state.sortDirection = by.sortDirection
      }
      // reaction will handle the rest
    }

    if (!by) {
      const keepSorted = observables.state.keepSorted
      executeSort({
        sortBy: observables.state.sortBy,
        sortDirection: observables.state.sortDirection,
        keepSorted,
      })
      return
    }
  })

  const init = () => {
    /* noop */
  }

  const dispose = () => {
    sortChangeReaction()
    sortDataReaction()
  }

  const props = {
    sort,
  }

  return { props, init, dispose }
}
