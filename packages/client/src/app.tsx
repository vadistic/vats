import { getTheme } from '@uifabric/styling'
import { ThemeProvider } from 'emotion-theming'
import { Fabric } from 'office-ui-fabric-react'
import React from 'react'
import { ApolloProvider } from 'react-apollo'

import { Router } from '@reach/router'
import { client } from './apollo'
import { Layout } from './components'
import { routes } from './routes'
import { TestView } from './views'

export class App extends React.Component {
  render() {
    return (
      <div className="app">
        <ApolloProvider client={client}>
          <ThemeProvider theme={getTheme()}>
            <Fabric className="app">
              <Layout>
                <Router>
                  <TestView path={routes.test.path} />
                </Router>
              </Layout>
            </Fabric>
          </ThemeProvider>
        </ApolloProvider>
      </div>
    )
  }
}

export default App
