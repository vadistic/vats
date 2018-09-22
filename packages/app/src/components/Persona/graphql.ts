import gql from 'graphql-tag'

export const personaCandidateFragment = gql`
  fragment PersonaCandidateFragment on Candidate {
    id
    firstName
    lastName
    metaCompany
    metaHeadline
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
    candidates(first: 10) {
      id
      ...PersonaCandidateFragment
    }
  }
  ${personaCandidateFragment}
`
