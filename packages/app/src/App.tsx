import { Router } from '@reach/router'
import { injectGlobal } from 'emotion'
import { ThemeProvider } from 'emotion-theming'
import * as React from 'react'
import { ApolloProvider } from 'react-apollo'

import { Fabric } from 'office-ui-fabric-react/lib/Fabric'
import { getTheme, normalize } from 'office-ui-fabric-react/lib/Styling'

import { client } from './apollo'
import { LinkButton } from './components'
import { ApplicationsView, AuthView, CandidateView, DashboardView, TestView } from './views'

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
            <h1>Main nav</h1>
            <ul>
              <li>
                <LinkButton to="applications">Applications View</LinkButton>
              </li>
              <li>
                <LinkButton to="test">Test View</LinkButton>
              </li>
              <li>
                <LinkButton to="login">Auth View</LinkButton>
              </li>
            </ul>
            <Router>
              <DashboardView path="/" />
              <ApplicationsView path="applications/*" />
              <CandidateView path="candidate/*" />
              <AuthView path="login/*" />
              <TestView path="test/*" />
            </Router>
          </Fabric>
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

export default App
