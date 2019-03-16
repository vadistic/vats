import { Omit, SortDirection } from '@vats/utils'
import { ApolloQueryResult, ObservableQuery } from 'apollo-client'
import { diff, PreFilterFunction } from 'deep-diff'
import { GraphQLError } from 'graphql'
import { action, computed, observable, reaction, runInAction, set, toJS } from 'mobx'
import { updateDiff } from './diff'
import { applyShallowOrdered } from './diff/ordered'
import { getGraphqlRoots } from './graphql'
import { SortByUnion, storeSortReaction } from './sort'
import {
  GraphqlTyping,
  SafeData,
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

export const createStore = <
  State,
  Data,
  Variables extends TQueryVariables = TQueryVariables,
  Value = SafeData<Data>[keyof Data]
>({
  config: _config,
  data: _data,
  state: _state,
  variables: _variables,
}: StoreObservables<State, Data, Variables>) => <Graphql extends GraphqlTyping = GraphqlTyping>({
  client,
}: StoreProps) => {
  const _meta = {
    status: StoreStatus.init,
    errors: [] as GraphQLError[],
  }

  const graphqlRoots = getGraphqlRoots(_config.graphql)

  const defaultConfig: Partial<StoreConfig> & { graphqlRoots: StoreGraphqlRoots } = {
    autoFetch: true,
    graphqlRoots,
  }

  const defaultState = {
    sortDirection: SortDirection.ASCENDING,
    sortBy: undefined as SortByUnion<State, Data> | undefined,
  }

  /* Separate observables for safe destructuring
   * and better control over shallowness
   *
   * Multi-queries are treated as observable array of immutable objects
   * Single queries are treated as single observable object as well (to unify it, it also could be shallow)
   */

  const getName = (name: string) => _config.name + '.' + name
  const isSingleQuery = !Array.isArray(((_data as unknown) as SafeData<Data>)[graphqlRoots.query])

  const state = (observable({ ...defaultState, ..._state }, undefined, {
    name: getName('state'),
    defaultDecorator: observable.deep,
  }) as unknown) as Omit<State, keyof typeof defaultState> & typeof defaultState

  const meta = observable(_meta, undefined, {
    name: getName('meta'),
    defaultDecorator: observable.deep,
  })

  const variables = observable(_variables, undefined, {
    name: getName('variables'),
    defaultDecorator: observable.deep,
  })

  const config = observable({ ...defaultConfig, ..._config }, undefined, {
    name: getName('config'),
    defaultDecorator: observable.ref,
  })

  const data = observable((_data as unknown) as SafeData<Data>, undefined, {
    name: getName('data'),
    defaultDecorator: isSingleQuery ? observable.ref : observable.shallow,
  })

  const observables = {
    state,
    meta,
    variables,
    config,
    data,
  }

  const value = computed(() => data[graphqlRoots.query] as Value, { name: getName('value') })

  // sorting reaction only on 'multi' stores
  const sortReaction = !isSingleQuery && storeSortReaction({ config, data, state })

  let query: ObservableQuery<SafeData<Data>, Variables> = undefined as any

  let subscription: ZenObservable.Subscription = undefined as any

  const fetch = () => {
    runInAction(`${config.name}: fetch`, () => {
      meta.status = StoreStatus.loading
    })

    if (!query) {
      query = client.watchQuery<SafeData<Data>, Variables>({
        variables: toJS(variables),
        query: config.graphql.query,
      })

      subscription = query.subscribe(res => {
        handleResponse(res)
      })
    }
  }

  /**
   * Refetch in background, possibly with deepCompare of variables
   */
  const refetch = action(
    `${config.name}: refetch execute`,
    (nextVariables?: Variables, compare?: boolean) => {
      //
      if (nextVariables) {
        // will be handled by variables reaction + response reaction
        set(variables, nextVariables)
      } else {
        // will be handled by response reaction
        query.refetch()
      }
    },
  )

  /**
   * Run update mutation
   */
  const update = action(
    `${config.name}: update`,
    (updateData: Graphql['updateData'], optimistic?: Partial<Value>) => {
      if (!config.graphql.updateMutation) {
        throw Error(`${name}: updateMutation is missing`)
      }

      if (optimistic) {
        set(data, graphqlRoots.query, { ...value.get(), ...optimistic })
      }

      return client.mutate({
        variables: { where: toJS(variables.where), data: updateData },
        mutation: config.graphql.updateMutation,
      })
    },
  )

  /**
   * Run update mutation by providing new query data value
   */
  const autoUpdate = action(`${config.name}: auto update`, (nextValue: Partial<Value>) => {
    if (!config.graphql.updateMutation) {
      throw Error(`${name}: updateMutation is missing`)
    }

    const prevValue = value.get()

    // get nextValue keys from prevValue
    const prevValuePartial = Object.keys(nextValue).reduce(
      (acc, key) => ({ ...acc, [key]: (prevValue as any)[key] }),
      {} as Partial<Value>,
    )

    const { updateData } = updateDiff(prevValuePartial, nextValue, {
      map: config.relations,
      prefilter: dataPrefilter,
    })

    if (!updateData) {
      return
    }

    set(data, graphqlRoots.query, { ...prevValue, ...nextValue })

    client
      .mutate({
        variables: { where: toJS(variables.where), data: updateData },
        mutation: config.graphql.updateMutation,
      })
      .then(res => {
        // revert optimistic update after error
        if (res.errors) {
          runInAction(`${name}: auto update error`, () => {
            set(data, graphqlRoots.query, prevValue)
          })
        }
      })
  })

  /**
   * handle response from apollo observable
   */
  const handleResponse = action(
    `${config.name}: handle response`,
    (res: ApolloQueryResult<SafeData<Data>>) => {
      const statusMap = {
        1: StoreStatus.loading,
        2: StoreStatus.refetch,
        3: StoreStatus.refetch,
        4: StoreStatus.refetch,
        6: StoreStatus.pool,
        7: StoreStatus.ready,
        8: StoreStatus.error,
      }

      if (meta.status !== statusMap[res.networkStatus]) {
        meta.status = statusMap[res.networkStatus]
      }

      if (res.data) {
        applyShallowOrdered(data, res.data)
      }

      if (res.errors) {
        meta.errors = [...res.errors]
      }
    },
  )

  /**
   * react with refetch on variable changes
   */
  const variablesChange = {
    dispose: reaction(
      () => toJS(variables),
      // ! remember to keep proxies out of apollo
      nextVariables => {
        if (meta.status === StoreStatus.init) {
          return
        }

        const changes = diff(nextVariables, query.variables)

        if (changes) {
          meta.status = StoreStatus.refetch
          query.refetch(nextVariables)
        }
      },
      {
        name: `${config.name} variables change`,
      },
    ),
  }

  /**
   * run inital actions
   * exported as method, because it's faster to run them in effect instead of render
   */
  const init = () => {
    if (config.autoFetch) {
      fetch()
    }
  }

  /**
   * dispose observables
   */
  const dispose = () => {
    if (subscription) {
      subscription.unsubscribe()
    }

    if (variablesChange) {
      variablesChange.dispose()
    }

    if (sortReaction) {
      sortReaction.dispose()
    }
  }

  // TODO: test what happen on delete etc.
  const omitFields = ['createdAt', 'updatedAt']
  const dataPrefilter: PreFilterFunction = (path, key) => {
    return omitFields.includes(key)
  }

  return {
    ...observables,
    value,
    client,
    query,
    fetch,
    refetch,
    update,
    autoUpdate,
    init,
    dispose,
  }
}
