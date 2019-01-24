import { gql as graphql } from 'apollo-server'
import { importSchema } from 'graphql-import'

import { gql, gqlImport } from '../utils'

const Types = gql`
  interface Node {
    id: ID!
  }

  input WorkspaceCreateInput {
    name: String!
    firstName: String
    lastName: String
    email: String!
    username: String!
    password: String!
  }

  input SignupInput {
    password: String!
    username: String!
    inviteId: ID!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input RefreshInput {
    token: String!
  }

  type AuthPayload {
    token: String!
    refresh: String!
  }

  type AccessPayload {
    token: String!
  }

  input InviteCreateInput {
    email: String!
  }
`

const Query = gql`
  type Query {
    ${gqlImport.require('Query').pick(['user', 'users']).fields}
  }
`

const Mutation = gql`
  type Mutation {
    createApplication(data: ApplicationCreateInput!): Application!
    createCandidate(data: CandidateCreateInput!): Candidate!
    createJob(data: JobCreateInput!): Job!
    createTask(data: TaskCreateInput!): Task!
  }
`

const fullSchemaString = importSchema(gql`
  # import * from 'src/generated/prisma.graphql'

  ${Query}
  ${Mutation}
  ${Types}
`)

export const typeDefs = graphql`
  ${fullSchemaString}
`
