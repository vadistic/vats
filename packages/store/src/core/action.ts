import { runInAction } from 'mobx'
import { useCallback } from 'react'
import { StoreTyping } from './create'
import { StoreHelper } from './helper'
import { StoreObservables } from './observables'

export interface CreateStoreActionProps<Typing extends StoreTyping> {
  observables: StoreObservables<Typing, any>
  helper: StoreHelper<Typing>
}

export const createStoreAction = <Typing extends StoreTyping>({
  observables,
  helper,
}: CreateStoreActionProps<Typing>) => {
  const run = <T>(name: string, fn: () => T) => runInAction(helper.actionName(name), fn)

  // third action helper?
  const action = <A extends any[], T>(name: string, cb: (...args: A) => T, deps: any[] = []) =>
    useCallback<any>(
      (...args: A) => runInAction<T>(helper.actionName(name), () => cb(...args)),
      deps,
    ) as (...args: A) => T

  return {
    props: {
      run,
      action,
    },
  }
}
