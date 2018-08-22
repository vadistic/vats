// For typescript types generation only (graphql-binding cannot handle .graphql files)
// https://github.com/prisma/prisma-binding/issues/202

import { makeExecutableSchema } from 'graphql-tools'
import { importSchema } from 'graphql-import'

const typeDefs = importSchema(__dirname + '/schema.graphql')
const schema = makeExecutableSchema({
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
  typeDefs: typeDefs,
})

export default schema
