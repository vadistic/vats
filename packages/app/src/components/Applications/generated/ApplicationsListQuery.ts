/* tslint:disable */
// This file was automatically generated and should not be edited.

import { JobType, StageType } from "./..\\..\\..\\generated\\globalTypes";

// ====================================================
// GraphQL query operation: ApplicationsListQuery
// ====================================================

export interface ApplicationsListQuery_applications_job {
  __typename: "Job";
  id: string;
  name: string;
  department: string | null;
  type: JobType;
}

export interface ApplicationsListQuery_applications_candidate_applications {
  __typename: "Application";
  id: string;
}

export interface ApplicationsListQuery_applications_candidate_comments {
  __typename: "Comment";
  id: string;
}

export interface ApplicationsListQuery_applications_candidate_tags {
  __typename: "Tag";
  id: string;
  label: string;
}

export interface ApplicationsListQuery_applications_candidate_avatar {
  __typename: "File";
  url: string;
  name: string;
}

export interface ApplicationsListQuery_applications_candidate {
  __typename: "Candidate";
  id: string;
  firstName: string;
  lastName: string;
  metaCompany: string | null;
  metaPosition: string | null;
  links: string[];
  applications: ApplicationsListQuery_applications_candidate_applications[] | null;
  comments: ApplicationsListQuery_applications_candidate_comments[] | null;
  tags: ApplicationsListQuery_applications_candidate_tags[] | null;
  avatar: ApplicationsListQuery_applications_candidate_avatar | null;
}

export interface ApplicationsListQuery_applications_stage {
  __typename: "Stage";
  id: string;
  name: string;
  type: StageType;
}

export interface ApplicationsListQuery_applications_disqualificationLink_disqualification {
  __typename: "Disqualification";
  id: string;
  name: string;
}

export interface ApplicationsListQuery_applications_disqualificationLink_createdBy_avatar {
  __typename: "File";
  url: string;
  name: string;
}

export interface ApplicationsListQuery_applications_disqualificationLink_createdBy {
  __typename: "User";
  firstName: string;
  lastName: string;
  position: string | null;
  avatar: ApplicationsListQuery_applications_disqualificationLink_createdBy_avatar | null;
}

export interface ApplicationsListQuery_applications_disqualificationLink {
  __typename: "DisqualificationLink";
  id: string;
  updatedAt: any;
  disqualification: ApplicationsListQuery_applications_disqualificationLink_disqualification;
  justification: string | null;
  createdBy: ApplicationsListQuery_applications_disqualificationLink_createdBy;
}

export interface ApplicationsListQuery_applications {
  __typename: "Application";
  id: string;
  updatedAt: any;
  job: ApplicationsListQuery_applications_job;
  candidate: ApplicationsListQuery_applications_candidate;
  stage: ApplicationsListQuery_applications_stage;
  disqualificationLink: ApplicationsListQuery_applications_disqualificationLink | null;
}

export interface ApplicationsListQuery {
  applications: (ApplicationsListQuery_applications | null)[];
}

export interface ApplicationsListQueryVariables {
  jobIds: string[];
  stageIds: string[];
}
