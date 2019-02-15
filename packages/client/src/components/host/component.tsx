import React, { useMemo } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { filterNull } from '../../utils'
import { TGraphqlTyping } from './graphql-types'
import { HostType, IHostConfig, IHostState, IHostTyping } from './types'

// losely typed - does not matter
interface IHostComponentFactoryDependencies {
  useReducer: any
  Context: React.Context<any>
}

const hostLog = (state: any, ...print: string[]) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(`Host ${state.config.displayName}/component: `, ...print)
    console.warn(`STATE:`, state)
  }
}

export const hostComponentFactory = <
  HostTyping extends IHostTyping,
  GraphqlTyping extends TGraphqlTyping
>(
  config: IHostConfig<HostTyping, GraphqlTyping>,
  { useReducer, Context }: IHostComponentFactoryDependencies,
) => {
  interface IHostProps {
    initArg?: HostTyping['initArg']
  }

  const Host: React.FC<IHostProps> = ({ initArg, children }) => {
    const [state, dispatch] = useReducer(initArg)

    const { data } = useQuery(config.graphql.query, {
      variables: state.variables,
    })

    // this is error, because connection error or suspense bug
    if (!data) {
      hostLog(state, `query returned no undefined or null`)
      return null
    }

    const value = data[config.graphql.queryRoot]

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
        const nonNullValues = filterNull(value)

        // here's not found fallback for multi host
        if (nonNullValues.length === 0) {
          hostLog(state, `query returned emoty array`)
          return []
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
