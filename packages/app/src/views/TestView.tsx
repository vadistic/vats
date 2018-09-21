import { DefaultButton } from 'office-ui-fabric-react/lib/Button'
import { RouteComponentProps, Router } from '@reach/router'
import { AvatarFixture } from '../components'
import * as React from 'react'

export interface ITestViewProps extends RouteComponentProps {}

export const TestView: React.SFC<ITestViewProps> = () => (
  <>
    <h3>test view</h3>
    <Router basepath="/test">
      <AvatarFixture path="avatar" />
    </Router>
  </>
)
