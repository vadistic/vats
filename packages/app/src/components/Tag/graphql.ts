import gql from 'graphql-tag'

export const tagFragment = gql`
  fragment TagFragment on Candidate {
    id
    tags {
      id
      label
    }
  }
`
export const tagFixtureQuery = gql`
  query TagFixtureQuery {
    candidates(first: 3) {
      id
      ...TagFragment
    }
  }
  ${tagFragment}
`
