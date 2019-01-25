import { getTheme } from '@uifabric/styling'
import { ThemeProvider } from 'emotion-theming'
import { Fabric } from 'office-ui-fabric-react'
import React from 'react'
import { ApolloProvider } from 'react-apollo'

import { Router } from '@reach/router'
import { client } from './apollo'
import { Layout } from './components'
import { TestView } from './views'

export class App extends React.Component {
  render() {
    return (
      <div className="app">
        <ApolloProvider client={client}>
          <ThemeProvider theme={getTheme()}>
            <Fabric className="app">
              <Layout>
                Content
                <Router>
                  <TestView path="test/*" />
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
