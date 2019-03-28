import gql from 'graphql-tag'
import { UserFragment } from '../../generated/fragments'

export const USER_QUERY = gql`
  query UserQuery($where: UserWhereUniqueInput!) {
    user(where: $where) {
      ...User
    }
  }

  ${UserFragment}
`

// export const USER_UPDATE_MUTATION = gql`
//   mutation UserUpdateMutation($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {

//   }
// `
