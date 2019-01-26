import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient, Initializers } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { HttpLink } from 'apollo-link-http'

const cache = new InMemoryCache({
  dataIdFromObject: obj => obj.id
})

const httpLink = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_ENDPOINT })

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => console.error(message))
  }
  if (networkError) {
    console.error(networkError)
  }
})

export const client = new ApolloClient({
  connectToDevTools: true,
  link: ApolloLink.from([errorLink, httpLink]),

  cache
})
