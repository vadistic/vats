import { allow, and, shield } from 'graphql-shield'

import { IRuleMutation, IRuleQuery } from '../../utils'

const Query: IRuleQuery = {
  // CUSTOM
  users: allow,
}

const Mutation: IRuleMutation = {}

export const permissions = shield({ Query, Mutation })
