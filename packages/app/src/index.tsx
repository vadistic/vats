import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { AuthClass, CookieStorage } from '@aws-amplify/auth'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { onError } from 'apollo-link-error'
import { HttpLink } from 'apollo-link-http'
import { withClientState } from 'apollo-link-state'
import { ApolloProvider } from 'react-apollo'

import App from './App'

export const auth = new AuthClass({
  userPoolId: 'eu-west-1_QB5d6ZO7S',
  userPoolWebClientId: '7paip3rlrdmhktcoem3kmtn8ev',
  authenticationFlowType: 'USER_SRP_AUTH',
  // https://github.com/aws-amplify/amplify-js/issues/740
  identityPoolId: 'bug',
  region: 'eu-west-1',
  mandatorySignIn: false,
  storage: new CookieStorage({
    domain: '.lvh.me',
    expires: 7,
    path: '/',
    secure: true,
  }),
})

// tslint:disable: no-console

const cache = new InMemoryCache()

const authLink = setContext((_, { headers }) =>
  auth.currentSession().then(session => ({
    headers: {
      ...headers,
      authorization: `Bearer ${session.idToken.jwtToken}`,
    },
  }))
)

const stateLink = withClientState({
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

const httpLink = new HttpLink({ uri: 'http://localhost:4000' })

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

const client = new ApolloClient({
  connectToDevTools: true,
  link: ApolloLink.from([stateLink, authLink, httpLink, errorLink]),
  cache,
})

ReactDOM.render(
  // TODO: find out why typings mismatch
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
)
