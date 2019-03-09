import { NormalizedCacheObject } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import React from 'react'

export const ApolloContext = React.createContext({} as ApolloClient<NormalizedCacheObject>)

export interface ActionCallback<T> {
  onStart?: (arg: T) => void
  onUpdate?: (Arg: T) => void
  onReady?: (arg: T) => void
  onError?: (arg: T) => void
}
