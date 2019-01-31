import gql from 'graphql-tag'
import uuid from 'uuid/v4'
import { ToastType } from '../components'
import { ToastFragment } from '../generated/fragments'
import { ToastsQuery } from '../generated/queries'
import { MutationResolvers, QueryResolvers } from '../generated/resolvers'
import { IContext } from './client'

export type IQuery = QueryResolvers<IContext>
export type IMutation = MutationResolvers<IContext>

const Query: IQuery = {
  localField: (parent, args, { cache }) => {
    // noop
    return 'resolved'
  },
}

const Mutation: IMutation = {
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
        toasts {
          ...Toast
        }
      }
      ${ToastFragment}
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
