/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HoverCardUserQuery
// ====================================================

export interface HoverCardUserQuery_user_avatar {
  __typename: "File";
  url: string;
  name: string;
}

export interface HoverCardUserQuery_user {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  position: string | null;
  email: string;
  username: string;
  lastLogin: any | null;
  avatar: HoverCardUserQuery_user_avatar | null;
}

export interface HoverCardUserQuery {
  user: HoverCardUserQuery_user | null;
}

export interface HoverCardUserQueryVariables {
  id: string;
}
