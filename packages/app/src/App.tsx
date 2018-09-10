import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import { CandidateView, DashboardView } from './views'

class App extends React.Component<{}> {
  public render() {
    return (
      <div className="App">
        <Switch>
          <Route exact={true} path="/" component={DashboardView} />
          <Route exact={true} path="/candidate" component={CandidateView} />
        </Switch>
      </div>
    )
  }
}

export default App
