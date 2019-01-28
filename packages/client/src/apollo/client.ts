// tslint:disable-next-line:no-implicit-dependencies
import { ApolloCache } from 'apollo-cache'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'
import { ApolloClient, Initializers } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { HttpLink } from 'apollo-link-http'
import { initializers } from './initializers'
import { resolvers } from './resolvers'
import { schema as typeDefs } from './schema'

export interface IStoreObjectWithId {
  __typename: string
  id: string
  [field: string]: any
}

export interface IContext {
  cache: ApolloCache<NormalizedCacheObject>
}

export const dataIdFromObject = <T extends IStoreObjectWithId>(entry: T) =>
  `${entry.__typename}:${entry.id}`

export type ICache = ApolloCache<NormalizedCacheObject>

// not adding dataIdFromObject because above is default
const cache = new InMemoryCache()

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_LIVE_ENDPOINT
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => console.error(`GRAPHQL_ERROR`, message))
  }
  if (networkError) {
    console.error(`NETWORK_ERROR`, networkError)
  }
})

export const client = new ApolloClient({
  connectToDevTools: true,
  link: ApolloLink.from([errorLink, httpLink]),
  initializers: initializers as Initializers<NormalizedCacheObject>,
  typeDefs,
  resolvers,
  cache
})
