import React, { useContext, useMemo } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { cloneShallow } from '../../utils'
import { HostContext } from './context'

const queryLog = (state: any, ...print: string[]) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(`Host ${state.config.displayName}/component: `, ...print)
    console.warn(`STATE:`, state)
  }
}

export interface IHostQuery {
  context: HostContext<any>
}

export const HostQuery: React.FC<IHostQuery> = ({ context: Context, children }) => {
  const { state, config, dispatch } = useContext(Context)

  const { data } = useQuery(config.graphql.query, {
    variables: state.variables,
    suspend: true,
  })

  // this is error, because connection error or suspense bug
  if (!data) {
    queryLog(state, `query error`)
    return null
  }

  const queryValue = data[config.graphql.queryRoot]

  if (!queryValue) {
    queryLog(state, `rootQuery null value`)
    return null
  }

  // clone shallow is kind of hotfix
  // the issue is that apollo store is (& and provided filter fn could be) not immutable :/
  // and this can cause context not to update
  const value = useMemo(
    () =>
      config.filter ? config.filter(cloneShallow(queryValue), state) : cloneShallow(queryValue),
    [data, state],
  )

  return <Context.Provider value={{ value, state, config, dispatch }}>{children}</Context.Provider>
}
