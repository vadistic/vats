import gql from 'graphql-tag'
import React from 'react'
import { Query } from 'react-apollo'

import { UserPersona } from '..'
import {
  FileNoNestingFragment,
  TaskNoNestingFragment,
  UserFragment
} from '../../../generated/fragments'

import mock from './data.json'

const USER_ID = 'cjr9cxucf426j0a742nwut6vd'

export const PersonaFixture: React.FC<any> = () => (
  <>
    <UserPersona user={mock.data.user} />
  </>
)

export const PersonaLiveFixture: React.FC<any> = () => (
  <>
    <Query<any> query={personaFixtureQuery} variables={{ id: USER_ID }}>
      {({ data }) => {
        console.log('data: ', data)
        if (data && data.user) {
          return <UserPersona user={data.user} />
        } else {
          return null
        }
      }}
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
  ${TaskNoNestingFragment}
  ${FileNoNestingFragment}
`
