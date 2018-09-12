import { allow, shield } from 'graphql-shield'

import { IContext, IMiddlewareTypeMap } from '../../utils'

export const authenticationMap: IMiddlewareTypeMap = {
  Query: {},
  Mutation: {
    createWorkspace: allow,
    login: allow,
    signup: allow,
    refresh: allow,
  },
}

export const authentication = shield(authenticationMap, { whitelist: true })

