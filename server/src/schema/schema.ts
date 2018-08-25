// Exposes exectutable schema for graphql-binding type deficition
// https://github.com/prisma/prisma-binding/issues/202

import { makeExecutableSchema } from 'graphql-tools'
import { importSchema, parseImportLine } from 'graphql-import'
import { parse, print, ObjectTypeDefinitionNode } from 'graphql'
import { diffLines } from 'diff'
import * as fs from 'fs'

const typeDefs = importSchema(__dirname + '/schema.graphql')

export const schema = makeExecutableSchema({
  typeDefs,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
})
