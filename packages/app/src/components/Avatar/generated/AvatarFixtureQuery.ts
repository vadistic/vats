/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AvatarFixtureQuery
// ====================================================

export interface AvatarFixtureQuery_candidates_avatar {
  __typename: "File";
  url: string;
  name: string;
}

export interface AvatarFixtureQuery_candidates {
  __typename: "Candidate";
  id: string;
  firstName: string;
  lastName: string;
  avatar: AvatarFixtureQuery_candidates_avatar | null;
}

export interface AvatarFixtureQuery {
  candidates: (AvatarFixtureQuery_candidates | null)[];
}
