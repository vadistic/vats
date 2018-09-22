import gql from 'graphql-tag'

export const personaCandidateFragment = gql`
  fragment PersonaCandidateFragment on Candidate {
    id
    firstName
    lastName
    metaCompany
    metaPosition
    avatar {
      url
      name
    }
  }
`

export const personaUserFragment = gql`
  fragment PersonaUserFragment on User {
    id
    firstName
    lastName
    position
    avatar {
      url
      name
    }
  }
`

export const personaFixtureQuery = gql`
  query PersonaFixtureQuery {
    candidates(first: 3) {
      id
      ...PersonaCandidateFragment
    }
    users(first: 3) {
      id
      ...PersonaUserFragment
    }
  }
  ${personaCandidateFragment}
  ${personaUserFragment}
`
