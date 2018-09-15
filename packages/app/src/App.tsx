import * as React from 'react'

import { ThemeProvider } from 'emotion-theming'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import { getTheme, loadTheme } from '@uifabric/styling'
import { Fabric } from 'office-ui-fabric-react'
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons'

import { defaultThemeNeutral } from './styles'
import { CandidateView, DashboardView, LoginView } from './views'

loadTheme(defaultThemeNeutral)
// TODO: Replace proprietiary icons
initializeIcons()

class App extends React.Component<{}> {
  public render() {
    console.log('App render called')
    return (
      <div className="App">
        <ThemeProvider theme={getTheme()}>
          <Router>
            <Fabric>
              <Switch>
                <Route exact={true} path="/" component={DashboardView} />
                <Route exact={true} path="/candidate" component={CandidateView} />
                <Route exact={true} path="/login" component={LoginView} />
              </Switch>
            </Fabric>
          </Router>
        </ThemeProvider>
      </div>
    )
  }
}

// TODO: only dev
import { hot } from 'react-hot-loader'

export default hot(module)(App)
