import { Router } from '@reach/router'
import { injectGlobal } from 'emotion'
import { ThemeProvider } from 'emotion-theming'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'
import { getTheme, normalize } from 'office-ui-fabric-react/lib/Styling'
import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { client } from './client'
import { AuthView, CandidateView, DashboardView , ApplicationsView} from './views'

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
  fieldset: {
    border: 'none',
  },
})

class App extends React.Component<{}> {
  public render() {
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={getTheme()}>
          <Fabric className="app">
            <Router>
              <DashboardView path="/" />
              <ApplicationsView path="applications/*" />
              <AuthView path="login/*" />
            </Router>
          </Fabric>
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

// HML switch
// export default hot(module)(App)
export default App
