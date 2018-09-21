import { RouteComponentProps, Router } from '@reach/router'
import * as React from 'react'

import { HoverCardFixture, LinkButton, PersonaFixture } from '../components'

export interface ITestViewProps extends RouteComponentProps {}

export const TestView: React.SFC<ITestViewProps> = () => (
  <>
    <h1>Test view</h1>
    <ul>
      <li>
        <LinkButton to="persona">Persona</LinkButton>
      </li>
      <li>
        <LinkButton to="hover">HoverCard</LinkButton>
      </li>
    </ul>
    <Router basepath="/test">
      <PersonaFixture path="persona" />
      <HoverCardFixture path="hover" />
    </Router>
  </>
)
