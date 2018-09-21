/* tslint:disable */
// This file was automatically generated and should not be edited.

import { JobType, StageType } from "./..\\..\\..\\generated\\globalTypes";

// ====================================================
// GraphQL query operation: ApplicationsTableQuery
// ====================================================

export interface ApplicationsTableQuery_applications_job {
  __typename: "Job";
  id: string;
  name: string;
  department: string | null;
  type: JobType;
}

export interface ApplicationsTableQuery_applications_candidate_tags {
  __typename: "Tag";
  id: string;
  label: string;
}

export interface ApplicationsTableQuery_applications_candidate {
  __typename: "Candidate";
  id: string;
  firstName: string;
  lastName: string;
  tags: ApplicationsTableQuery_applications_candidate_tags[] | null;
}

export interface ApplicationsTableQuery_applications_stage {
  __typename: "Stage";
  id: string;
  name: string;
  type: StageType;
}

export interface ApplicationsTableQuery_applications {
  __typename: "Application";
  id: string;
  updatedAt: any;
  job: ApplicationsTableQuery_applications_job;
  candidate: ApplicationsTableQuery_applications_candidate;
  stage: ApplicationsTableQuery_applications_stage;
}

export interface ApplicationsTableQuery_applicationsConnection_aggregate {
  __typename: "AggregateApplication";
  count: number;
}

export interface ApplicationsTableQuery_applicationsConnection {
  __typename: "ApplicationConnection";
  aggregate: ApplicationsTableQuery_applicationsConnection_aggregate;
}

export interface ApplicationsTableQuery {
  applications: (ApplicationsTableQuery_applications | null)[];
  applicationsConnection: ApplicationsTableQuery_applicationsConnection;
}

export interface ApplicationsTableQueryVariables {
  first: number;
  after?: string | null;
}
