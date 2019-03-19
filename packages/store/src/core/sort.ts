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

  const sortReaction = reaction(
    () =>
      tuplify([
        observables.state.sortBy,
        observables.state.sortDirection,
        (observables.data[observables.config.roots.query] as any[]).length,
      ]),
    ([sortBy, sortDirection]) => {
      executeSort({ sortBy, sortDirection })
    },
    { name: helper.actionName('sort change') },
  )

  const sort = action(helper.actionName('sort'), (by?: Partial<SortProps>) => {
    if (!by) {
      executeSort({
        sortBy: observables.state.sortBy,
        sortDirection: observables.state.sortDirection,
      })
      return
    }

    // reaction will handle the rest
    if (by.sortBy) {
      observables.state.sortBy = by.sortBy
    }
    if (by.sortDirection) {
      observables.state.sortDirection = by.sortDirection
    }
  })

  const init = () => {
    /* noop */
  }

  const dispose = () => {
    sortReaction()
  }

  const props = {
    sort,
  }

  return { props, init, dispose }
}
