import { ApolloQueryResult, ObservableQuery } from 'apollo-client'
import { diff, PreFilterFunction } from 'deep-diff'
import { GraphQLError } from 'graphql'
import { action, computed, observable, reaction, runInAction, set, toJS } from 'mobx'
import { updateDiff } from './diff'
import { getGraphqlRoots } from './graphql'
import { applyOrdered } from './ordered'
import { StoreSortDirection } from './sort'
import { storeSortReaction } from './sort-reaction'
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
    sortDirection: StoreSortDirection.ascending,
    sortBy: undefined as string | undefined,
  }

  /* Separate observables for safe destructuring
   * and better control over shallowness
   *
   * Multi-queries are treated as observable array of immutable objects
   * Single queries are treated as single observable object as well (to unify it, it also could be shallow)
   */

  const getName = (name: string) => _config.name + '.' + name
  const isSingle = !Array.isArray(((_data as unknown) as SafeData<Data>)[graphqlRoots.query])

  const state = observable({ ...defaultState, ..._state }, undefined, {
    name: getName('state'),
    defaultDecorator: observable.deep,
  }) as State

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
    defaultDecorator: isSingle ? observable.ref : observable.shallow,
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
  const sortReaction =
    !isSingle &&
    storeSortReaction({
      config,
      data,
      state: (state as unknown) as typeof defaultState,
    })

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
   * refetch
   * in background, with deepCompare of variables
   */
  const refetch = action(
    `${config.name}: refetch execute`,
    (nextVariables?: Variables, compare?: boolean) => {
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
   * run create mutation
   */
  const createMutation = action(
    `${config.name}: create mutation`,
    async (
      createVariablesData: Graphql['createVariables']['data'],
      optimistic?: Partial<Value>,
    ) => {
      if (!config.graphql.createMutation) {
        throw Error(`${name}: createMutation is missing`)
      }

      if (optimistic) {
        set(data, graphqlRoots.query, { ...value.get(), ...optimistic })
      }

      const res = await client.mutate<Graphql['createMutation'], Graphql['createVariables']>({
        variables: { data: createVariablesData },
        mutation: config.graphql.createMutation,
      })

      if (res.data) {
        if (!isSingle) {
          refetch()
        }
        return res.data
      }

      if (res.errors) {
        meta.status = StoreStatus.error
        meta.errors = [...res.errors]
      }
    },
  )

  /**
   * run update mutation
   */
  const updateMutation = action(
    `${config.name}: update mutation`,
    async (
      updateVariablesData: Graphql['updateVariables']['data'],
      optimistic?: Partial<Value>,
    ) => {
      if (!config.graphql.updateMutation) {
        throw Error(`${name}: updateMutation is missing`)
      }

      if (optimistic) {
        set(data, graphqlRoots.query, { ...value.get(), ...optimistic })
      }

      const res = await client.mutate<Graphql['updateMutation'], Graphql['updateVariables']>({
        variables: { where: toJS(variables.where), data: updateVariablesData },
        mutation: config.graphql.updateMutation,
      })

      if (res.data) {
        if (!isSingle) {
          refetch()
        }
        return res.data
      }

      if (res.errors) {
        meta.status = StoreStatus.error
        meta.errors = [...res.errors]
      }
    },
  )

  /**
   * run delete mutation
   * single type deletes itself, multi query needs variables!
   */
  const deleteMutation = action(
    `${config.name}: delete mutation`,
    async (deleteVariablesWhere?: { id: string } | { index: number }) => {
      if (!config.graphql.deleteMutation) {
        throw Error(`${config.name}: deleteMutation is missing`)
      }

      let id: string | undefined

      // determine id

      if (isSingle) {
        id = variables.where.id
      }

      if (!isSingle && deleteVariablesWhere && 'id' in deleteVariablesWhere) {
        id = deleteVariablesWhere.id
      }

      if (!isSingle && deleteVariablesWhere && 'index' in deleteVariablesWhere) {
        id = (value.get() as any)[deleteVariablesWhere.index].id
      }

      if (!id) {
        throw Error(`${config.name} deleteMutation is missing id`)
      }

      // optimistic
      if (!isSingle) {
        data[graphqlRoots.query] = (data[graphqlRoots.query] as any[]).filter(
          node => node.id !== id,
        )
      }

      const res = await client.mutate<Graphql['deleteMutation'], Graphql['deleteVariables']>({
        variables: { where: { id } },
        mutation: config.graphql.deleteMutation,
      })

      if (res.data) {
        return res.data
      }

      if (res.errors) {
        console.log(res.errors)
        meta.status = StoreStatus.error
        meta.errors = [...res.errors]
      }
    },
  )

  /**
   * run update mutation by providing new query data value
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
        applyOrdered(data, res.data)
      }

      // ! resets errors - maybe it should not
      meta.errors = res.errors ? [...res.errors] : []
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
    create: createMutation,
    update: updateMutation,
    delete: deleteMutation,
    autoUpdate,
    init,
    dispose,
  }
}
