import gql from 'graphql-tag'

export const schema = gql`
  extend type Query {
    localField: String!
    localType: LocalType!
  }

  type LocalType {
    id: ID!
    name: String!
  }
`

// for graphql-code-generator
export default schema
