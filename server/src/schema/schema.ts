// For typescript types generation only (graphql-binding cannot handle .graphql files)
// https://github.com/prisma/prisma-binding/issues/202

import { makeExecutableSchema } from 'graphql-tools'
import { importSchema } from 'graphql-import'
import { SchemaComposer, TypeComposer } from 'graphql-compose'

import { Context } from '../utils'

const typeDefs = importSchema(__dirname + '/schema.graphql')

const typeComposer: TypeComposer<Context> = TypeComposer.create(typeDefs)

typeComposer.getType()

const schema = makeExecutableSchema({
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
  typeDefs: typeDefs,
})

export default schema
