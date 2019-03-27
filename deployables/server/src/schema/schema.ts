import { changeDefaultSource, gqlImport } from 'gql-import'
import { importSchema } from 'graphql-import'
import path from 'path'
import { buildSchemaConfig, gql, ObjSchemaFieldConfig, SchemaConfig } from '../utils'
import { authSchema } from './auth'
import { connectionsSchema } from './connections'

// TODO: gql-import require somehow from node_modules/@vats/prisma (without copying there to dist)
// better - improve gql import to parse export form prisma-client
// and hack prisma bindings forwarding to cut it from deps
changeDefaultSource(path.resolve(__dirname, '../generated/prisma.graphql'))

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
  job: true,
  application: true,
  tag: true,
  source: true,
  task: true,
  workflow: true,
}

const defaultFieldConfig: ObjSchemaFieldConfig = {
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
    updateMany: true,
    deleteMany: true,
  },
}

export const { queryList, mutationList } = buildSchemaConfig(schemaConfig, defaultFieldConfig)

export const getTypeDefs = () => {
  const Query = gql`
    type Query {
      ${gqlImport.get('Query').pick(queryList).fields}
    }
  `

  const Mutation = gql`
    type Mutation {
      ${gqlImport.get('Mutation').pick(mutationList).fields}
    }
  `

  const typeDefs = importSchema(gql`
    # import * from 'src/generated/prisma.graphql'

    ${Query}
    ${Mutation}

    ${authSchema}
    ${connectionsSchema}
  `)

  return typeDefs
}
