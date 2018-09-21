/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PersonaUserFragment
// ====================================================

export interface PersonaUserFragment_avatar {
  __typename: "File";
  url: string;
  name: string;
}

export interface PersonaUserFragment {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  position: string | null;
  avatar: PersonaUserFragment_avatar | null;
}
