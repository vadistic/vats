import gql from 'graphql-tag'
import { cardFragment } from '../Card'
export const applicationsBoardQuery = gql`
  query ApplicationsBoardQuery($first: Int!, $after: String) {
    applications(first: $first, after: $after) {
      id
      updatedAt
      job {
        id
        name
        department
        type
      }
      candidate {
        id
        firstName
        lastName
        tags {
          id
          label
        }
      }
      stage {
        id
        name
        type
      }
    }
    applicationsConnection {
      aggregate {
        count
      }
    }
  }
`

export const applicationsListQuery = gql`
  query ApplicationsListQuery($jobIds: [ID!]!, $stageIds: [ID!]!) {
    applications(where: { AND: { job: { id_in: $jobIds }, stage: { id_in: $stageIds } } }) {
      ...CardFragment
      id
      updatedAt
      job {
        id
        name
        department
        type
      }
      candidate {
        id
      }
      stage {
        id
        name
        type
      }
      disqualificationLink {
        id
        updatedAt
        disqualification {
          id
          name
        }
        justification
        createdBy {
          firstName
          lastName
          position
          avatar {
            url
            name
          }
        }
      }
    }
  }
  ${cardFragment}
`

export const applicationsTableQuery = gql`
  query ApplicationsTableQuery($first: Int!, $after: String) {
    applications(first: $first, after: $after) {
      id
      updatedAt
      job {
        id
        name
        department
        type
      }
      candidate {
        id
        firstName
        lastName
        tags {
          id
          label
        }
      }
      stage {
        id
        name
        type
      }
    }
    applicationsConnection {
      aggregate {
        count
      }
    }
  }
`
