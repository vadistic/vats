import gql from 'graphql-tag'

import { personaCandidateFragment } from '../Persona'

export const cardFragment = gql`
  fragment CardFragment on Application {
    id
    updatedAt
    stage {
      name
      type
    }
    candidate {
      id
      links
      applications {
        id
      }
      comments {
        id
      }
      tags {
        id
        label
      }
      ...PersonaCandidateFragment
    }
  }
  ${personaCandidateFragment}
`

export const cardFixtureQuery = gql`
  query CardFixtureQuery {
    applications(first: 3) {
      id
      ...CardFragment
    }
  }
  ${cardFragment}
`
