/* tslint:disable */
// This file was automatically generated and should not be edited.

import { StageType } from "./..\\..\\..\\generated\\globalTypes";

// ====================================================
// GraphQL query operation: CardFixtureQuery
// ====================================================

export interface CardFixtureQuery_applications_stage {
  __typename: "Stage";
  name: string;
  type: StageType;
}

export interface CardFixtureQuery_applications_candidate_applications {
  __typename: "Application";
  id: string;
}

export interface CardFixtureQuery_applications_candidate_comments {
  __typename: "Comment";
  id: string;
}

export interface CardFixtureQuery_applications_candidate_tags {
  __typename: "Tag";
  id: string;
  label: string;
}

export interface CardFixtureQuery_applications_candidate_avatar {
  __typename: "File";
  url: string;
  name: string;
}

export interface CardFixtureQuery_applications_candidate {
  __typename: "Candidate";
  id: string;
  links: string[];
  applications: CardFixtureQuery_applications_candidate_applications[] | null;
  comments: CardFixtureQuery_applications_candidate_comments[] | null;
  tags: CardFixtureQuery_applications_candidate_tags[] | null;
  firstName: string;
  lastName: string;
  metaCompany: string | null;
  metaPosition: string | null;
  avatar: CardFixtureQuery_applications_candidate_avatar | null;
}

export interface CardFixtureQuery_applications {
  __typename: "Application";
  id: string;
  updatedAt: any;
  stage: CardFixtureQuery_applications_stage;
  candidate: CardFixtureQuery_applications_candidate;
}

export interface CardFixtureQuery {
  applications: (CardFixtureQuery_applications | null)[];
}
