import gql from 'graphql-tag'

export const schema = gql`
  extend type Query {
    localField: String!
    localType: LocalType!
    toasts: [Toast!]!
  }

  extend type Mutation {
    createToast(data: ToastInput!): Toast!
  }

  type LocalType {
    id: ID!
    name: String!
  }

  type Toast {
    id: ID!
    createdAt: DateTime!
    message: String!
    type: ToastType!
  }

  input ToastInput {
    message: String!
    type: ToastType!
  }

  enum ToastType {
    INFO
    SUCCESS
    BLOCKED
    WARNING
    SEVERE_WARNING
    ERROR
  }
`

// for graphql-code-generator
export default schema
