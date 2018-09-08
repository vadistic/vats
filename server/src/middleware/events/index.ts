import { IContext, IMiddlewareTypeMap } from '../../utils'

export const events: IMiddlewareTypeMap = {
  Query: {},
  Mutation: {
    createCandidate: async (resolve, parent, args, ctx: IContext, info) => {
      const result = resolve(parent, args, ctx, info)

      ctx.db.mutation.createEvent({
        data: {
          type: 'DEFAULT',
          actorType: 'USER',
          actorUser: { connect: { id: ctx.auth.userId } },
          targetCandidate: { connect: { id: result.id } },
          workspace: { connect: { id: ctx.auth.workspaceId } },
        },
      })

      return result
    },
    createApplication: async (resolve, parent, args, ctx: IContext, info) => {
      const result = resolve(parent, args, ctx, info)

      ctx.db.mutation.createEvent({
        data: {
          type: 'DEFAULT',
          actorType: 'USER',
          actorUser: { connect: { id: ctx.auth.userId } },
          targetCandidate: { connect: { id: result.candidate.id } },
          workspace: { connect: { id: ctx.auth.workspaceId } },
        },
      })

      return result
    },
  },
}
