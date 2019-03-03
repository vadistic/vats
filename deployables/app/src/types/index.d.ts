import { DocumentNode } from 'graphql'

declare module 'gql-tag' {
  const gql: (literals: any, ...placeholders: any[]) => DocumentNode
  export default gql
}
