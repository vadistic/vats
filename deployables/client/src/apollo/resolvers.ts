import gql from 'graphql-tag'
import uuid from 'uuid/v4'
import { ToastType } from '../components'
import { ToastsQuery } from '../generated/queries'
import { MutationResolvers, QueryResolvers } from '../generated/resolvers'
import { Context } from './client'

export type QueryType = QueryResolvers<Context>
export type MutationType = MutationResolvers<Context>

const Query: QueryType = {
  localField: (parent, args, { cache }) => {
    // noop
    return 'resolved'
  },
}

const Mutation: MutationType = {
  createToast: (partent, args, { cache }) => {
    const toast = {
      __typename: 'Toast',
      id: uuid(),
      createdAt: new Date().toISOString(),
      message: args.data.message,
      type: args.data.type || ToastType.INFO,
    }

    const toastQuery = gql`
      query ToastsQuery {
        toasts @client {
          id
          createdAt
          type
          message
        }
      }
    `

    const prev = cache.readQuery<ToastsQuery>({
      query: toastQuery,
    })

    if (prev) {
      cache.writeQuery({
        query: toastQuery,
        data: {
          toasts: [...prev.toasts, toast],
        },
      })
    }

    return toast
  },
}

export const resolvers = {
  Query,
  Mutation,
}
