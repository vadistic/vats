import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient, Initializers } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'

const cache = new InMemoryCache({
  dataIdFromObject: obj => obj.id
})

const httpLink = new HttpLink({ uri: process.env.ENDPOINT_URL })

export const client = new ApolloClient({
  connectToDevTools: true,
  link: ApolloLink.from([httpLink]),

  cache
})
