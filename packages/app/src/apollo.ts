import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { onError } from 'apollo-link-error'
import { HttpLink } from 'apollo-link-http'
import { withClientState } from 'apollo-link-state'
import { createUploadLink } from 'apollo-upload-client'

import { cookieAuth, sessionAuth } from './utils/auth'

const TEMP_TOKEN = process.env.AUTH_TOKEN
const TEMP_URI = `${process.env.PRISMA_ENDPOINT}/${process.env.PRISMA_SERVICE}/${
  process.env.PRISMA_STAGE
}`

const cache = new InMemoryCache()

const authLink = setContext((_, { headers }) => {
  const sessionToken = sessionAuth
    .currentSession()
    .then(session => session.getIdToken().getJwtToken())
    .catch(err => {
      /* noop */
    })

  const cookieToken = cookieAuth
    .currentSession()
    .then(session => session.getIdToken().getJwtToken())
    .catch(err => {
      /* noop */
    })

  // TODO: clear auth header for not-authenticated
  return Promise.all([sessionToken, cookieToken]).then(([_sessiontoken, _cookietoken]) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${_sessiontoken || _cookietoken}`,
    },
  }))
})

const tempAuthLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${TEMP_TOKEN}`,
    },
  }
})

const stateLink = withClientState({
  cache,
  resolvers: {
    Mutation: {
      updateNetworkStatus: (_, { isConnected }, { _cache }) => {
        const data = {
          networkStatus: {
            __typename: 'NetworkStatus',
            isConnected,
          },
        }
        _cache.writeData({ data })
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

const httpLink = new HttpLink({ uri: TEMP_URI })

const uploadLink = createUploadLink({ uri: TEMP_URI })

const errorLink = onError(({ graphQLErrors, networkError }) => {
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
  link: ApolloLink.from([stateLink, tempAuthLink, httpLink, uploadLink, errorLink]),
  cache,
})
