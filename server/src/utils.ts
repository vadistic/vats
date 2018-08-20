import { Prisma } from './generated/prisma'
import { IGraphqlAuthenticationConfig } from 'graphql-authentication/dist/Config'

type GraphqlAuthentication = {
  requiredConfirmedEmailForLogin: boolean
  validatePassword: (value: any) => boolean
} & IGraphqlAuthenticationConfig

export interface Context {
  db: Prisma
  request: any
  graphqlAuthentication: GraphqlAuthentication
}
