import React, { useMemo } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { filterNull } from '../../utils'
import { HostContext } from './context'
import { HostUseReducer } from './reducer'
import { HostType, IHostTyping } from './types'

export interface IHostFactoryDependencies<HostTyping extends IHostTyping> {
  useReducer: HostUseReducer<HostTyping>
  Context: HostContext<HostTyping>
}

const hostLog = (state: IHostTyping['state'], ...print: string[]) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(`Host ${state.config.displayName}/component: `, ...print)
    console.warn(`STATE:`, state)
  }
}

export const hostComponentFactory = <HostTyping extends IHostTyping>(
  config: HostTyping['config'],
  { useReducer, Context }: IHostFactoryDependencies<HostTyping>,
) => {
  interface IHostProps {
    initArg?: HostTyping['types']['initArg']
  }

  const Host: React.FC<IHostProps> = ({ initArg, children }) => {
    const [state, dispatch] = useReducer(initArg)

    const { data } = useQuery(config.query, {
      variables: state.variables,
    })

    // this is error, because connection error or suspense bug
    if (!data) {
      hostLog(state, `query returned no undefined or null`)
      return null
    }

    const value = data[config.rootField]

    // TODO: allow handling NOT_FOUND falback
    if (!value) {
      hostLog(state, `query root value empty or null`)
      return null
    }

    if (config.type === HostType.Single) {
      return <Context.Provider value={{ value, dispatch, state }}>{children}</Context.Provider>
    }

    if (config.type === HostType.Multi) {
      // memo because filter fn is usually expensive
      const values = useMemo(() => {
        // TODO: evaluate if api ever return nulls mixed with data
        const nonNullValues = filterNull(value) as HostTyping['types']['value'] & Array<unknown>

        // here's not found fallback for multi host
        if (nonNullValues.length === 0) {
          hostLog(state, `query returned emoty array`)
          return ([] as unknown) as HostTyping['types']['value']
        }

        if (config.filter) {
          return config.filter(nonNullValues, state)
        }

        return nonNullValues
      }, [data, state])

      return (
        <Context.Provider value={{ value: values, dispatch, state }}>{children}</Context.Provider>
      )
    }

    // noop
    return null
  }

  return { Host }
}
