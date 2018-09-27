/* tslint:disable */
// This file was automatically generated and should not be edited.

import { StageType, JobType } from "./..\\..\\..\\generated\\globalTypes";

// ====================================================
// GraphQL query operation: ApplicationsBoardQuery
// ====================================================

export interface ApplicationsBoardQuery_applications_stage {
  __typename: "Stage";
  name: string;
  type: StageType;
  id: string;
}

export interface ApplicationsBoardQuery_applications_candidate_applications {
  __typename: "Application";
  id: string;
}

export interface ApplicationsBoardQuery_applications_candidate_comments {
  __typename: "Comment";
  id: string;
}

export interface ApplicationsBoardQuery_applications_candidate_tags {
  __typename: "Tag";
  id: string;
  label: string;
}

export interface ApplicationsBoardQuery_applications_candidate_avatar {
  __typename: "File";
  url: string;
  name: string;
}

export interface ApplicationsBoardQuery_applications_candidate {
  __typename: "Candidate";
  id: string;
  links: string[];
  applications: ApplicationsBoardQuery_applications_candidate_applications[] | null;
  comments: ApplicationsBoardQuery_applications_candidate_comments[] | null;
  tags: ApplicationsBoardQuery_applications_candidate_tags[] | null;
  firstName: string;
  lastName: string;
  metaCompany: string | null;
  metaPosition: string | null;
  avatar: ApplicationsBoardQuery_applications_candidate_avatar | null;
}

export interface ApplicationsBoardQuery_applications_job {
  __typename: "Job";
  id: string;
  name: string;
  department: string | null;
  type: JobType;
}

export interface ApplicationsBoardQuery_applications_disqualificationLink_disqualification {
  __typename: "Disqualification";
  id: string;
  name: string;
}

export interface ApplicationsBoardQuery_applications_disqualificationLink_createdBy_avatar {
  __typename: "File";
  url: string;
  name: string;
}

export interface ApplicationsBoardQuery_applications_disqualificationLink_createdBy {
  __typename: "User";
  firstName: string;
  lastName: string;
  position: string | null;
  avatar: ApplicationsBoardQuery_applications_disqualificationLink_createdBy_avatar | null;
}

export interface ApplicationsBoardQuery_applications_disqualificationLink {
  __typename: "DisqualificationLink";
  id: string;
  updatedAt: any;
  disqualification: ApplicationsBoardQuery_applications_disqualificationLink_disqualification;
  justification: string | null;
  createdBy: ApplicationsBoardQuery_applications_disqualificationLink_createdBy;
}

export interface ApplicationsBoardQuery_applications {
  __typename: "Application";
  id: string;
  updatedAt: any;
  stage: ApplicationsBoardQuery_applications_stage;
  candidate: ApplicationsBoardQuery_applications_candidate;
  job: ApplicationsBoardQuery_applications_job;
  disqualificationLink: ApplicationsBoardQuery_applications_disqualificationLink | null;
}

export interface ApplicationsBoardQuery_jobs_workflow_stages {
  __typename: "Stage";
  id: string;
  name: string;
  description: string | null;
  type: StageType;
}

export interface ApplicationsBoardQuery_jobs_workflow {
  __typename: "Workflow";
  id: string;
  stages: ApplicationsBoardQuery_jobs_workflow_stages[] | null;
}

export interface ApplicationsBoardQuery_jobs {
  __typename: "Job";
  id: string;
  workflow: ApplicationsBoardQuery_jobs_workflow;
}

export interface ApplicationsBoardQuery {
  applications: (ApplicationsBoardQuery_applications | null)[];
  jobs: (ApplicationsBoardQuery_jobs | null)[];
}

export interface ApplicationsBoardQueryVariables {
  jobIds: string[];
}
