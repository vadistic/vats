import { createStore, StoreConfig, StoreProps } from '@vats/store'
import {
  APPLICATION_CREATE_MUTATION,
  APPLICATION_DELETE_MUTATION,
  APPLICATION_UPDATE_MUTATION,
  APPLICATIONS_DELETE_MANY_MUTATION,
  APPLICATIONS_QUERY,
  APPLICATIONS_UPDATE_MANY_MUTATION,
} from './graphql'

export interface ApplicationsStoreProps extends StoreProps {}

export const createAplicationsStore = (props: ApplicationsStoreProps) => {
  const state = {}

  const variables = { where: null }

  const data = { candidates: [] }

  const config: StoreConfig = {
    name: 'ApplicationsStore',
    autoFetch: true,
    debug: true,
    graphql: {
      query: APPLICATIONS_QUERY,
      createMutation: APPLICATION_CREATE_MUTATION,
      updateMutation: APPLICATION_UPDATE_MUTATION,
      deleteMutation: APPLICATION_DELETE_MUTATION,
      updateManyMutation: APPLICATIONS_UPDATE_MANY_MUTATION,
      deleteManyMutation: APPLICATIONS_DELETE_MANY_MUTATION,
    },
  }

  const storeProps = createStore({
    config,
    state,
    variables,
    data,
  })(props)

  return {
    ...storeProps,
  }
}
