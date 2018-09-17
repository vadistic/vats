import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Auth, Grid } from '../components'
import { Router } from '../utils'

// tslint:disable: max-classes-per-file

export interface IAuthViewProps extends RouteComponentProps {}

export class AuthView extends React.Component<IAuthViewProps, any> {
  public render() {
    return (
      <>
        <Grid.Section background={'purpleDark'}>
          <Grid.Container height={'100vh'} gridTemplateRows={'1fr 1fr 1fr'}>
            <Grid.Item gridRow={'2 / span 1'} gridColumn={'5 / span 4'}>
              <Router basepath="/login">
                <Auth.Forms.SignIn path="/" />
                <Auth.Forms.Forgot path="forgot" />
                <Auth.Forms.Reset path="reset" />
              </Router>
            </Grid.Item>
          </Grid.Container>
        </Grid.Section>
      </>
    )
  }
}
