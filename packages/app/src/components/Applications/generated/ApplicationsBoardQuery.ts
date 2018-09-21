/* tslint:disable */
// This file was automatically generated and should not be edited.

import { JobType, StageType } from "./..\\..\\..\\generated\\globalTypes";

// ====================================================
// GraphQL query operation: ApplicationsBoardQuery
// ====================================================

export interface ApplicationsBoardQuery_applications_job {
  __typename: "Job";
  id: string;
  name: string;
  department: string | null;
  type: JobType;
}

export interface ApplicationsBoardQuery_applications_candidate_tags {
  __typename: "Tag";
  id: string;
  label: string;
}

export interface ApplicationsBoardQuery_applications_candidate {
  __typename: "Candidate";
  id: string;
  firstName: string;
  lastName: string;
  tags: ApplicationsBoardQuery_applications_candidate_tags[] | null;
}

export interface ApplicationsBoardQuery_applications_stage {
  __typename: "Stage";
  id: string;
  name: string;
  type: StageType;
}

export interface ApplicationsBoardQuery_applications {
  __typename: "Application";
  id: string;
  updatedAt: any;
  job: ApplicationsBoardQuery_applications_job;
  candidate: ApplicationsBoardQuery_applications_candidate;
  stage: ApplicationsBoardQuery_applications_stage;
}

export interface ApplicationsBoardQuery_applicationsConnection_aggregate {
  __typename: "AggregateApplication";
  count: number;
}

export interface ApplicationsBoardQuery_applicationsConnection {
  __typename: "ApplicationConnection";
  aggregate: ApplicationsBoardQuery_applicationsConnection_aggregate;
}

export interface ApplicationsBoardQuery {
  applications: (ApplicationsBoardQuery_applications | null)[];
  applicationsConnection: ApplicationsBoardQuery_applicationsConnection;
}

export interface ApplicationsBoardQueryVariables {
  first: number;
  after?: string | null;
}
