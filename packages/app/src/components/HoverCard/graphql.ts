import gql from 'graphql-tag'

import { personaCandidateFragment } from '../Persona'

export const hoverCardCandidateQuery = gql`
  query HoverCardCandidateQuery($id: ID!) {
    candidate(where: { id: $id }) {
      id
      id
      firstName
      lastName
      metaCompany
      metaHeadline
      metaHeadline
      emails
      phones
      links
      avatar {
        url
        name
      }
    }
  }
`

export const hoverCardUserQuery = gql`
  query HoverCardUserQuery($id: ID!) {
    user(where: { id: $id }) {
      id
      firstName
      lastName
      position
      email
      username
      lastLogin
      avatar {
        url
        name
      }
    }
  }
`

export const hoverCardFixtureQuery = gql`
  query HoverCardFixtureQuery {
    candidates(first: 10) {
      id
      ...PersonaCandidateFragment
    }
  }
  ${personaCandidateFragment}
`
