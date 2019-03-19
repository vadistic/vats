import { DeepStringIndex, SortDirection } from '@vats/utils'
import { GraphQLError } from 'graphql'
import { computed, IComputedValue, IObservableObject, observable } from 'mobx'
import { getGraphqlRoots } from '../utils'
import { StoreConfig, StoreType, StoreTyping } from './create'
import { StoreGraphqlConfig } from './graphql-types'

// IN
export interface StoreInitObservables<Typing extends StoreTyping = StoreTyping> {
  state: Typing['state']
  meta?: Typing['meta']
  data: Typing['data']
  variables: Typing['variables']
  config: StoreConfig
}

// Added

export enum StoreStatus {
  init = 'INIT',
  // dirty state with disabled fetching
  new = 'NEW',
  loading = 'LOADING',
  refetch = 'REFETCH',
  ready = 'READY',
  error = 'ERROR',
  pool = 'POOL',
}

/**
 * - remove null from data:{key: (null|Type)[] } since it never appears
 * - make elements/object readonly - corresponding to shallownes of observable
 * - add deep string index signatures to all objects
 */

export type SafeData<Data> = DeepStringIndex<
  {
    [K in keyof Data]: Data[K] extends Array<infer E | null>
      ? Array<Readonly<E>>
      : Readonly<Data[K]>
  }
>

export interface SortProps {
  sortBy: string | undefined
  sortDirection: SortDirection
}

export type GraphqlRoots = { [K in keyof StoreGraphqlConfig]: string }

export interface ConfigProps {
  roots: GraphqlRoots
  type: StoreType
  autoFetch: boolean
  autoRestart: boolean
}

export interface MetaProps {
  status: StoreStatus
  errors: GraphQLError[]
}

// OUT
export interface StoreObservables<Typing extends StoreTyping, Type extends StoreType> {
  state: Typing['state'] & IObservableObject & (Type extends 'multi' ? SortProps : {})
  meta: Typing['meta'] & MetaProps & IObservableObject
  data: SafeData<Typing['data']> & IObservableObject
  variables: Typing['variables'] & IObservableObject
  config: StoreConfig & ConfigProps & IObservableObject
  value: IComputedValue<Typing['value']>
}

export interface CreateStoreObsevablesProps<Typing extends StoreTyping = StoreTyping> {
  initObservables: StoreInitObservables<Typing>
  type: StoreType
}

export const createStoreObservables = <Typing extends StoreTyping, Type extends StoreType>({
  initObservables,
  type,
}: CreateStoreObsevablesProps<Typing>): StoreObservables<Typing, Type> => {
  const observableName = (name: string) => initObservables.config.name + '.' + name

  const initalState = {
    ...(type === 'multi' && {
      sortDirection: SortDirection.ASCENDING,
      sortBy: undefined as string | undefined,
    }),
    ...initObservables.state,
  } as Typing['state'] & IObservableObject & (Type extends 'multi' ? SortProps : {})

  const initalMeta = {
    status: StoreStatus.init,
    errors: [] as GraphQLError[],
    ...initObservables.meta,
  }

  const initalVariables = initObservables.variables

  const initalConfig = {
    autoFetch: true,
    autoRestart: false,
    roots: getGraphqlRoots(initObservables.config.graphql),
    type,
    ...initObservables.config,
  }

  const initalData = (initObservables.data as unknown) as SafeData<Typing['data']>

  const state = observable(initalState, undefined, {
    name: observableName('state'),
    defaultDecorator: observable.deep,
  })

  const meta = observable(initalMeta, undefined, {
    name: observableName('meta'),
    defaultDecorator: observable.deep,
  })

  const variables = observable(initalVariables, undefined, {
    name: observableName('variables'),
    defaultDecorator: observable.deep,
  })

  const config = observable(initalConfig, undefined, {
    name: observableName('config'),
    defaultDecorator: observable.ref,
  })

  const data = observable(initalData, undefined, {
    name: observableName('data'),
    defaultDecorator: type === 'single' ? observable.ref : observable.shallow,
  })

  // slice it to remove observables?
  const value = computed(() => data[config.roots.query] as Typing['value'], {
    name: observableName('value'),
  })

  const observables = {
    state,
    meta,
    data,
    variables,
    config,
    value,
  }

  return observables
}
