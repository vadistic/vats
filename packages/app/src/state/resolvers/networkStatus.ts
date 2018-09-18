import gql from 'graphql-tag'

export const updateNetworkStatus = (_, { isConnected }, { cache }) => {
  const data = {
    networkStatus: {
      __typename: 'NetworkStatus',
      isConnected,
    },
  }
  cache.writeData({ data })
  return null
}
