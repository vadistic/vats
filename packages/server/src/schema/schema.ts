// Exposes exectutable schema for graphql-binding type deficition
// https://github.com/prisma/prisma-binding/issues/202

import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'
import * as path from 'path'

export const typeDefs = importSchema(path.join(__dirname, '../generated/server.graphql'))

const schema = makeExecutableSchema({
  typeDefs,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
})

export default schema
