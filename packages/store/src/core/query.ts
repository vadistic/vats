import { deepEqual } from '@vats/utils'
import ApolloClient, { ApolloQueryResult, ObservableQuery } from 'apollo-client'
import { action, reaction, set, toJS } from 'mobx'
import { orderedApply } from '../utils'
import { StoreTyping } from './create'
import { StoreHelper } from './helper'
import { StoreObservables, StoreStatus } from './observables'

export interface CreateStoreQueryProps<Typing extends StoreTyping> {
  observables: StoreObservables<Typing, any>
  client: ApolloClient<any>
  helper: StoreHelper<Typing>
}

export const createStoreQuery = <Typing extends StoreTyping>({
  client,
  helper,
  observables,
}: CreateStoreQueryProps<Typing>) => {
  let query: ObservableQuery<Typing['data'], Typing['variables']> | undefined

  let subscription: ZenObservable.Subscription | undefined

  const fetch = action(helper.actionName('fetch'), () => {
    observables.meta.status = StoreStatus.loading

    if (!query) {
      query = client.watchQuery<Typing['data'], Typing['variables']>({
        variables: toJS(observables.variables),
        query: observables.config.graphql.query,
      })

      subscription = query.subscribe(res => {
        handleResponse(res)
      })
    }
  })

  /**
   * refetch
   * in background, with deepCompare of variables
   */
  const refetch = action(helper.actionName('refetch'), (nextVariables?: Typing['variables']) => {
    // rest will be handled by variables reaction + response subscription
    if (query && nextVariables) {
      set(observables.variables, nextVariables)
    }

    if (query && !nextVariables) {
      // rest will be handled by response subscription
      query.refetch()
    }

    // fetch if query was not init
    if (!query) {
      fetch()
    }
  })

  /**
   * handle response from apollo observable
   */
  const handleResponse = action(
    helper.actionName('handle response'),
    (res: ApolloQueryResult<Typing['data']>) => {
      const statusMap = {
        1: StoreStatus.loading,
        2: StoreStatus.refetch,
        3: StoreStatus.refetch,
        4: StoreStatus.refetch,
        6: StoreStatus.pool,
        7: StoreStatus.ready,
        8: StoreStatus.error,
      }

      if (observables.meta.status !== statusMap[res.networkStatus]) {
        observables.meta.status = statusMap[res.networkStatus]
      }

      if (res.data) {
        console.log('RES', res.data)
        orderedApply(observables.data, res.data)
      }

      // ! resets errors - maybe it should not
      if (res.errors || observables.meta.errors.length !== 0) {
        observables.meta.errors = res.errors ? [...res.errors] : []
      }
    },
  )

  /**
   * react with refetch on variable changes
   */
  const variablesChangeReaction = reaction(
    () => toJS(observables.variables),
    // ! remember to keep proxies out of apollo
    nextVariables => {
      if (
        observables.meta.status === StoreStatus.init ||
        observables.meta.status === StoreStatus.new ||
        !query
      ) {
        return
      }

      const shouldRefetch = !deepEqual(nextVariables, query.variables)

      if (shouldRefetch) {
        observables.meta.status = StoreStatus.refetch
        query.refetch(nextVariables)
      }
    },
    {
      name: helper.actionName('variables change'),
    },
  )

  const init = () => {
    if (observables.config.autoFetch) {
      fetch()
    }
  }

  const dispose = () => {
    if (subscription) {
      subscription.unsubscribe()
    }

    if (variablesChangeReaction) {
      variablesChangeReaction()
    }
  }

  const props = {
    fetch,
    refetch,
    query,
  }

  return {
    props,
    init,
    dispose,
  }
}
