import gql from 'graphql-tag'
import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { UserPersona } from '..'
import { UserFragment } from '../../../generated/fragments'
import {
  UserPersonaFixtureIndexQuery,
  UserPersonaFixtureQuery,
  UserPersonaFixtureQueryVariables,
} from '../../../generated/queries'

export const UserPersonaLiveFixture: React.FC = () => {
  const { data: indexData } = useQuery<UserPersonaFixtureIndexQuery>(userPersonaFixtureIndexQuery)

  if (!indexData) {
    return null
  }
  const user = indexData.users[0]
  const id = (user && user.id) || ''

  const { data } = useQuery<UserPersonaFixtureQuery, UserPersonaFixtureQueryVariables>(
    userPersonaFixtureQuery,
    { variables: { where: { id } } },
  )

  if (!data || !data.user) {
    return null
  }

  console.log(data)

  return <UserPersona user={data.user} />
}

const userPersonaFixtureIndexQuery = gql`
  query UserPersonaFixtureIndexQuery {
    users(first: 1) {
      ...User
    }
  }

  ${UserFragment}
`

const userPersonaFixtureQuery = gql`
  query UserPersonaFixtureQuery($where: UserWhereUniqueInput!) {
    user(where: $where) {
      ...User
    }
  }

  ${UserFragment}
`

export default <UserPersonaLiveFixture />
