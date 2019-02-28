// tslint:disable-next-line:no-implicit-dependencies
import * as f from 'faker'
// tslint:disable-next-line:no-implicit-dependencies
import { Options } from 'graphql-binding'
// tslint:disable-next-line:no-implicit-dependencies
import * as R from 'ramda'

import { EMOJI } from './emoji'

export const randomConnectMany = (to: List<any>, max: number = 1) =>
  R.times(() => ({ id: to.random().id }), f.random.number(max))

export const randomFn = <T, Y>(...fn: Array<(...args: T[]) => Y>) => (...args: T[]) =>
  fn[f.random.number(fn.length - 1)](...args)

export const halfTimes = <T>(input: T): T | undefined => (f.random.boolean() ? input : undefined)

export class List<T> {
  arr: T[] = []

  random = () => f.random.arrayElement(this.arr)
}

const SOCIAL_MEDIA = [`github.com/`, `twitter.com/`, `linkedin.com/in/`, `facebook.com/`]

export const fakeSocialLink = () => f.random.arrayElement(SOCIAL_MEDIA) + f.internet.userName()

export const fakeEmoji = () => f.random.arrayElement(EMOJI)

// function allowing to finish seeding in case of some network issues
const TIMEOUT = 50
const RETRY = 15
export const attempt = async <
  T extends (args: any, info?: string, options?: Options) => ReturnType<T>
>(
  fn: T,
  args: T extends (args: infer A) => any ? A : never,
  info?: string,
  options?: Options,
) => {
  for (let i = 0; i < RETRY; i++) {
    try {
      const res = await fn(args, info, options)
      return res
    } catch (err) {
      setTimeout(() => {
        console.log(i)
      }, TIMEOUT)

      console.log('Error! Attempting again...', i + 1, err)
    }
  }
  throw new Error(`Query failed after ${RETRY} attempts`)
}
