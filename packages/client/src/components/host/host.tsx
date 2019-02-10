import { DocumentNode } from 'graphql'
import React, { useMemo } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { filterNull, tuplify, useInspectedReducer } from '../../utils'
import {
  HostActionType,
  hostReducerFactory,
  IHostActions,
  IHostState,
  IIntristicActions,
} from './reducer'

export enum HostType {
  Single = 'SINGLE',
  Multi = 'MULTI',
}

export type InitFn<State, InitArg> = ((initArg: InitArg) => State) | ((initArg?: InitArg) => State)

export type FilterFn<Value, State> = (arr: Value, state: State) => Value

export interface IHostConfig<Value, State, CustomActions, InitArg> {
  name: string
  propName: string
  type: HostType
  filter?: FilterFn<Value, State>
  reducer: React.Reducer<any, any>
  init: InitFn<State, InitArg>
  query: DocumentNode
  updateMutation?: DocumentNode
  resetOnInitArgChange?: boolean
}

export interface IHostContext<Value, State, CustomActions, InitArg> {
  value: Value
  dispatch: React.Dispatch<IHostActions | CustomActions>
  state: State
}

export type IHostProps<InitArg> = InitArg extends string | number | boolean | object
  ? {
      initArg: InitArg
    }
  : {
      initArg?: undefined
    }

export const hostFactory = <
  Value,
  State extends IHostState,
  CustomActions extends IIntristicActions,
  InitArg
>({
  name,
  propName,
  type,
  filter,
  reducer,
  init,
  query,
  updateMutation,
  resetOnInitArgChange = true,
}: IHostConfig<Value, State, CustomActions, InitArg>) => {
  const Context = React.createContext<IHostContext<Value, State, CustomActions, InitArg>>({} as any)

  const useContext = () => React.useContext(Context)

  const hostReducer = hostReducerFactory<Value, State, CustomActions, InitArg>({
    name,
    propName,
    type,
    filter,
    query,
    reducer,
    init,
    updateMutation,
  })

  const useReducer = (initArg?: InitArg) => {
    // this assertion on initArg is fine - just allowing undefined if init fn does it all
    const [state, dispatch] = useInspectedReducer(hostReducer, initArg as any, init, name)

    if (initArg && resetOnInitArgChange) {
      useMemo(() => {
        dispatch({ type: HostActionType.Reset, initArg })
      }, [initArg])
    }

    return tuplify([state, dispatch])
  }

  const Host: React.FC<IHostProps<InitArg>> = ({ initArg, children }) => {
    const [state, dispatch] = useReducer(initArg)

    const { data } = useQuery(query, {
      variables: state.variables,
    })

    if (!data) {
      console.error(`Host ${name}: query returned undefined`)
      return null
    }

    const value = data[propName]

    if (!value) {
      console.error(`Host ${name}: query empty or null`)
      return null
    }

    if (type === HostType.Multi) {
      const values = useMemo(() => {
        const nonNullValues = filterNull(value) as Value & Array<unknown>

        if (nonNullValues.length === 0) {
          console.error(`Host ${name}: collection empty`)
        }

        if (filter) {
          return filter(nonNullValues, state)
        }

        return nonNullValues
      }, [data, state])

      return (
        <Context.Provider value={{ value: values, dispatch, state }}>{children}</Context.Provider>
      )
    } else {
      return <Context.Provider value={{ value, dispatch, state }}>{children}</Context.Provider>
    }
  }

  return { Host, Context, useReducer, useContext }
}
