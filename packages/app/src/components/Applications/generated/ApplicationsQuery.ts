/* tslint:disable */
// This file was automatically generated and should not be edited.

import { JobType, StageTypeEnum } from "./..\\..\\..\\generated\\globalTypes";

// ====================================================
// GraphQL query operation: ApplicationsQuery
// ====================================================

export interface ApplicationsQuery_applications_job {
  id: string;
  name: string;
  department: string | null;
  status: JobType;
}

export interface ApplicationsQuery_applications_candidate_tags {
  id: string;
  label: string;
}

export interface ApplicationsQuery_applications_candidate {
  id: string;
  firstName: string;
  lastName: string;
  tags: ApplicationsQuery_applications_candidate_tags[] | null;
}

export interface ApplicationsQuery_applications_stage {
  id: string;
  name: string;
  type: StageTypeEnum;
}

export interface ApplicationsQuery_applications {
  id: string;
  updatedAt: any;
  job: ApplicationsQuery_applications_job;
  candidate: ApplicationsQuery_applications_candidate;
  stage: ApplicationsQuery_applications_stage | null;
}

export interface ApplicationsQuery_applicationsConnection_aggregate {
  count: number;
}

export interface ApplicationsQuery_applicationsConnection {
  aggregate: ApplicationsQuery_applicationsConnection_aggregate;
}

export interface ApplicationsQuery {
  applications: (ApplicationsQuery_applications | null)[];
  applicationsConnection: ApplicationsQuery_applicationsConnection;
}

export interface ApplicationsQueryVariables {
  first: number;
  after?: string | null;
}
