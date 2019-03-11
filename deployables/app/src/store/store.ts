import { ApolloQueryResult, ObservableQuery } from 'apollo-client'
import { diff, PreFilterFunction } from 'deep-diff'
import { GraphQLError } from 'graphql'
import { action, observable, reaction, runInAction, toJS } from 'mobx'
import { applyDiff, updateDiff } from './diff'
import { getGraphqlRoots } from './graphql'
import {
  GraphqlTyping,
  StoreConfig,
  StoreGraphqlRoots,
  StoreObservables,
  StoreProps,
  TQueryVariables,
} from './types'

export enum StoreStatus {
  init = 'INIT',
  loading = 'LOADING',
  refetch = 'REFETCH',
  ready = 'READY',
  error = 'ERROR',
  pool = 'POOL',
}

export const createStore = <State, Data, Variables extends TQueryVariables = TQueryVariables>({
  config: _config,
  data: _data,
  state: _state,
  variables: _variables,
}: StoreObservables<State, Data, Variables>) => <Graphql extends GraphqlTyping = GraphqlTyping>({
  client,
}: StoreProps) => {
  // ! make sure not not use them as not observable...
  const _meta = {
    status: StoreStatus.init,
    errors: [] as GraphQLError[],
  }

  const defaultConfig: Partial<StoreConfig> & { graphqlRoots: StoreGraphqlRoots } = {
    autoFetch: true,
    restartOnInitChange: false,
    graphqlRoots: getGraphqlRoots(_config.graphql),
  }

  getGraphqlRoots(_config.graphql)

  const inital = {
    config: {
      ...defaultConfig,
      ..._config,
    },
    state: _state,
    data: _data,
    variables: _variables,
    meta: _meta,
  }

  const store = observable(
    inital,
    {
      config: observable.shallow,
    },
    {
      name: _config.name,
    },
  )

  let query: ObservableQuery<Data, Variables> = undefined as any

  let subscription: ZenObservable.Subscription = undefined as any

  const fetch = () => {
    runInAction(`${store.config.name}: fetch`, () => {
      store.meta.status = StoreStatus.loading
    })

    if (!query) {
      query = client.watchQuery<Data, Variables>({
        variables: toJS(store.variables),
        query: store.config.graphql.query,
      })

      subscription = query.subscribe(res => {
        response(res)
      })
    }
  }

  const refetch = action(`${store.config.name}: refetch`, (nextVariables?: Variables) => {
    const variableChanges = applyDiff(store.variables, nextVariables)

    if (variableChanges) {
      store.meta.status = StoreStatus.refetch
      query.refetch(toJS(store.variables))
    }
  })

  const update = action(`${store.config.name}: update`, (updateData: never) => {
    if (!store.config.graphql.updateMutation) {
      throw Error(`${name}: updateMutation is missing`)
    }

    return client.mutate({
      variables: { where: toJS(store.variables.where), data: updateData },
      mutation: store.config.graphql.updateMutation,
    })
  })

  const autoUpdate = action(`${store.config.name}: auto update`, (nextData: Data) => {
    if (!store.config.graphql.updateMutation) {
      throw Error(`${name}: updateMutation is missing`)
    }

    const { updateData } = updateDiff(
      Object.values(store.data)[0],
      Object.values(nextData)[0],
      store.config.relations,
    )

    if (!updateData) {
      return
    }

    const prev = toJS(store.data)

    // no prefilter here because I want local data in optimsitic update
    applyDiff(store.data, nextData)

    client
      .mutate({
        variables: { where: toJS(store.variables.where), data: updateData },
        mutation: store.config.graphql.updateMutation,
      })
      .then(res => {
        if (res.errors) {
          handleAutoUpdateError(prev)
        }
      })
  })

  const handleAutoUpdateError = action(
    `${store.config.name}: handle autoUpdate error`,
    (prev: Data) => {
      applyDiff(store.data, prev)
    },
  )

  // reactions

  const response = action(`${store.config.name}: response`, (res: ApolloQueryResult<Data>) => {
    const statusMap = {
      1: StoreStatus.loading,
      2: StoreStatus.refetch,
      3: StoreStatus.refetch,
      4: StoreStatus.refetch,
      6: StoreStatus.pool,
      7: StoreStatus.ready,
      8: StoreStatus.error,
    }

    if (store.meta.status !== statusMap[res.networkStatus]) {
      store.meta.status = statusMap[res.networkStatus]
    }

    /*
     * diff is fine
     * applying takes mostly ~10ms and potentialy saves a lot
     *
     * modyfing mobx tree is slow...
     */

    if (res.data) {
      applyDiff(store.data, res.data, dataPrefilter)
    }

    if (res.errors) {
      store.meta.errors = [...res.errors]
    }
  })

  const variablesChange = {
    dispose: reaction(
      () => toJS(store.variables),
      // ! remember to keep proxies out of apollo
      variables => {
        if (store.meta.status === StoreStatus.init) {
          return
        }

        const changes = diff(variables, query.variables)

        if (changes) {
          store.meta.status = StoreStatus.refetch
          query.refetch(toJS(variables))
        }
      },
      {
        name: `${store.config.name} variables change`,
      },
    ),
  }

  // init
  const init = () => {
    if (store.config.autoFetch) {
      fetch()
    }
  }

  // cleanup
  const dispose = () => {
    if (subscription) {
      subscription.unsubscribe()
    }

    if (variablesChange) {
      variablesChange.dispose()
    }
  }

  // TODO: test what happen on delete etc.
  const omitFields = ['local', 'createdAt', 'updatedAt']
  const dataPrefilter: PreFilterFunction = (path, key) => {
    return omitFields.includes(key)
  }

  return { ...store, client, query, fetch, refetch, update, autoUpdate, init, dispose }
}
