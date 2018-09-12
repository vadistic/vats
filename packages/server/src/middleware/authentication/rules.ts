import * as dayjs from 'dayjs'
import { rule } from 'graphql-shield'
import { getClientIp, Request } from 'request-ip'

import { IContext } from '../../utils'

// tslint:disable: no-console

export const isAuthenticated = rule('isAuthenticated', { cache: 'no_cache' })(
  async (parent, args, ctx: IContext) =>
    ctx.userId !== undefined ? true : new Error(`Not Authenticated`)
)

export const isNotBlocked = rule('isNotBlocked', { cache: 'no_cache' })(
  async (parent, args, ctx: IContext) => {
    const { auth, resc, token, ...req } = ctx
    console.log(req)

    const ip = getClientIp(req as Request)

    const fromIP = ctx.auth.query.authenticationLogsConnection({
      where: {
        ip,
        createdAt_gte: dayjs()
          .subtract(15, 'minute')
          .toDate(),
        // add type fail}}})
      },
      first: 5,
    })

    const isBlocked = ctx.auth.exists.AuthenticationLog({
      OR: {
        AND: {
          ip,
          createdAt_gte: dayjs()
            .subtract(15, 'minute')
            .toDate(),
          // add type fail
        },
        AND: {},
      },
    })
  }
)
