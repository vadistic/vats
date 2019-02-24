import React, { useContext, useMemo } from 'react'
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

  const HostProvider: React.FC<IHostProps> = ({ initArg, children }) => {
    const [state, dispatch] = useReducer(initArg)

    return <Context.Provider value={{ value: null, dispatch, state }}>{children}</Context.Provider>
  }

  const HostQuery: React.FC = ({ children }) => {
    const { dispatch, state } = useContext(Context)

    const { data } = useQuery(config.graphql.query, {
      variables: state.variables,
      suspend: true,
    })

    // this is error, because connection error or suspense bug
    if (!data) {
      hostLog(state, `query returned no data`)
      return null
    }

    const value = data[config.graphql.queryRoot]

    const values = useMemo(() => {
      if (config.type === HostType.Multi) {
        const queryValue = data[config.graphql.queryRoot]

        if (!queryValue) {
          return []
        }

        // TODO: evaluate if api ever return nulls mixed with data
        const nonNullValues = filterNull(queryValue)

        if (config.filter) {
          return config.filter(nonNullValues, state)
        }

        return nonNullValues
      }

      return []
    }, [data, state])

    if (config.type === HostType.Single) {
      if (!value) {
        hostLog(state, `host value empty or null`)
        return null
      }

      return <Context.Provider value={{ value, dispatch, state }}>{children}</Context.Provider>
    }

    if (config.type === HostType.Multi) {
      if (values.length === 0) {
        hostLog(state, `host value empty or null`)
        return null
      }

      return (
        <Context.Provider value={{ value: values, dispatch, state }}>{children}</Context.Provider>
      )
    }

    // noop
    return null
  }

  const Host: React.FC<IHostProps> = ({ initArg, children }) => (
    <HostProvider initArg={initArg}>
      <HostQuery>{children}</HostQuery>
    </HostProvider>
  )

  return { Host, HostQuery, HostProvider }
}
