import { gql } from '../utils'

const WorkspaceCreateInput = gql`
  input WorkspaceCreateInput {
    name: String!
    firstName: String
    lastName: String
    email: String!
    username: String!
    password: String!
  }
`

const SignupInput = gql`
  input SignupInput {
    password: String!
    username: String!
    inviteId: ID!
  }
`

const LoginInput = gql`
  input LoginInput {
    email: String!
    password: String!
  }
`

const RefreshInput = gql`
  input RefreshInput {
    token: String!
  }
`

const AuthPayload = gql`
  type AuthPayload {
    token: String!
    refresh: String!
  }
`

const AccessPayload = gql`
  type AccessPayload {
    token: String!
  }
`

const InviteCreateInput = gql`
  input InviteCreateInput {
    email: String!
  }
`

export const authSchema = gql`
  ${WorkspaceCreateInput}
  ${SignupInput}
  ${LoginInput}
  ${RefreshInput}
  ${AuthPayload}
  ${AccessPayload}
  ${InviteCreateInput}
`
