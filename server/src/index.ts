import { GraphQLServer } from 'graphql-yoga'
import { importSchema } from 'graphql-import'
import { Prisma } from 'prisma-binding'

import * as resolvers from './resolvers'
import { permissions } from './permissions'

const server = new GraphQLServer({
  typeDefs: 'src/schema/schema.graphql',
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
  middlewares: [permissions],
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma API
      debug: true, // log all GraphQL queries & mutations sent to the Prisma API
      // secret: 'mysecret123', // only needed if specified in `database/prisma.yml`
    }),
  }),
})

const port = process.env.PORT || 4000

server.start({ port }, () =>
  console.log(`Server is running on http://localhost:${port}`)
)
