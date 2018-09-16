import { injectGlobal } from 'emotion'
import { ThemeProvider } from 'emotion-theming'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'
import { getTheme, normalize } from 'office-ui-fabric-react/lib/Styling'
import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { client } from './apollo'
import { AuthView, CandidateView, DashboardView } from './views'

// tslint:disable-next-line:no-unused-expression
injectGlobal({
  body: {
    ...(normalize as {}),
  },
  '*': {
    ...(normalize as {}),
  },
  a: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
})

class App extends React.Component<{}> {
  public render() {
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={getTheme()}>
          <Router>
            <Fabric className="app">
              <Route exact={true} path="/" component={DashboardView} />
              <Route path="/candidate" component={CandidateView} />
              <Route path="/login" component={AuthView} />
            </Fabric>
          </Router>
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

// HML switch
// export default hot(module)(App)
export default App
