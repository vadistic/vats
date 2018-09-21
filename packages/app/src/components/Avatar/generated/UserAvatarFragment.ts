/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserAvatarFragment
// ====================================================

export interface UserAvatarFragment_avatar {
  __typename: 'File'
  url: string
  name: string
}

export interface UserAvatarFragment {
  __typename: 'User'
  id: string
  firstName: string
  lastName: string
  avatar: UserAvatarFragment_avatar | null
}
