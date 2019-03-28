import { createSingleStore, StoreConfig, StoreProps } from '@vats/store'
import React from 'react'
import { USER_QUERY } from './graphql'

export type CurrentUserStore = ReturnType<typeof createCurrentUserStore>

export interface CurrentUserStoreProps extends StoreProps {}

export const SingleUserContext = React.createContext<CurrentUserStoreProps>({} as any)

const createCurrentUserStore = (props: CurrentUserStoreProps) => {
  const state = { editable: false }

  // TODO: set during login
  const variables = { where: { email: 'vadistic@gmail.com' } }

  const data = { user: null }

  const config: StoreConfig = {
    name: 'currentUserStore',
    graphql: {
      query: USER_QUERY,
      // updateMutation: USER_UPDATE_MUTATION,
    },
    relations: {},
  }

  const store = createSingleStore({
    config,
    state,
    variables,
    data,
  })(props)

  return store
}
