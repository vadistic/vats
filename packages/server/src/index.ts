import { ApolloServer } from 'apollo-server'
import { applyMiddleware } from 'graphql-middleware'
import { makeExecutableSchema } from 'graphql-tools'
import * as jwt from 'jsonwebtoken'
import { Prisma } from 'prisma-binding'

import { authentication, filters, permissions } from './middleware'
import * as resolvers from './resolvers'
import { typeDefs } from './schema/schema'
import { IAccessTokenPayload } from './utils'

const rescPrismaRouter = (endpoint: string) =>
  new Prisma({
    typeDefs: '../generated/rescPrisma.graphql',
    endpoint, // the endpoint of the Prisma API
    debug: true, // log all GraphQL queries & mutations sent to the Prisma API
    secret: process.env.PRISMA_SECRET, // only needed if specified in `database/prisma.yml` (value set in `.env`)
  })

const context = ({ req }) => {
  // check for valid acess token
  const authorization = req.headers.authorization

  if (authorization) {
    const accesToken = authorization.replace('Bearer ', '')
    const { userId, endpoint, scope } = jwt.verify(
      accesToken,
      process.env.APP_SECRET
    ) as IAccessTokenPayload

    if (userId && endpoint) {
      return {
        ...req,
        resc: rescPrismaRouter(endpoint),
        token: {
          userId,
          scope,
          endpoint,
        },
      }
    } else {
      throw new Error('Invalid authentication')
    }
  } else {
    return {
      ...req,
    }
  }
}

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: { requireResolversForResolveType: false },
})

const schema = applyMiddleware(executableSchema, authentication) // ,filters ,permissions)

const server = new ApolloServer({
  schema,
  context,
})

const port = process.env.PORT || 4000

server.listen({ port }, () =>
  // tslint:disable-next-line:no-console
  console.log(`Server is running on http://localhost:${port}`)
)
