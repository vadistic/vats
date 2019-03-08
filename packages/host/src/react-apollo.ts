import { NormalizedCacheObject } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import React from 'react'

export const ApolloContext = React.createContext({} as ApolloClient<NormalizedCacheObject>)
