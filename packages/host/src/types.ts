import { Enum } from '@martin_hotell/rex-tils'

export interface HostTypingI<Value = {}, State = {}, Variables = {}> {
  value: Value
  state: State
  variables: Variables
}

export interface HostConfig<HostTyping extends HostTypingI> {
  initState: HostTyping['state']
  graphql: any
  relations?: any
}

// TODO: maybe differentiate between query update and mutation? MUTATE status?
export const HostStatus = Enum('INIT', 'LOADING', 'READY', 'ERROR', 'UPDATE')
export type HostStatus = Enum<typeof HostStatus>

export interface HostState<HostTyping extends HostTypingI> {
  state: HostTyping['state']
  value: HostTyping['value'] | null
  variables?: HostTyping['variables']
  config: HostConfig<HostTyping>
  status: HostStatus
}
