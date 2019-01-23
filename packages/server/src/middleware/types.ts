// tslint:disable-next-line:no-submodule-imports
import { ShieldRule } from 'graphql-shield/dist/types'
import { IMutation, IQuery } from '../utils'

export type RuleRemapped<T> = { [P in keyof T]?: ShieldRule }

export type IRuleQuery = RuleRemapped<IQuery>
export type IRuleMutation = RuleRemapped<IMutation>
