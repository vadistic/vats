import { HostContextValue } from './types'

export const reporter = (ctx: HostContextValue<any>, ...rest: any[]) => {
  if (ctx.config.debug) {
    console[ctx.status === 'ERROR' ? 'error' : 'log']('HOST DEBUG:', ...rest, 'context', ctx)
  }
}
