import { PrismaBinding, PrismaClient } from '@vats/prisma'
import { ApolloServer, makeExecutableSchema } from 'apollo-server'
import fs from 'fs'
import { IncomingMessage } from 'http'
import path from 'path'
import { resolvers } from './resolvers'
import { getTypeDefs } from './schema'
import { AccessTokenPayload, decodeToken } from './utils'

const PRISMA_URL = `${process.env.PRISMA_ENDPOINT}/${process.env.PRISMA_SERVICE}/${
  process.env.PRISMA_STAGE
}`

const prismaBinding = new PrismaBinding({
  endpoint: PRISMA_URL,
  secret: process.env.PRISMA_SECRET,
})

const prismaClient = new PrismaClient({
  endpoint: PRISMA_URL,
  secret: process.env.PRISMA_SECRET,
})

interface ContextProps {
  req: IncomingMessage
}

export interface Context {
  db: PrismaBinding
  token?: AccessTokenPayload
  client: PrismaClient
}

const context = ({ req }: ContextProps): Context => {
  const authorization = req.headers.authorization
  let rawToken

  if (authorization) {
    rawToken = authorization.split(' ')[1]

    // const token = validateToken(rawToken)
    const token = decodeToken(rawToken) as AccessTokenPayload

    if (token) {
      return {
        ...req,
        db: prismaBinding,
        client: prismaClient,
        token,
      }
    }
  }

  return {
    ...req,
    db: prismaBinding,
    client: prismaClient,
  }
}

const typeDefs =
  process.env.NODE_ENV === 'development'
    ? // this for live reloading schema (dev because perf impact)
      getTypeDefs()
    : fs.readFileSync(path.resolve(__dirname, 'generated/server.graphql'), 'utf-8')

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
  // TODO: implement node resolver
  // https://github.com/prisma/prisma/issues/2225
  resolverValidationOptions: { requireResolversForResolveType: false },
})

// const schema = applyMiddleware(executableSchema, permissions) // ,filters)

const server = new ApolloServer({
  schema: executableSchema,
  context,
  introspection: true,
  playground: true,
  debug: process.env.NODE_ENV === 'development',
})

server.listen({ port: process.env.SERVER_PORT }).then(({ url }) => {
  console.log(`Server is running on ${url}`)
})
