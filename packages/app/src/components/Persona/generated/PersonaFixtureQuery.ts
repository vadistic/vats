/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PersonaFixtureQuery
// ====================================================

export interface PersonaFixtureQuery_candidates_avatar {
  __typename: "File";
  url: string;
  name: string;
}

export interface PersonaFixtureQuery_candidates {
  __typename: "Candidate";
  id: string;
  firstName: string;
  lastName: string;
  metaCompany: string | null;
  metaHeadline: string | null;
  avatar: PersonaFixtureQuery_candidates_avatar | null;
}

export interface PersonaFixtureQuery {
  candidates: (PersonaFixtureQuery_candidates | null)[];
}
