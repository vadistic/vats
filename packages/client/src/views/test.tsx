import { RouteComponentProps } from '@reach/router'
import React from 'react'

import { Router } from '../components'
import { Fixture } from '../components/fixture'
import { PersonaLiveFixture } from '../components/persona/test/fixture'
import { routes } from '../routes'

export interface ITestViewProps extends RouteComponentProps {}

export const TestView: React.FC<ITestViewProps> = () => (
  <>
    <h1>Test</h1>
    <Router basepath={routes.test.basepath}>
      <Fixture
        path={routes.test.children.persona.path}
        name="UserPersona"
        component={PersonaLiveFixture}
      />
    </Router>
  </>
)
