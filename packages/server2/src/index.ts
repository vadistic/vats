import { ApolloServer, gql } from 'apollo-server'

import { resolvers } from './resolvers'
import { typeDefs } from './schema'

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const port = process.env.PORT || 4000

server.listen({ port }, () =>
  // tslint:disable-next-line:no-console
  console.log(`Server is running on http:// localhost:${port}`),
)
