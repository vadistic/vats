import gql from 'graphql-tag'
import { JobFragment } from '../../generated/fragments'

export const JOBS_QUERY = gql`
  query JobsQuery($where: JobWhereInput, $orderBy: JobOrderByInput) {
    jobs(where: $where, orderBy: $orderBy) {
      ...Job
    }
  }

  ${JobFragment}
`

export const JOBS_UPDATE_MANY_MUTATION = gql`
  mutation JobsUpdateManyMutation($where: JobWhereInput!, $data: JobUpdateManyMutationInput!) {
    updateManyJobs(data: $data, where: $where) {
      count
    }
  }
`

export const JOBS_DELETE_MANY_MUTATION = gql`
  mutation JobsDeleteManyMutation($where: JobWhereInput!) {
    deleteManyJobs(where: $where) {
      count
    }
  }
`
