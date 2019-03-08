// tslint:disable-next-line:no-implicit-dependencies
import { Prisma } from 'prisma-binding'
import { Prisma as PrismaBinding } from '../src/prisma-binding'

export const prisma: any = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: `${process.env.PRISMA_ENDPOINT}/${process.env.PRISMA_SERVICE}/${
    process.env.PRISMA_STAGE
  }`,
  debug: true,
  secret: process.env.PRISMA_SECRET,
})

export const db: PrismaBinding = prisma
