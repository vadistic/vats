import { ActionsOfType, createAction, Enum } from '@martin_hotell/rex-tils'
import { client } from '../../apollo'
import { ElementTypeOr, IStringIndexSignature } from '../../utils'
import { diffAutoUpdataData } from './diff'
import { IGraphqlMultiTyping, IHostGraphqlMultiConfig, TGraphqlTyping } from './graphql-types'
import { HostType, IAction, IHostConfig, IHostState, IHostTyping } from './types'

/*
 * NOTE TO SELF: it's extremely verbose
 * but do not waste time again trying to improve it
 *
 * (doing it again...)
 */

const log = (state: any, action: IAction, ...print: string[]) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(`Host ${state.config.displayName}/${action.type}: `, ...print)
    console.warn(`STATE:`, state, 'ACTION:', action)
  }
}

// helper only
type HostActionReducer<
  Name extends string,
  HostTyping extends IHostTyping = IHostTyping,
  GraphqlTyping extends TGraphqlTyping = TGraphqlTyping
> = (
  state: IHostState<HostTyping, any>,
  action: ActionsOfType<HostActionsUnion<HostTyping, any>, Name>,
) => IHostState<HostTyping, any>

/*
 * ACTIONS
 */
const UPDATE = 'UPDATE'
interface IUpdateAction<HostTyping extends IHostTyping, GraphqlTyping extends TGraphqlTyping> {
  type: typeof UPDATE
  payload: ElementTypeOr<HostTyping['value']>
}

const CUSTOM_UPDATE = 'CUSTOM_UPDATE'
interface ICustomUpdateAction<
  HostTyping extends IHostTyping,
  GraphqlTyping extends TGraphqlTyping
> {
  type: typeof CUSTOM_UPDATE
  payload: GraphqlTyping['updateMutationVariables']['data']
}

const RESET = 'RESET'
interface IResetAction<HostTyping extends IHostTyping, GraphqlTyping extends TGraphqlTyping> {
  type: typeof RESET
  payload: HostTyping['initArg']
}

const SET_STATE = 'SET_STATE'
interface ISetStateAction<HostTyping extends IHostTyping, GraphqlTyping extends TGraphqlTyping> {
  type: typeof SET_STATE
  payload: HostTyping['localState']
}

const SET_CONFIG = 'SET_CONFIG'
interface ISetConfigAction<HostTyping extends IHostTyping, GraphqlTyping extends TGraphqlTyping> {
  type: typeof SET_CONFIG
  payload: IHostConfig<HostTyping, GraphqlTyping>
}

export type HostActionsUnion<
  HostTyping extends IHostTyping,
  GraphqlTyping extends TGraphqlTyping
> =
  | IUpdateAction<HostTyping, GraphqlTyping>
  | ICustomUpdateAction<HostTyping, GraphqlTyping>
  | IResetAction<HostTyping, GraphqlTyping>
  | ISetStateAction<HostTyping, GraphqlTyping>
  | ISetConfigAction<HostTyping, GraphqlTyping>

export const HostActionTypes = Enum(RESET, UPDATE, CUSTOM_UPDATE, SET_STATE, SET_CONFIG)

export const hostActionsFactory = <
  HostTyping extends IHostTyping,
  GraphqlTyping extends TGraphqlTyping
>() => {
  const Actions = {
    reset: (initArg: HostTyping['initArg']) => createAction(RESET, initArg),
    update: (value: ElementTypeOr<HostTyping['value']>) => createAction(UPDATE, value),
    customUpdate: (data: GraphqlTyping['updateMutationVariables']['data']) =>
      createAction(CUSTOM_UPDATE, data),
    setState: (state: HostTyping['localState']) => createAction(SET_STATE, state),
    setConfig: (config: IHostConfig<HostTyping, GraphqlTyping>) => createAction(SET_CONFIG, config),
  }

  return { Actions }
}

/*
 * REDUCERS
 */

/*
 * RESET
 */

const reset: HostActionReducer<typeof RESET> = (state, action) => {
  return {
    ...state,
    local: state.config.initState(action.payload),
    variables: state.config.initVariables(action.payload),
  }
}

/*
 * UPDATE
 */

const update: HostActionReducer<typeof UPDATE> = (state, action) => {
  if (state.config.type !== HostType.Single) {
    log(state, action, `need to think how to implement it for multi host`)
    return state
  }

  // maybe fetch fresh data from server to awoid some edge case out-of-sync
  const queryCache = client.readQuery<IStringIndexSignature>({
    query: state.config.graphql.query,
    variables: state.variables,
  })

  if (queryCache === null) {
    log(state, action, `cached query read returned null`)
    return state
  }

  const cache = queryCache[state.config.graphql.queryRoot]

  const { updateData, queryData } = diffAutoUpdataData(cache, action.payload)

  if (updateData) {
    client.mutate({
      mutation: state.config.graphql.updateMutation,
      variables: {
        ...state.variables,
        data: updateData,
      },
    })

    client.writeQuery({
      query: state.config.graphql.query,
      variables: state.variables,
      data: { [state.config.graphql.queryRoot]: { ...cache, queryData } },
    })
  }

  return state
}

/*
 * CUSTOM_UPDATE
 */

const customUpdate: HostActionReducer<typeof CUSTOM_UPDATE> = (state, action) => {
  client.mutate({
    mutation: state.config.graphql.updateMutation,
    variables: {
      ...state.variables,
      data: action.payload,
    },
  })

  return state
}

/*
/*
 * SET_STATE
 */

const setState: HostActionReducer<typeof SET_STATE> = (state, action) => {
  return { ...state, local: { ...state.local, ...action.payload } }
}

/*
 * SET_CONFIG
 */

const setConfig: HostActionReducer<typeof SET_CONFIG> = (state, action) => {
  return { ...state, config: { ...state.config, ...action.payload } }
}

export const actionsReducers = {
  reset,
  update,
  customUpdate,
  setState,
  setConfig,
}
