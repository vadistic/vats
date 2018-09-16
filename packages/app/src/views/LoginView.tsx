import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Auth, Grid } from '../components'
import { IMatch } from '../utils'

// tslint:disable: max-classes-per-file

export interface IAuthViewProps {
  match: IMatch<any>
}

export class AuthView extends React.Component<IAuthViewProps, any> {
  public render() {
    return (
      <>
        <Grid.Section background={'purpleDark'}>
          <Grid.Container height={'100vh'} gridTemplateRows={'1fr 1fr 1fr'}>
            <Grid.Item gridRow={'2 / span 1'} gridColumn={'5 / span 4'}>
              <Switch>
                <Route
                  path={`${this.props.match.path}/`}
                  exact={true}
                  render={({ location }) => (
                    <Auth.SignIn match={this.props.match} location={location} />
                  )}
                />
                <Route
                  path={`${this.props.match.path}/reset`}
                  exact={true}
                  render={({ location }) => (
                    <Auth.Reset match={this.props.match} location={location} />
                  )}
                />
              </Switch>
            </Grid.Item>
          </Grid.Container>
        </Grid.Section>
      </>
    )
  }
}
