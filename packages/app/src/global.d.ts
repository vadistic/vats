declare module '*.graphql' {
  import { DocumentNode } from 'graphql'

  const value: {
    [key: string]: DocumentNode
  }
  export = value
}
