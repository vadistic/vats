declare module 'graphql-tag' {
  import { DocumentNode } from 'graphql'
  const gql: (literals: any, ...placeholders: any[]) => DocumentNode

  export default gql
}
