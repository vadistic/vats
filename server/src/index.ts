import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from 'prisma-binding'

import filters from './middleware/filters'
import permissions from './middleware/permissions'
import * as resolvers from './resolvers'

const server = new GraphQLServer({
  typeDefs: 'src/schema/schema.graphql',
  resolvers,
  resolverValidationOptions: { requireResolversForResolveType: false },
  middlewares: [filters, permissions],
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

server.start({ port }, () => console.log(`Server is running on http://localhost:${port}`))
