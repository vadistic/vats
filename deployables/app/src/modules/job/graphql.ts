import gql from 'graphql-tag'
import { JobFragment } from '../../generated/fragments'

export const JOB_QUERY = gql`
  query JobQuery($where: JobWhereUniqueInput!) {
    job(where: $where) {
      ...Job
    }
  }
  ${JobFragment}
`

export const JOB_CREATE_MUTATION = gql`
  mutation JobCreateMutation($data: JobCreateInput!) {
    createJob(data: $data) {
      ...Job
    }
  }
  ${JobFragment}
`

export const JOB_UPDATE_MUTATION = gql`
  mutation JobUpdateMutation($where: JobWhereUniqueInput!, $data: JobUpdateInput!) {
    updateJob(where: $where, data: $data) {
      ...Job
    }
  }
  ${JobFragment}
`

export const JOB_DELETE_MUTATION = gql`
  mutation JobDeleteMutation($where: JobWhereUniqueInput!) {
    deleteJob(where: $where) {
      ...Job
    }
  }
  ${JobFragment}
`
