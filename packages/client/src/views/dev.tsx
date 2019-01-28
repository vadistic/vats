import { RouteComponentProps } from '@reach/router'
import React from 'react'
import { Router } from '../components'
import { CandidateProfileLiveFixture } from '../components/candidate-profile/test/fixture'
import { Fixture } from '../components/fixture'
import { UserPersonaLiveFixture } from '../components/persona/test/fixture'
import { TableLiveFixture } from '../components/table/test/fixture'
import { routes } from '../routes'

export interface IDevViewProps extends RouteComponentProps {}

export const DevView: React.FC<IDevViewProps> = () => (
  <>
    <h1>Test</h1>
    <Router basepath={routes.test.basepath}>
      <Fixture
        path={routes.test.children.persona.path}
        name="UserPersona"
        component={UserPersonaLiveFixture}
      />
      <Fixture
        path={routes.test.children.table.path}
        name="CandidatesTable"
        component={TableLiveFixture}
      />
      <Fixture
        path={routes.test.children.candidateProfile.path}
        name="CandidateProfile"
        component={CandidateProfileLiveFixture}
      />
    </Router>
  </>
)
