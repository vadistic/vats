import { applyMiddleware } from 'graphql-middleware'
import { makeExecutableSchema } from 'graphql-tools'
import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from 'prisma-binding'

import filters from './middleware/filters'
import permissions from './middleware/permissions'
import * as resolvers from './resolvers'
import { typeDefs } from './schema/schema'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: { requireResolversForResolveType: false },
})

const protectedSchema = applyMiddleware(schema, permissions, filters)

const server = new GraphQLServer({
  schema: protectedSchema,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma API
      debug: true, // log all GraphQL queries & mutations sent to the Prisma API
      secret: process.env.PRISMA_SECRET, // only needed if specified in `database/prisma.yml` (value set in `.env`)
    }),
  }),
})

const port = process.env.PORT || 4000

server.start({ port }, () =>
  // tslint:disable-next-line:no-console
  console.log(`Server is running on http://localhost:${port}`)
)
