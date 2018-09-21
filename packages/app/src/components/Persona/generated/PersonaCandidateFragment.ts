/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PersonaCandidateFragment
// ====================================================

export interface PersonaCandidateFragment_avatar {
  __typename: "File";
  url: string;
  name: string;
}

export interface PersonaCandidateFragment {
  __typename: "Candidate";
  id: string;
  firstName: string;
  lastName: string;
  metaCompany: string | null;
  metaHeadline: string | null;
  avatar: PersonaCandidateFragment_avatar | null;
}
