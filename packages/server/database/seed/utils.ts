import * as f from 'faker'
import * as R from 'ramda'
import { EMOJI } from './emoji'

export const randomConnectMany = (to: List<any>, max: number = 1) =>
  R.times(() => ({ id: to.random().id }), f.random.number(max))

export const randomFn = <T, Y>(...fn: Array<(...args: T[]) => Y>) => (...args: T[]) =>
  fn[f.random.number(fn.length - 1)](...args)

export class List<T> {
  public arr: T[] = []

  public random = () => f.random.arrayElement(this.arr)
}

const SOCIAL_MEDIA = [`github.com/`, `twitter.com/`, `linkedin.com/in/`, `facebook.com/`]

export const fakeSocialLink = () => f.random.arrayElement(SOCIAL_MEDIA) + f.internet.userName()

export const fakeEmoji = () => f.random.arrayElement(EMOJI)
