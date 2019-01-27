import gql from 'graphql-tag'
import React from 'react'
import { Query } from 'react-apollo'

import { UserPersona } from '..'

import {
  FileNoNestingFragment,
  TaskNoNestingFragment,
  UserFragment
} from '../../../generated/fragments'
import {
  PersonaFixtureQuery,
  PersonaFixtureQueryVariables
} from '../../../generated/graphql'
import mock from './data.json'

const USER_ID = 'cjr9cxucf426j0a742nwut6vd'

export const PersonaFixture: React.FC<any> = () => (
  <>
    <h3>Persona Fixture</h3>
    <UserPersona user={mock.data.user} />
  </>
)

export const PersonaLiveFixture: React.FC<any> = () => (
  <>
    <h3>Persona Live Fixture</h3>
    <Query<PersonaFixtureQuery, PersonaFixtureQueryVariables>
      query={personaFixtureQuery}
      variables={{ id: USER_ID }}
    >
      {({ data }) =>
        (data && data.user && <UserPersona user={data.user} />) || null
      }
    </Query>
  </>
)

const personaFixtureQuery = gql`
  query PersonaFixtureQuery($id: ID!) {
    user(where: { id: $id }) {
      ...User
    }
  }

  ${UserFragment}
`
