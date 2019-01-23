import { ApolloServer, makeExecutableSchema } from 'apollo-server'
import * as path from 'path'
import { Prisma } from 'prisma-binding'

import { IncomingMessage } from 'http'
import { resolvers } from './resolvers'
import { typeDefs } from './schema/schema'
import { decodeToken } from './utils/validate-token'

export const prismaBinding = new Prisma({
  typeDefs: path.resolve(__dirname, `./generated/prisma.graphql`),
  endpoint: `${process.env.PRISMA_ENDPOINT}/${process.env.PRISMA_SERVICE}/${process.env.PRISMA_STAGE}`,
  secret: process.env.PRISMA_SECRET,
  debug: true,
})

// main context
interface IContextProps {
  req: IncomingMessage
}

const context = ({ req }: IContextProps) => {
  const authorization = req.headers.authorization
  let rawToken

  if (authorization) {
    rawToken = authorization.split(' ')[1]

    // const token = validateToken(rawToken)
    const token = decodeToken(rawToken)

    if (token) {
      return {
        ...req,
        db: prismaBinding,
        token,
      }
    }
  }

  return {
    ...req,
    db: prismaBinding,
  }
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

server.listen({ port }, () =>
  // tslint:disable-next-line:no-console
  console.log(`Server is running on http:// localhost:${port}`),
)
