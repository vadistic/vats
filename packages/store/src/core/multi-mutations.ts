import { ElementType } from '@vats/utils'
import { ApolloClient } from 'apollo-client'
import { FetchResult } from 'apollo-link'
import { action, runInAction } from 'mobx'
import { StoreTyping } from './create'
import { GraphqlTyping } from './graphql-types'
import { StoreHelper } from './helper'
import { StoreObservables, StoreStatus } from './observables'

export interface CreateMultiStoreMutationsProps<Typing extends StoreTyping> {
  observables: StoreObservables<Typing, 'multi'>
  helper: StoreHelper<Typing>
  client: ApolloClient<any>
}

export type SingleMutationSelector =
  | {
      id: string
    }
  | {
      index: number
    }

export type MultiMutationSelector =
  | {
      ids: string[]
    }
  | {
      indicies: number[]
    }

export const createMultiStoreMutations = <
  Typing extends StoreTyping,
  Graphql extends GraphqlTyping
>({
  client,
  helper,
  observables,
}: CreateMultiStoreMutationsProps<Typing>) => {
  const handleErrors = action(helper.actionName('mutation error'), (res: FetchResult<any>) => {
    if (res.errors) {
      observables.meta.status = StoreStatus.error
      observables.meta.errors = [...res.errors]
    }
  })

  const singleSelector = (select: SingleMutationSelector) => {
    const value = observables.value.get() as any[]

    const id: string =
      ('id' in select && select.id) || ('index' in select && value[select.index].id)

    const index: number =
      ('index' in select && select.index) ||
      ('id' in select && value.find(el => el.id === select.id))

    return { id, index }
  }

  const multiSelector = (select: MultiMutationSelector) => {
    const value = observables.value.get() as any[]

    const ids: string[] =
      ('ids' in select && select.ids) ||
      ('indicies' in select && select.indicies.map(i => value[i].id)) ||
      []

    const indicies: number[] =
      ('indicies' in select && select.indicies) ||
      ('ids' in select && select.ids.map(id => value.findIndex(el => el.id === id))) ||
      []

    return {
      ids,
      indicies,
    }
  }

  /**
   * run create mutation
   */
  const createMutation = action(
    helper.actionName('create mutation'),
    async (
      createVariablesData: Graphql['createVariables']['data'],
      optimistic?: ElementType<Typing['value']>,
    ) => {
      const graphql = observables.config.graphql.createMutation
      const root = observables.config.roots.createMutation

      if (!graphql || !root) {
        throw Error(helper.actionName('create mutation missing'))
      }

      if (optimistic) {
        runInAction(helper.actionName('create mutation optimistic'), () => {
          helper.pushElement({
            ...optimistic,
            id: 'TEMP',
          })
        })
      }

      const res = await client.mutate<Graphql['createMutation'], Graphql['createVariables']>({
        variables: { data: createVariablesData },
        mutation: graphql,
        errorPolicy: 'all',
      })

      if (res.data) {
        runInAction(helper.actionName('create mutation response'), () => {
          if (optimistic) {
            helper.removeElementById('TEMP')
          }

          helper.pushElement(res.data![root])
        })

        return res.data
      }

      if (res.errors) {
        if (optimistic) {
          runInAction(helper.actionName('create mutation error'), () => {
            helper.removeElementById('TEMP')
          })
        }
        handleErrors(res)
      }
    },
  )

  /**
   * run update mutation
   */
  const updateMutation = action(
    helper.actionName('update mutation'),
    async (
      select: SingleMutationSelector,
      updateVariablesData: Graphql['updateVariables']['data'],
      optimistic?: Partial<ElementType<Typing['value']>>,
    ) => {
      const graphql = observables.config.graphql.updateMutation
      const root = observables.config.roots.updateMutation

      if (!root || !graphql) {
        throw Error(helper.actionName('update mutation missing'))
      }

      const { id, index } = singleSelector(select)

      const prev = helper.getElementByIndex(index)

      if (optimistic) {
        runInAction(helper.actionName('update mutation optimistic'), () => {
          helper.setElementByIndex(index, { ...prev, ...optimistic })
        })
      }

      const res = await client.mutate<Graphql['updateMutation'], Graphql['updateVariables']>({
        variables: { where: { id }, data: updateVariablesData },
        mutation: graphql,
        errorPolicy: 'all',
      })

      if (res.data) {
        runInAction(helper.actionName('update mutation response'), () => {
          helper.setElementById(id, res.data![root])
        })

        return res.data
      }

      if (res.errors) {
        if (optimistic) {
          runInAction(helper.actionName('update mutation error'), () => {
            helper.setElementById(id, prev)
          })
        }
        handleErrors(res)
      }
    },
  )

  /**
   * run delete mutation
   */
  const deleteMutation = action(
    helper.actionName('delete mutation'),
    async (select: SingleMutationSelector) => {
      const graphql = observables.config.graphql.deleteMutation
      const root = observables.config.roots.deleteMutation

      if (!root || !graphql) {
        throw Error(helper.actionName('delete mutation missing'))
      }

      const { id, index } = singleSelector(select)

      const prev = helper.removeElementByIndex(index)

      const res = await client.mutate<Graphql['deleteMutation'], Graphql['deleteVariables']>({
        variables: { where: { id } },
        mutation: graphql,
        errorPolicy: 'all',
      })

      if (res.data) {
        return res.data
      }

      if (res.errors) {
        runInAction(helper.actionName('delete mutation error'), () => {
          helper.pushElement(prev)
        })
        handleErrors(res)
      }
    },
  )

  /**
   * run update many mutation
   * for now: need optimistic, because there is no useful response to update store
   */
  const updateManyMutation = action(
    helper.actionName('update many mutation'),
    async (
      select: MultiMutationSelector,
      updateVariablesData: Graphql['updateVariables']['data'],
      optimistic: Partial<ElementType<Typing['value']>>,
    ) => {
      const graphql = observables.config.graphql.updateManyMutation
      const root = observables.config.roots.updateManyMutation

      if (!root || !graphql) {
        throw Error(helper.actionName('update mutation missing'))
      }

      const { ids, indicies } = multiSelector(select)

      const prev = indicies.map(index => helper.getElementByIndex(index))

      if (optimistic) {
        runInAction(helper.actionName('update mutation optimistic'), () => {
          indicies.forEach((index, i) => {
            helper.setElementByIndex(index, { ...prev[i], ...optimistic })
          })
        })
      }

      const res = await client.mutate<
        Graphql['updateManyMutation'],
        Graphql['updateManyVariables']
      >({
        variables: { where: { id_in: ids }, data: updateVariablesData },
        mutation: graphql,
        errorPolicy: 'all',
      })

      if (res.data) {
        return res.data
      }

      if (res.errors) {
        runInAction(helper.actionName('update mutation error'), () => {
          ids.forEach((id, i) => {
            helper.setElementById(id, { ...prev[i], ...optimistic })
          })
        })
        handleErrors(res)
      }
    },
  )

  /**
   * run update many mutation
   * for now: need optimistic, because there is no useful response to update store
   */
  const deleteManyMutation = action(
    helper.actionName('delete many mutation'),
    async (select: MultiMutationSelector) => {
      const graphql = observables.config.graphql.deleteManyMutation
      const root = observables.config.roots.deleteManyMutation

      if (!root || !graphql) {
        throw Error(helper.actionName('delete mutation missing'))
      }

      const { ids, indicies } = multiSelector(select)

      const prev = indicies.map(index => helper.getElementByIndex(index))

      runInAction(helper.actionName('delete mutation optimistic'), () => {
        ids.forEach(id => {
          helper.removeElementById(id)
        })
      })

      const res = await client.mutate<
        Graphql['deleteManyMutation'],
        Graphql['deleteManyVariables']
      >({
        variables: { where: { id_in: ids } },
        mutation: graphql,
        errorPolicy: 'all',
      })

      if (res.data) {
        return res.data
      }

      if (res.errors) {
        runInAction(helper.actionName('update mutation error'), () => {
          ids.forEach((id, i) => {
            helper.pushElement(prev[i])
          })
        })

        handleErrors(res)
      }
    },
  )

  const props = {
    update: updateMutation,
    create: createMutation,
    delete: deleteMutation,
    updateMany: updateManyMutation,
    deleteMany: deleteManyMutation,
  }

  return {
    props,
  }
}
