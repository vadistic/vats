import gql from 'graphql-tag'

import { personaCandidateFragment } from '..'

export const cardFragment = gql`
  fragment CardFragment on Candidate {
    id
    links
    emails
    phones
    source
    metaCompany
    metaPosition
    metaHeadline
    tags {
      label
    }
    applications {
      id
      updatedAt
      stage {
        id
        name
        type
      }
    }
    ...PersonaCandidateFragment
  }
  ${personaCandidateFragment}
`
export const cardFixtureQuery = gql`
  query CardFixtureQuery {
    candidates(first: 3) {
      id
      ...CardFragment
    }
  }
  ${cardFragment}
`
