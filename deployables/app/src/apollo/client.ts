import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'
import { ApolloClient, ApolloClientOptions } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { HttpLink } from 'apollo-link-http'
import { resolvers } from './resolvers'
import { schema as typeDefs } from './schema'

export interface StoreObjectWithId {
  __typename: string
  id: string
  [field: string]: any
}

export const dataIdFromObject = <T extends StoreObjectWithId>(entry: T) =>
  `${entry.__typename}:${entry.id}`

// not adding dataIdFromObject because above is default
const cache = new InMemoryCache()

export type TCache = typeof cache

export interface Context {
  cache: TCache
}

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_ENDPOINT_GRAPHQL,
})

const errorLink = onError(({ graphQLErrors, networkError, response }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => console.error(`GRAPHQL_ERROR`, message))
  }
  if (networkError) {
    console.error(`NETWORK_ERROR`)
    console.error(networkError)
    console.error(response)
  }
})

export const apolloClientOptions: ApolloClientOptions<NormalizedCacheObject> = {
  connectToDevTools: true,

  link: ApolloLink.from([errorLink, httpLink]),
  typeDefs,
  // should be fixed in next major of gql-gen
  resolvers: resolvers as any,
  cache,
}

export const client = new ApolloClient(apolloClientOptions)
