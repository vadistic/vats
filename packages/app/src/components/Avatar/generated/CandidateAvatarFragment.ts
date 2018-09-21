/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CandidateAvatarFragment
// ====================================================

export interface CandidateAvatarFragment_avatar {
  __typename: "File";
  url: string;
  name: string;
}

export interface CandidateAvatarFragment {
  __typename: "Candidate";
  id: string;
  firstName: string;
  lastName: string;
  avatar: CandidateAvatarFragment_avatar | null;
}
