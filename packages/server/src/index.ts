import { ApolloServer, makeExecutableSchema } from 'apollo-server'
import fs from 'fs'
import { DocumentNode } from 'graphql'
import { IncomingMessage } from 'http'
import path from 'path'
import { Prisma as PrismaBinding } from 'prisma-binding'
import util from 'util'
import { Prisma as PrismaClient } from './generated/prisma-client'
import { resolvers } from './resolvers'
import { AccessTokenPayload, decodeToken } from './utils'

const prismaBinding = new PrismaBinding({
  typeDefs: path.resolve(__dirname, './generated/prisma.graphql'),
  endpoint: `${process.env.PRISMA_ENDPOINT}/${process.env.PRISMA_SERVICE}/${
    process.env.PRISMA_STAGE
  }`,
  secret: process.env.PRISMA_SECRET,
  debug: true,
})

const prismaClient = new PrismaClient({
  endpoint: `${process.env.PRISMA_ENDPOINT}/${process.env.PRISMA_SERVICE}/${
    process.env.PRISMA_STAGE
  }`,
  secret: process.env.PRISMA_SECRET,
  debug: true,
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

const main = async () => {
  let typeDefs: string | DocumentNode

  // tslint:disable-next-line: prefer-conditional-expression
  if (process.env.NODE_ENV === 'production') {
    typeDefs = await util.promisify(fs.readFile)(
      path.resolve(__dirname, 'generated/server.graphql'),
      'utf-8',
    )
  } else {
    typeDefs = (await import('./schema')).typeDefs
  }

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
  })

  const port = process.env.PORT || 4000

  server.listen({ port }, () => {
    if (process.env.NODE_ENV === 'production') {
      console.log(`Server is running on ${process.env.LIVE_ENDPOINT}`)
    } else {
      console.log(`Server is running on http://localhost:${port}`)
    }
  })

  return server
}

main()

export default main
