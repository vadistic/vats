import { NormalizedCacheObject } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { Query as IQueryShape } from '../generated/resolvers'

export type IStoreInitializers<T> = Partial<
  { [K in keyof T]: (client: ApolloClient<NormalizedCacheObject>) => T[K] }
>

// all local types should be added to query root field
export const initializers: IStoreInitializers<IQueryShape> = {
  localField: () => 'hello',
  localType: () => ({
    __typename: 'LocalType',
    id: `1`,
    name: 'MyLocalType',
  }),
  toasts: () => [],
}
