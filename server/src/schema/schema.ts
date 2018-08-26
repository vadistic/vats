// Exposes exectutable schema for graphql-binding type deficition
// https://github.com/prisma/prisma-binding/issues/202

import { makeExecutableSchema } from 'graphql-tools'
import { importSchema } from 'graphql-import'

const typeDefs = importSchema(__dirname + '/schema.graphql')

const schema = makeExecutableSchema({
  typeDefs,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
})

export default schema