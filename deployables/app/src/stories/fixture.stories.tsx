import { I18nProvider } from '@vats/i18n'
import { theme, ThemeProvider } from '@vats/styling'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { HttpLink } from 'apollo-link-http'
import { Fabric } from 'office-ui-fabric-react'
import { ApolloContext } from '../apollo'

const cache = new InMemoryCache()

const httpLink = new HttpLink({
  uri: process.env.STORYBOOK_ENDPOINT_GRAPHQL,
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

const apolloClientOptions = {
  connectToDevTools: true,
  link: ApolloLink.from([errorLink, httpLink]),
  cache,
}

const client = new ApolloClient(apolloClientOptions)

export const StoriesFixture: React.FC = ({ children }) => {
  return (
    <ApolloContext.Provider value={client}>
      <I18nProvider>
        <ThemeProvider theme={theme}>
          <Fabric theme={theme}>{children}</Fabric>
        </ThemeProvider>
      </I18nProvider>
    </ApolloContext.Provider>
  )
}
