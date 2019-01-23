import { allow, shield } from 'graphql-shield'
// tslint:disable-next-line:no-submodule-imports
import { ShieldRule } from 'graphql-shield/dist/types'

import { IMutation, IQuery } from '../utils'

type RuleMap<T> = { [K in keyof T]: ShieldRule }

const queryPermissions: RuleMap<IQuery> = {
  users: allow,
}

const mutationPermissions: RuleMap<IMutation> = {}

export const permissions = shield({})
