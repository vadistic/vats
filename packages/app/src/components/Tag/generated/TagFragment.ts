/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TagFragment
// ====================================================

export interface TagFragment_tags {
  __typename: "Tag";
  id: string;
  label: string;
}

export interface TagFragment {
  __typename: "Candidate";
  id: string;
  tags: TagFragment_tags[] | null;
}
