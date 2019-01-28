import gql from 'graphql-tag'
import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { UserPersona } from '..'
import { UserFragment } from '../../../generated/fragments'
import {
  PersonaFixtureIndexQuery,
  PersonaFixtureQuery,
  PersonaFixtureQueryVariables
} from '../../../generated/queries'
import { IFixtureLogProps } from '../../fixture'
import fixtureResponse from './data.json'

export const PersonaFixture: React.FC<any> = () => (
  <UserPersona user={fixtureResponse.data.user} />
)

export const PersonaLiveFixture: React.FC<IFixtureLogProps> = ({ log }) => {
  const { data: indexData } = useQuery<PersonaFixtureIndexQuery>(
    personaFixtureIndexQuery
  )

  if (!indexData) {
    return null
  }
  const user = indexData.users[0]
  const id = (user && user.id) || ''

  const { data } = useQuery<PersonaFixtureQuery, PersonaFixtureQueryVariables>(
    personaFixtureQuery,
    { variables: { where: { id } } }
  )

  if (!data) {
    return null
  }

  log(data)

  return <UserPersona user={data.user} />
}

const personaFixtureIndexQuery = gql`
  query PersonaFixtureIndexQuery {
    users(first: 1) {
      ...User
    }
  }

  ${UserFragment}
`

const personaFixtureQuery = gql`
  query PersonaFixtureQuery($where: UserWhereUniqueInput!) {
    localField @client
    user(where: $where) {
      ...User
    }
  }

  ${UserFragment}
`
