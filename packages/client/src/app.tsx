import { getTheme } from '@uifabric/styling'
import { ThemeProvider } from 'emotion-theming'
import { Fabric } from 'office-ui-fabric-react'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'

import { client } from './apollo'
import { Layout, Router } from './components'
import { routes } from './routes'
import { TestView } from './views'

export class App extends React.Component {
  render() {
    return (
      <div className="app">
        <ApolloProvider client={client}>
          <ApolloHooksProvider client={client}>
            <ThemeProvider theme={getTheme()}>
              <Fabric className="app">
                <Layout>
                  <Router>
                    <TestView path={routes.test.path} />
                  </Router>
                </Layout>
              </Fabric>
            </ThemeProvider>
          </ApolloHooksProvider>
        </ApolloProvider>
      </div>
    )
  }
}

export default App
