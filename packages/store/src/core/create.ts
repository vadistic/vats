import { StringMap } from '@vats/utils'
import ApolloClient from 'apollo-client'
import { GraphqlTyping, StoreGraphqlConfig, TQueryVariables } from './graphql-types'
import { createStoreHelper } from './helper'
import { createMultiStoreMutations } from './multi-mutations'
import { createStoreObservables } from './observables'
import { createStoreQuery } from './query'
import { createSingleStoreMutations } from './single-mutations'
import { createStoreSort } from './sort'

export interface StoreInit<State, Meta, Data, Variables> {
  state: State
  meta?: Meta
  data: Data
  variables: Variables
  config: StoreConfig
}

export interface StoreProps {
  client: ApolloClient<any>
}

export interface StoreConfig {
  name: string
  autoFetch?: boolean
  autoRestart?: boolean
  graphql: StoreGraphqlConfig
  relations?: any
  debug?: boolean
}

export type StoreType = 'single' | 'multi'

// would be nice to type value for null chacks and ids
// it's tricky because I want to avoid union or duplicating typings
// leaving here of inline assertions
export interface ObjectWithId {
  id: string
  [index: string]: any
}

export type SingleStoreValue = ObjectWithId | null
export type MultiStoreValue = ObjectWithId[]

export interface StoreTyping<
  State = {},
  Meta = {},
  Data = StringMap<any>,
  Variables extends TQueryVariables = TQueryVariables,
  Value = any
> {
  state: State
  meta: Meta
  data: Data
  variables: Variables
  value: Value
}

// TODO: with helper or some union, nvm... later
export interface Store {
  init: () => void
  dispose: () => void
  config: StoreConfig
  [index: string]: any
}

export const createSingleStore = <
  State = {},
  Meta = {},
  Data = StringMap<any>,
  Variables extends TQueryVariables = TQueryVariables
>(
  initObservables: StoreInit<State, Meta, Data, Variables>,
) => <Value extends SingleStoreValue, Graphql extends GraphqlTyping>({ client }: StoreProps) => {
  // this workaround is to infer some types and provide other
  // then bag it into single interface
  type Typing = StoreTyping<State, Meta, Data, Variables, Value>

  const observables = createStoreObservables<Typing, 'single'>({ initObservables, type: 'single' })

  const helper = createStoreHelper<Typing>({ observables })

  const query = createStoreQuery<Typing>({ observables, client, helper })

  const mutations = createSingleStoreMutations<Typing, Graphql>({ client, helper, observables })

  const init = () => {
    query.init()
  }

  const dispose = () => {
    query.dispose()
  }

  return { ...observables, ...query.props, ...mutations.props, helper, init, dispose }
}

export const createMultiStore = <
  State = {},
  Meta = {},
  Data = StringMap<any>,
  Variables extends TQueryVariables = TQueryVariables
>(
  initObservables: StoreInit<State, Meta, Data, Variables>,
) => <Value extends MultiStoreValue, Graphql extends GraphqlTyping>({ client }: StoreProps) => {
  type Typing = StoreTyping<State, Meta, Data, Variables, Value>

  const observables = createStoreObservables<Typing, 'multi'>({ initObservables, type: 'multi' })

  const helper = createStoreHelper<Typing>({ observables })

  const query = createStoreQuery<Typing>({ observables, client, helper })

  const mutations = createMultiStoreMutations<Typing, Graphql>({ client, helper, observables })

  const sort = createStoreSort<Typing>({ observables, helper })

  const init = () => {
    query.init()
    sort.init()
  }

  const dispose = () => {
    query.dispose()
    sort.dispose()
  }

  return {
    ...observables,
    ...query.props,
    ...mutations.props,
    ...sort.props,
    helper,
    init,
    dispose,
  }
}
