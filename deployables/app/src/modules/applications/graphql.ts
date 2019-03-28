import gql from 'graphql-tag'
import { ApplicationFragment } from '../../generated/fragments'

export const APPLICATIONS_QUERY = gql`
  query ApplicationsQuery($where: ApplicationWhereInput) {
    applications(where: $where) {
      ...Application

      job {
        workflow {
          id
        }
      }
      candidate {
        avatar {
          id
          url
        }
        comments {
          id
        }
      }
    }

    workflows(where: { jobs_some: { applications_some: $where } }) {
      id
      createdAt
      updatedAt
      name
      description

      stages {
        id
        createdAt
        updatedAt
        name
        description
        type
      }
    }
  }

  ${ApplicationFragment}
`

export const APPLICATION_CREATE_MUTATION = gql`
  mutation ApplicationCreateMutation($data: ApplicationCreateInput!) {
    createApplication(data: $data) {
      ...Application
    }
  }

  ${ApplicationFragment}
`

export const APPLICATION_UPDATE_MUTATION = gql`
  mutation ApplicationUpdateMutation(
    $data: ApplicationUpdateInput!
    $where: ApplicationWhereUniqueInput!
  ) {
    updateApplication(data: $data, where: $where) {
      ...Application
    }
  }

  ${ApplicationFragment}
`

export const APPLICATION_DELETE_MUTATION = gql`
  mutation ApplicationDeleteMutation($where: ApplicationWhereUniqueInput!) {
    deleteApplication(where: $where) {
      ...Application
    }
  }

  ${ApplicationFragment}
`

export const APPLICATIONS_UPDATE_MANY_MUTATION = gql`
  mutation ApplicationsUpdateManyMutation(
    $where: ApplicationWhereInput!
    $data: ApplicationUpdateManyMutationInput!
  ) {
    updateManyApplications(data: $data, where: $where) {
      count
    }
  }
`

export const APPLICATIONS_DELETE_MANY_MUTATION = gql`
  mutation ApplicationsDeleteManyMutation($where: ApplicationWhereInput!) {
    deleteManyApplications(where: $where) {
      count
    }
  }
`
