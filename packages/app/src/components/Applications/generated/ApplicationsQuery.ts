/* tslint:disable */
// This file was automatically generated and should not be edited.

import { JobType, StageType } from "./..\\..\\..\\generated\\globalTypes";

// ====================================================
// GraphQL query operation: ApplicationsQuery
// ====================================================

export interface ApplicationsQuery_applications_job {
  __typename: "Job";
  id: string;
  name: string;
  department: string | null;
  status: JobType;
}

export interface ApplicationsQuery_applications_candidate_tags {
  __typename: "Tag";
  id: string;
  label: string;
}

export interface ApplicationsQuery_applications_candidate {
  __typename: "Candidate";
  id: string;
  firstName: string;
  lastName: string;
  tags: ApplicationsQuery_applications_candidate_tags[] | null;
}

export interface ApplicationsQuery_applications_stage {
  __typename: "Stage";
  id: string;
  name: string;
  type: StageType;
}

export interface ApplicationsQuery_applications {
  __typename: "Application";
  id: string;
  updatedAt: any;
  job: ApplicationsQuery_applications_job;
  candidate: ApplicationsQuery_applications_candidate;
  stage: ApplicationsQuery_applications_stage | null;
}

export interface ApplicationsQuery_applicationsConnection_aggregate {
  __typename: "AggregateApplication";
  count: number;
}

export interface ApplicationsQuery_applicationsConnection {
  __typename: "ApplicationConnection";
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
