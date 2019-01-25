import { RouteComponentProps, Router } from '@reach/router'
import gql from 'graphql-tag'
import React from 'react'

import { Query } from 'react-apollo'
import { UserPersona } from '../components'

const USER_ID = 'cjr9cxucf426j0a742nwut6vd'
const PersonaFixture: React.FC<any> = () => (
  <div>
    <Query<any> query={userQuery}>
      {({ data, error }) => (
        <>
          {data && <UserPersona user={data.user} />}
          {error && JSON.stringify(error)}
        </>
      )}
    </Query>
  </div>
)

const userQuery = gql`
  query UserQuery {
    user(where: { id: "cjr9cxucf426j0a742nwut6vd" }) {
      id
      firstName
      lastName
      email
      username
      position
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
    <Router basepath="test">
      <PersonaFixture path="persona" />
    </Router>
  </>
)
