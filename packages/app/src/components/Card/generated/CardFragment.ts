/* tslint:disable */
// This file was automatically generated and should not be edited.

import { StageType } from "./..\\..\\..\\generated\\globalTypes";

// ====================================================
// GraphQL fragment: CardFragment
// ====================================================

export interface CardFragment_tags {
  __typename: "Tag";
  label: string;
}

export interface CardFragment_applications_stage {
  __typename: "Stage";
  id: string;
  name: string;
  type: StageType;
}

export interface CardFragment_applications {
  __typename: "Application";
  id: string;
  updatedAt: any;
  stage: CardFragment_applications_stage;
}

export interface CardFragment_avatar {
  __typename: "File";
  url: string;
  name: string;
}

export interface CardFragment {
  __typename: "Candidate";
  id: string;
  links: string[];
  emails: string[];
  phones: string[];
  source: string[];
  metaCompany: string | null;
  metaPosition: string | null;
  metaHeadline: string | null;
  tags: CardFragment_tags[] | null;
  applications: CardFragment_applications[] | null;
  firstName: string;
  lastName: string;
  avatar: CardFragment_avatar | null;
}
