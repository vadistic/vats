import { RouteComponentProps, Router } from '@reach/router'
import * as React from 'react'

import { AvatarFixture, HoverCardFixture, LinkButton } from '../components'

export interface ITestViewProps extends RouteComponentProps {}

export const TestView: React.SFC<ITestViewProps> = () => (
  <>
    <h1>Test view</h1>
    <ul>
      <li>
        <LinkButton to="avatar">Avatar</LinkButton>
      </li>
      <li>
        <LinkButton to="hover">HoverCard</LinkButton>
      </li>
    </ul>
    <Router basepath="/test">
      <AvatarFixture path="avatar" />
      <HoverCardFixture path="hover" />
    </Router>
  </>
)
