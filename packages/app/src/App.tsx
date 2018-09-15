import { injectGlobal } from 'emotion'

import { ThemeProvider } from 'emotion-theming'

import * as React from 'react'
import { ApolloProvider } from 'react-apollo'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { getTheme, normalize } from '@uifabric/styling'
import { Fabric } from 'office-ui-fabric-react'

import { client } from './apollo'
import { CandidateView, DashboardView, LoginView } from './views'

// tslint:disable-next-line:no-unused-expression
injectGlobal({
  body: {
    ...(normalize as {}),
  },
})

class App extends React.Component<{}> {
  public render() {
    console.log(normalize)
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={getTheme()}>
          <Fabric className="app">
            <Router>
              <Switch>
                <Route exact={true} path="/" component={DashboardView} />
                <Route exact={true} path="/candidate" component={CandidateView} />
                <Route exact={true} path="/login" component={LoginView} />
              </Switch>
            </Router>
          </Fabric>
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

// TODO: only dev
import { hot } from 'react-hot-loader'

export default hot(module)(App)
