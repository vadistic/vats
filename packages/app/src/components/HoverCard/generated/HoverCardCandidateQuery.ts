/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HoverCardCandidateQuery
// ====================================================

export interface HoverCardCandidateQuery_candidate_avatar {
  __typename: "File";
  url: string;
  name: string;
}

export interface HoverCardCandidateQuery_candidate {
  __typename: "Candidate";
  id: string;
  firstName: string;
  lastName: string;
  metaCompany: string | null;
  metaHeadline: string | null;
  emails: string[];
  phones: string[];
  links: string[];
  avatar: HoverCardCandidateQuery_candidate_avatar | null;
}

export interface HoverCardCandidateQuery {
  candidate: HoverCardCandidateQuery_candidate | null;
}

export interface HoverCardCandidateQueryVariables {
  id: string;
}
