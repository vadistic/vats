import { rule, shield, allow } from 'graphql-shield'

export const permissions = shield({
  Query: {
    users: allow,
  },
  Mutation: {
    createUser: allow,
  },
})
