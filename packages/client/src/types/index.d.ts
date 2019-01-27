import { DocumentNode } from 'graphql'

declare module 'gql-tag' {
  export default function gql(
    literals: any,
    ...placeholders: any[]
  ): DocumentNode
}
