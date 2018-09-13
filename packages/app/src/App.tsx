import { Fabric } from 'office-ui-fabric-react/lib/Fabric'
import * as React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import { CandidateView, DashboardView, LoginView } from './views'

class App extends React.Component<{}> {
  public render() {
    return (
      <div className='App'>
        <Fabric>
          <Link to='/login'>Login</Link>
          <Switch>
            <Route exact={true} path='/' component={DashboardView} />
            <Route exact={true} path='/candidate' component={CandidateView} />
            <Route exact={true} path='/login' component={LoginView} />
          </Switch>
        </Fabric>
      </div>
    )
  }
}

export default App
