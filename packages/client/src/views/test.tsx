import { RouteComponentProps, Router } from '@reach/router'
import gql from 'graphql-tag'
import React from 'react'

import { Query } from 'react-apollo'
import { UserPersona } from '../components'
import { routes } from '../routes'

const USER_ID = 'cjr9cxucf426j0a742nwut6vd'
const PersonaFixture: React.FC<any> = () => (
  <div>
    <Query<any> query={userQuery} variables={{ id: USER_ID }}>
      {({ data, error }) => (
        <>
          {data && data.user && <UserPersona user={data.user} />}
          <pre>{error && JSON.stringify(error)}</pre>
        </>
      )}
    </Query>
  </div>
)

const userQuery = gql`
  query UserQuery($id: ID!) {
    user(where: { id: $id }) {
      id
      firstName
      lastName
      avatar {
        id
        url
      }
    }
  }
`

export interface ITestViewProps extends RouteComponentProps {}

export const TestView: React.FC<ITestViewProps> = () => (
  <>
    <h1>Test</h1>
    <Router basepath={routes.test.basepath}>
      <PersonaFixture path={routes.test.children.persona.path} />
    </Router>
  </>
)
