import { getTheme } from '@uifabric/styling'
import { ThemeProvider } from 'emotion-theming'
import { Fabric } from 'office-ui-fabric-react'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'

import { client } from './apollo'
import { Layout, Router } from './components'
import { routes } from './routes'
import { theme } from './styles'
import { DevView } from './views'

export class App extends React.Component {
  render() {
    return (
      <>
        <ApolloProvider client={client}>
          <ApolloHooksProvider client={client}>
            <ThemeProvider theme={theme}>
              <Fabric>
                <Layout>
                  <Router>
                    <DevView path={routes.test.path} />
                  </Router>
                </Layout>
              </Fabric>
            </ThemeProvider>
          </ApolloHooksProvider>
        </ApolloProvider>
      </>
    )
  }
}

export default App
