import gql from 'graphql-tag'
import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { UserPersona } from '..'
import { UserFragment } from '../../../generated/fragments'
import {
  PersonaFixtureQuery,
  PersonaFixtureQueryVariables
} from '../../../generated/graphql'
import { IFixtureLogProps } from '../../fixture'
import fixtureResponse from './data.json'

const USER_ID = 'cjr9cxucf426j0a742nwut6vd'

export const PersonaFixture: React.FC<any> = () => (
  <UserPersona user={fixtureResponse.data.user} />
)

export const PersonaLiveFixture: React.FC<IFixtureLogProps> = ({ log }) => {
  const { data, error } = useQuery<
    PersonaFixtureQuery,
    PersonaFixtureQueryVariables
  >(personaFixtureQuery, { variables: { id: USER_ID } })

  log(data)

  return data ? <UserPersona user={data.user} /> : null
}

const personaFixtureQuery = gql`
  query PersonaFixtureQuery($id: ID!) {
    user(where: { id: $id }) {
      ...User
    }
  }

  ${UserFragment}
`
