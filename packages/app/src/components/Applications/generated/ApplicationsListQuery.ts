/* tslint:disable */
// This file was automatically generated and should not be edited.

import { JobType, StageType } from './..\\..\\..\\generated\\globalTypes'

// ====================================================
// GraphQL query operation: ApplicationsListQuery
// ====================================================

export interface ApplicationsListQuery_applications_job {
  __typename: 'Job'
  id: string
  name: string
  department: string | null
  status: JobType
}

export interface ApplicationsListQuery_applications_candidate_tags {
  __typename: 'Tag'
  id: string
  label: string
}

export interface ApplicationsListQuery_applications_candidate {
  __typename: 'Candidate'
  id: string
  firstName: string
  lastName: string
  tags: ApplicationsListQuery_applications_candidate_tags[] | null
}

export interface ApplicationsListQuery_applications_stage {
  __typename: 'Stage'
  id: string
  name: string
  type: StageType
}

export interface ApplicationsListQuery_applications {
  __typename: 'Application'
  id: string
  updatedAt: any
  job: ApplicationsListQuery_applications_job
  candidate: ApplicationsListQuery_applications_candidate
  stage: ApplicationsListQuery_applications_stage | null
}

export interface ApplicationsListQuery_applicationsConnection_aggregate {
  __typename: 'AggregateApplication'
  count: number
}

export interface ApplicationsListQuery_applicationsConnection {
  __typename: 'ApplicationConnection'
  aggregate: ApplicationsListQuery_applicationsConnection_aggregate
}

export interface ApplicationsListQuery {
  applications: (ApplicationsListQuery_applications | null)[]
  applicationsConnection: ApplicationsListQuery_applicationsConnection
}

export interface ApplicationsListQueryVariables {
  first: number
  after?: string | null
}
