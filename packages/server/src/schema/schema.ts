import { gql as graphql } from 'apollo-server'
import { importSchema } from 'graphql-import'

import { gql, gqlImport } from '../utils'

const User = gql`
  type User {
    ${gqlImport.require('User').exclude('password').fields}
  }
`

const CustomTypes = gql`
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

const Types = gql`
  ${User}
  ${CustomTypes}
`

const Query = gql`
  type Query {
    random: String!
    ${gqlImport.require('Query').pick(['user', 'users', 'candidate', 'candidates', 'job', 'jobs']).fields}
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

const stringifiedSchema = importSchema(gql`
  # import * from 'src/generated/prisma.graphql'

  ${Query}
  ${Mutation}
  ${Types}
`)

export const typeDefs = graphql`
  ${stringifiedSchema}
`
