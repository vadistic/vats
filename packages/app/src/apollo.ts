import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { onError } from 'apollo-link-error'
import { HttpLink } from 'apollo-link-http'
import { withClientState } from 'apollo-link-state'
import { auth, tempAuth } from './utils/auth'

export const cache = new InMemoryCache()

export const authLink = setContext((_, { headers }) => {
  const tempToken = tempAuth
    .currentSession()
    .then(session => session.idToken.jwtToken)
    .catch(err => {
      /* noop */
    })

  const token = auth
    .currentSession()
    .then(session => session.idToken.jwtToken)
    .catch(err => {
      /* noop */
    })

  // TODO: clear auth header for not-authenticated
  return Promise.all([tempToken, token]).then(([tempToken, token]) => ({
    headers: {
      ...headers,
      authorization: tempToken`Bearer ${tempToken || token}`,
    },
  }))
})

export const stateLink = withClientState({
  cache,
  resolvers: {
    Mutation: {
      updateNetworkStatus: (_, { isConnected }, { cache }) => {
        const data = {
          networkStatus: {
            __typename: 'NetworkStatus',
            isConnected,
          },
        }
        cache.writeData({ data })
        return null
      },
      login: (_, { isConnected }, { cache }) => {
        const data = {
          networkStatus: {
            __typename: 'NetworkStatus',
            isConnected,
          },
        }
        cache.writeData({ data })
        return null
      },
    },
  },
  defaults: {
    networkStatus: {
      __typename: 'NetworkStatus',
      isConnected: false,
    },
  },
})

export const httpLink = new HttpLink({ uri: 'http://localhost:4000' })

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    )
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`)
  }
})

export const client = new ApolloClient({
  connectToDevTools: true,
  link: ApolloLink.from([stateLink, authLink, httpLink, errorLink]),
  cache,
})
