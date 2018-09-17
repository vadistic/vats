import { ApolloServer } from 'apollo-server'
import { applyMiddleware } from 'graphql-middleware'
import { makeExecutableSchema } from 'graphql-tools'
import { Prisma } from 'prisma-binding'

import * as resolvers from './resolvers'
import { prismaTypeDefs, typeDefs } from './schema/schema'
import { validateToken } from './validateToken'

// tslint:disable: no-console

export const prismaRouter = (endpoint: string) =>
  new Prisma({
    typeDefs: prismaTypeDefs,
    endpoint,
    debug: true,
    secret: process.env.PRISMA_SECRET,
  })

export const prisma = new Prisma({
  typeDefs: prismaTypeDefs,
  endpoint: `${process.env.PRISMA_ENDPOINT}/${process.env.PRISMA_SERVICE}/${
    process.env.PRISMA_STAGE
  }`,
  debug: true,
  secret: process.env.PRISMA_SECRET,
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
