import { RouteComponentProps, Router } from '@reach/router'
import * as React from 'react'

import { DefaultButton } from 'office-ui-fabric-react/lib/Button'

import { AvatarFixture } from '../components'

export interface ITestViewProps extends RouteComponentProps {}

export const TestView: React.SFC<ITestViewProps> = () => (
  <>
    <h3>test view</h3>
    <Router basepath="/test">
      <AvatarFixture path="avatar" />
    </Router>
  </>
)
