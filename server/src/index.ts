import { ApolloServer } from 'apollo-server'
import { applyMiddleware } from 'graphql-middleware'
import { makeExecutableSchema } from 'graphql-tools'
import * as jwt from 'jsonwebtoken'
import { Prisma } from 'prisma-binding'

import filters from './middleware/filters'
import permissions from './middleware/permissions'
import * as resolvers from './resolvers'
import { typeDefs } from './schema/schema'
import { JWTPayload } from './utils';



const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma API
  debug: true, // log all GraphQL queries & mutations sent to the Prisma API
  secret: process.env.PRISMA_SECRET, // only needed if specified in `database/prisma.yml` (value set in `.env`)
})

const context = ({ req }) => {
  const authorization = req.headers.authorization

  if (authorization) {
    const token = authorization.replace('Bearer ', '')
    const auth = jwt.verify(token, process.env.APP_SECRET) as JWTPayload
    if (!(auth.userId && auth.workspaceId)) {
      throw new Error('Invalid Authorization Token')
    }

    return {
      ...req,
      db: prisma,
      auth,
    }
  } else {
    return {
      ...req,
      db: prisma,
    }
  }
}

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: { requireResolversForResolveType: false },
})

const schema = applyMiddleware(executableSchema, filters, permissions)

const server = new ApolloServer({
  schema,
  context,
})

const port = process.env.PORT || 4000

server.listen({ port }, () =>
  // tslint:disable-next-line:no-console
  console.log(`Server is running on http://localhost:${port}`)
)
