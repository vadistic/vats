/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HoverCardFixtureQuery
// ====================================================

export interface HoverCardFixtureQuery_candidates_avatar {
  __typename: "File";
  url: string;
  name: string;
}

export interface HoverCardFixtureQuery_candidates {
  __typename: "Candidate";
  id: string;
  firstName: string;
  lastName: string;
  metaCompany: string | null;
  metaHeadline: string | null;
  avatar: HoverCardFixtureQuery_candidates_avatar | null;
}

export interface HoverCardFixtureQuery {
  candidates: (HoverCardFixtureQuery_candidates | null)[];
}
