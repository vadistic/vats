import { gql as graphql } from 'apollo-server'
import { importSchema } from 'graphql-import'

import { buildSchemaConfig, gql, gqlImport, IObjSchemaFieldConfig, SchemaConfig } from '../utils'
import { authSchema } from './auth'
import { connectionsSchema } from './connections'

export const singleQueryArguments = gql`
where: WhereUniqueInput!
`

export const multiQueryArguments = (name: string) => gql`
where: ${name}WhereInput, orderBy: ${name}OrderByInput, skip: Int, after: String, before: String, first: Int, last: Int
`

const schemaConfig: SchemaConfig = {
  user: {
    query: true,
    mutation: {
      update: true,
    },
  },
  candidate: true,
  application: true,
  job: true,
  tag: true,
  source: true,
  task: true,
}

const defaultFieldConfig: IObjSchemaFieldConfig = {
  query: {
    single: true,
    multi: true,
    connection: true,
  },
  mutation: {
    create: true,
    upsert: true,
    update: true,
    delete: true,
    createMany: false,
    upsertMany: false,
    updateMany: false,
    deleteMany: false,
  },
}

export const { queryList, mutationList } = buildSchemaConfig(schemaConfig, defaultFieldConfig)

const Query = gql`
  type Query {
    ${gqlImport.require('Query').pick(queryList).fields}
  }
`

const Mutation = gql`
  type Mutation {
    ${gqlImport.require('Mutation').pick(mutationList).fields}
  }
`

export const allSchema = importSchema(gql`
  # import * from 'src/generated/prisma.graphql'

  ${Query}
  ${Mutation}

  ${authSchema}
  ${connectionsSchema}
`)

export const typeDefs = graphql`
  ${allSchema}
`
