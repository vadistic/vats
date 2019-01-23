import { IResolvers } from './generated/server'

interface IStringIndexSignature {
  [index: string]: any
}

type StringIndexed<T> = T & IStringIndexSignature

export const resolvers: StringIndexed<IResolvers> = {
  Query: {
    me: () => ({ id: '123', name: 'TestName', address: { city: '3city', street: 'Any' } }),
  },
}
