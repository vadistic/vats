import { RouteComponentProps, Router } from '@reach/router'
import React from 'react'

import { PersonaLiveFixture } from '../components/persona/test/fixture'
import { routes } from '../routes'

export interface ITestViewProps extends RouteComponentProps {}

export const TestView: React.FC<ITestViewProps> = () => (
  <>
    <h1>Test</h1>
    <Router basepath={routes.test.basepath}>
      <PersonaLiveFixture path={routes.test.children.persona.path} />
    </Router>
  </>
)
