import { ActionsOfType, createAction, Enum } from '@martin_hotell/rex-tils'
import { client } from '../../apollo'
import { IStringIndexSignature } from '../../utils'
import { diffAutoUpdataData } from './diff'
import { IAction, IHostTyping } from './types'

/*
 * NOTE TO SELF: it's extremely verbose
 * but do not waste time again trying to improve it
 */

const log = (state: IHostTyping['state'], action: IAction, ...print: string[]) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(`Host ${state.config.displayName}/${action.type}: `, ...print)
    console.warn(`STATE:`, state, 'ACTION:', action)
  }
}

type HostActionReducer<HostTyping extends IHostTyping, Name extends string> = (
  state: HostTyping['state'],
  action: ActionsOfType<HostActionsUnion<HostTyping>, Name>,
) => HostTyping['state']

/*
 * ACTIONS
 */
const RESET = 'RESET'
interface IResetAction<HostTyping extends IHostTyping> {
  type: typeof RESET
  payload: HostTyping['types']['initArg']
}

const UPDATE = 'UPDATE'
interface IUpdateAction<HostTyping extends IHostTyping> {
  type: typeof UPDATE
  payload: HostTyping['types']['value']
}

const CUSTOM_UPDATE = 'CUSTOM_UPDATE'
interface ICustomUpdateAction<HostTyping extends IHostTyping> {
  type: typeof CUSTOM_UPDATE
  payload: HostTyping['types']['dataVariable']
}

const SET_STATE = 'SET_STATE'
interface ISetStateAction<HostTyping extends IHostTyping> {
  type: typeof SET_STATE
  payload: HostTyping['state']['local']
}

const SET_CONFIG = 'SET_CONFIG'
interface ISetConfigAction<HostTyping extends IHostTyping> {
  type: typeof SET_CONFIG
  payload: HostTyping['config']
}

export type HostActionsUnion<HostTyping extends IHostTyping> =
  | IResetAction<HostTyping>
  | IUpdateAction<HostTyping>
  | ICustomUpdateAction<HostTyping>
  | ISetStateAction<HostTyping>
  | ISetConfigAction<HostTyping>

export const HostActionTypes = Enum(RESET, UPDATE, CUSTOM_UPDATE, SET_STATE, SET_CONFIG)

export const hostActionsFactory = <HostTyping extends IHostTyping>() => {
  const Actions = {
    reset: (initArg: HostTyping['types']['initArg']) => createAction(RESET, initArg),
    update: (value: HostTyping['types']['value']) => createAction(UPDATE, value),
    customUpdate: (data: HostTyping['types']['dataVariable']) => createAction(CUSTOM_UPDATE, data),
    setState: (state: HostTyping['state']['local']) => createAction(SET_STATE, state),
    setConfig: (config: HostTyping['config']) => createAction(SET_CONFIG, config),
  }

  return { Actions }
}

/*
 * REDUCERS
 */

const reset: HostActionReducer<IHostTyping, typeof RESET> = (state, action) => {
  return {
    ...state,
    local: state.config.initState(action.payload),
    variables: state.config.initVariables(action.payload),
  }
}

const update: HostActionReducer<IHostTyping, typeof UPDATE> = (state, action) => {
  if (!state.config.updateMutation) {
    log(state, action, `missing graphql update mutation`)
    return state
  }

  // maybe fetch fresh data from server to awoid some edge case out-of-sync
  const queryCache = client.readQuery<IStringIndexSignature>({
    query: state.config.query,
    variables: state.variables,
  })

  if (queryCache === null) {
    log(state, action, `cached query read returned null`)
    return state
  }

  const cache = queryCache[state.config.rootField]

  const { updateData, queryData } = diffAutoUpdataData(cache, action.payload)

  if (updateData) {
    client.mutate({
      mutation: state.config.updateMutation,
      variables: {
        ...state.variables,
        data: updateData,
      },
    })

    client.writeQuery({
      query: state.config.query,
      variables: state.variables,
      data: { [state.config.rootField]: { ...cache, queryData } },
    })
  }

  return state
}

const customUpdate: HostActionReducer<IHostTyping, typeof SET_STATE> = (state, action) => {
  if (!state.config.updateMutation) {
    log(state, action, `missing graphql update mutation`)
    return state
  }

  client.mutate({
    mutation: state.config.updateMutation,
    variables: {
      ...state.variables,
      data: action.payload,
    },
  })

  return state
}

const setState: HostActionReducer<IHostTyping, typeof SET_STATE> = (state, action) => {
  return { ...state, local: { ...state.local, ...action.payload } }
}

const setConfig: HostActionReducer<IHostTyping, typeof SET_CONFIG> = (state, action) => {
  return { ...state, config: { ...state.config, ...action.payload } }
}

export const actionsReducers = {
  reset,
  update,
  customUpdate,
  setState,
  setConfig,
}
