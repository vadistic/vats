import { gql } from '../utils'

const WhereUniqueInput = gql`
  input WhereUniqueInput {
    id: ID!
  }
`

const Connect = gql`
  input Connect {
    connect: WhereUniqueInput
  }
`

const ConnectMany = gql`
  input ConnectMany {
    connect: [WhereUniqueInput!]
  }
`

const ConnectDisconnect = gql`
  input ConnectDisconnect {
    connect: WhereUniqueInput
    disconnect: WhereUniqueInput
  }
`

const ConnectDisconnectMany = gql`
  input ConnectDisconnectMany {
    connect: [WhereUniqueInput!]
    disconnect: [WhereUniqueInput!]
  }
`

export const connectionsSchema = gql`
  ${WhereUniqueInput}
  ${Connect}
  ${ConnectMany}
  ${ConnectDisconnect}
  ${ConnectDisconnectMany}
`
