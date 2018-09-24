/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TagFixtureQuery
// ====================================================

export interface TagFixtureQuery_candidates_tags {
  __typename: "Tag";
  id: string;
  label: string;
}

export interface TagFixtureQuery_candidates {
  __typename: "Candidate";
  id: string;
  tags: TagFixtureQuery_candidates_tags[] | null;
}

export interface TagFixtureQuery {
  candidates: (TagFixtureQuery_candidates | null)[];
}
