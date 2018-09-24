/* tslint:disable */
// This file was automatically generated and should not be edited.

import { StageType } from "./..\\..\\..\\generated\\globalTypes";

// ====================================================
// GraphQL fragment: CardFragment
// ====================================================

export interface CardFragment_stage {
  __typename: "Stage";
  name: string;
  type: StageType;
}

export interface CardFragment_candidate_applications {
  __typename: "Application";
  id: string;
}

export interface CardFragment_candidate_comments {
  __typename: "Comment";
  id: string;
}

export interface CardFragment_candidate_tags {
  __typename: "Tag";
  id: string;
  label: string;
}

export interface CardFragment_candidate_avatar {
  __typename: "File";
  url: string;
  name: string;
}

export interface CardFragment_candidate {
  __typename: "Candidate";
  id: string;
  firstName: string;
  lastName: string;
  metaCompany: string | null;
  metaPosition: string | null;
  links: string[];
  applications: CardFragment_candidate_applications[] | null;
  comments: CardFragment_candidate_comments[] | null;
  tags: CardFragment_candidate_tags[] | null;
  avatar: CardFragment_candidate_avatar | null;
}

export interface CardFragment {
  __typename: "Application";
  id: string;
  updatedAt: any;
  stage: CardFragment_stage;
  candidate: CardFragment_candidate;
}
