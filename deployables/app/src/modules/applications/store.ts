import { createMultiStore, GraphqlTypingCreator, StoreConfig, StoreProps } from '@vats/store'
import { SortDirection } from '@vats/utils'
import { action } from 'mobx'
import { Selection, SelectionMode } from 'office-ui-fabric-react'
import React from 'react'
import {
  ApplicationCreateMutation,
  ApplicationCreateMutationVariables,
  ApplicationDeleteMutation,
  ApplicationDeleteMutationVariables,
  ApplicationsQuery,
  ApplicationsQuery_applications,
  ApplicationsQueryVariables,
  ApplicationsUpdateManyMutation,
  ApplicationsUpdateManyMutationVariables,
  ApplicationUpdateMutation,
  ApplicationUpdateMutationVariables,
} from '../../generated/queries'
import {
  APPLICATION_CREATE_MUTATION,
  APPLICATION_DELETE_MUTATION,
  APPLICATION_UPDATE_MUTATION,
  APPLICATIONS_DELETE_MANY_MUTATION,
  APPLICATIONS_QUERY,
  APPLICATIONS_UPDATE_MANY_MUTATION,
} from './graphql'

export type ApplicationsValue = ApplicationsQuery_applications[]
export type ApplicationsElement = ApplicationsQuery_applications

export interface ApplicationsValueProps {
  applications: ApplicationsValue
}
export interface ApplicationsElementProps {
  application: ApplicationsElement
}

export type ApplicationsGraphqlTyping = GraphqlTypingCreator<{
  createMutation: ApplicationCreateMutation
  createVariables: ApplicationCreateMutationVariables
  updateMutation: ApplicationUpdateMutation
  updateVariables: ApplicationUpdateMutationVariables
  deleteMutation: ApplicationDeleteMutation
  deleteVariables: ApplicationDeleteMutationVariables
  updateManyMutation: ApplicationsUpdateManyMutation
  updateManyVariables: ApplicationsUpdateManyMutationVariables
}>

export type ApplicationsStore = ReturnType<typeof createAplicationsStore>
export interface ApplicationsStoreProps extends StoreProps {}

export const ApplicationsContext = React.createContext<ApplicationsStore>({} as any)

export const createAplicationsStore = (props: ApplicationsStoreProps) => {
  const state = {
    sortBy: 'updatedAt',
    sortDirection: SortDirection.DESCENDING,
    keepSorted: false,
    selection: {
      instance: new Selection({
        getKey: (item: any) => item.id,
        selectionMode: SelectionMode.multiple,
        onSelectionChanged: () => {
          handleSelection()
        },
      }),
      indicies: [] as number[],
    },
  }

  const variables: ApplicationsQueryVariables = { where: {} }

  const data: ApplicationsQuery = { applications: [], workflows: [] }

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

  const store = createMultiStore({
    config,
    state,
    variables,
    data,
  })<ApplicationsValue, ApplicationsGraphqlTyping>(props)

  const handleSelection = action(`ApplicationsStore: selection change`, () => {
    store.state.selection.indicies = store.state.selection.instance.getSelectedIndices()
  })

  return store
}
