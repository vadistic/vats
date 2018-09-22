/* tslint:disable */
// This file was automatically generated and should not be edited.

import { StageType } from "./..\\..\\..\\generated\\globalTypes";

// ====================================================
// GraphQL query operation: CardFixtureQuery
// ====================================================

export interface CardFixtureQuery_candidates_tags {
  __typename: "Tag";
  label: string;
}

export interface CardFixtureQuery_candidates_applications_stage {
  __typename: "Stage";
  id: string;
  name: string;
  type: StageType;
}

export interface CardFixtureQuery_candidates_applications {
  __typename: "Application";
  id: string;
  updatedAt: any;
  stage: CardFixtureQuery_candidates_applications_stage;
}

export interface CardFixtureQuery_candidates_avatar {
  __typename: "File";
  url: string;
  name: string;
}

export interface CardFixtureQuery_candidates {
  __typename: "Candidate";
  id: string;
  links: string[];
  emails: string[];
  phones: string[];
  source: string[];
  metaCompany: string | null;
  metaPosition: string | null;
  metaHeadline: string | null;
  tags: CardFixtureQuery_candidates_tags[] | null;
  applications: CardFixtureQuery_candidates_applications[] | null;
  firstName: string;
  lastName: string;
  avatar: CardFixtureQuery_candidates_avatar | null;
}

export interface CardFixtureQuery {
  candidates: (CardFixtureQuery_candidates | null)[];
}
