import { ApolloServer } from 'apollo-server'
import axios from 'axios'
import { applyMiddleware } from 'graphql-middleware'
import { makeExecutableSchema } from 'graphql-tools'
import * as jwt from 'jsonwebtoken'
import * as jwkToPem from 'jwk-to-pem'
import { Prisma } from 'prisma-binding'

import * as https from 'https'
import { filters, permissions } from './middleware'
import * as resolvers from './resolvers'
import { prismaTypeDefs, typeDefs } from './schema/schema'
import { IAccessTokenPayload } from './utils'
import { validateToken } from './validateToken'

// tslint:disable: no-console

const prismaRouter = (endpoint: string) =>
  new Prisma({
    typeDefs: prismaTypeDefs,
    endpoint, // the endpoint of the Prisma API
    debug: true, // log all GraphQL queries & mutations sent to the Prisma API
    secret: process.env.PRISMA_SECRET, // only needed if specified in `database/prisma.yml` (value set in `.env`)
  })

const prisma = new Prisma({
  typeDefs: prismaTypeDefs,
  endpoint: `${process.env.PRISMA_ENDPOINT}/${process.env.PRISMA_SERVICE}/${
    process.env.PRISMA_STAGE
  }`, // the endpoint of the Prisma API
  debug: true, // log all GraphQL queries & mutations sent to the Prisma API
  secret: process.env.PRISMA_SECRET, // only needed if specified in `database/prisma.yml` (value set in `.env`)
})

// main context
const context = ({ req }) => {
  const authorization = req.headers.authorization
  let rawToken

  if (authorization) {
    rawToken = authorization.split(' ')[1]

    const token = validateToken(rawToken)

    console.log(token)
    if (token) {
      return {
        ...req,
        db: prisma,
        token,
      }
    }
  }

  return {
    ...req,
    db: prisma,
  }
}

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: { requireResolversForResolveType: false },
})

const schema = applyMiddleware(executableSchema) // ,filters ,permissions)

const server = new ApolloServer({
  schema,
  context,
})

const port = process.env.PORT || 4000

server.listen({ port }, () =>
  // tslint:disable-next-line:no-console
  console.log(`Server is running on http:// localhost:${port}`)
)
