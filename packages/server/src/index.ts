import { ApolloServer, makeExecutableSchema } from 'apollo-server'
import fs from 'fs'
import { IncomingMessage } from 'http'
import path from 'path'
import { Prisma as PrismaBinding } from 'prisma-binding'

import { Prisma as PrismaClient } from './generated/prisma-client'
import { resolvers } from './resolvers'
import { decodeToken, IAccessTokenPayload } from './utils'

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

interface IContextProps {
  req: IncomingMessage
}

export interface IContext {
  db: PrismaBinding
  token?: IAccessTokenPayload
  client: PrismaClient
}

const context = ({ req }: IContextProps): IContext => {
  const authorization = req.headers.authorization
  let rawToken

  if (authorization) {
    rawToken = authorization.split(' ')[1]

    // const token = validateToken(rawToken)
    const token = decodeToken(rawToken) as IAccessTokenPayload

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

const executableSchema = makeExecutableSchema({
  typeDefs: fs.readFileSync(path.resolve(__dirname, 'generated/server.graphql'), 'utf-8'),
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

server.listen({ port }, () =>
  // tslint:disable-next-line:no-console
  console.log(`Server is running on http://localhost:${port}`),
)

export default server
