import gql from 'graphql-tag'
import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { ToastHostQuery } from '../../generated/queries'
import { ToastGroup } from './toast-group'

export const ToastHost: React.FC = () => {
  const { data } = useQuery<ToastHostQuery>(toastHostQuery, {
    suspend: false,
    fetchPolicy: 'cache-only',
  })

  if (!data || data.toasts.length === 0) {
    return null
  }

  return <ToastGroup items={data.toasts} />
}

export const toastHostQuery = gql`
  query ToastHostQuery {
    toasts @client {
      id
      createdAt
      message
      type
    }
  }
`
