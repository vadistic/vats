import { DocumentNode } from 'graphql'

declare module 'graphql-tag' {
  const gql: (literals: any, ...placeholders: any[]) => DocumentNode

  export default gql
}
