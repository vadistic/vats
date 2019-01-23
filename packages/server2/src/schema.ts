import { gql as gqlTag, makeExecutableSchema } from 'apollo-server'
import { importSchema } from 'graphql-import'

import { gqlImport } from './gql-import'
import { gql } from './gql-tag'

export const User = gql`
  type User {
    id: ID! @unique
    name: String!
  }
`

export const Query = gql`
  type Query {
    user(where: UserWhereUniqueInput!): User
    users(
      where: UserWhereInput
      orderBy: UserOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [User]!
    me: User!
  }
`

export const typeDefs = gqlTag(
  importSchema(
    gql`
      # import * from 'src/generated/prisma.graphql'

      ${Query}
    `,
  ),
)

// For typings generation only
export const schema = makeExecutableSchema({
  typeDefs,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
})
