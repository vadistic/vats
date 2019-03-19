import { ApolloClient } from 'apollo-client'
import { FetchResult } from 'apollo-link'
import { PreFilterFunction } from 'deep-diff'
import { action, runInAction, toJS } from 'mobx'
import { updateDiff } from '../diff'
import { StoreTyping } from './create'
import { GraphqlTyping } from './graphql-types'
import { StoreHelper } from './helper'
import { StoreObservables, StoreStatus } from './observables'

export interface CreateSingleStoreMutationsProps<Typing extends StoreTyping> {
  observables: StoreObservables<Typing, 'single'>
  helper: StoreHelper<Typing>
  client: ApolloClient<any>
}

export const createSingleStoreMutations = <
  Typing extends StoreTyping,
  Graphql extends GraphqlTyping
>({
  client,
  helper,
  observables,
}: CreateSingleStoreMutationsProps<Typing>) => {
  const handleErrors = action(helper.actionName('mutation error'), (res: FetchResult<any>) => {
    if (res.errors) {
      observables.meta.status = StoreStatus.error
      observables.meta.errors = [...res.errors]
    }
  })
  /**
   * run create mutation
   */
  const createMutation = action(
    helper.actionName('create mutation'),
    async (
      createVariablesData: Graphql['createVariables']['data'],
      optimistic?: Typing['value'],
    ) => {
      const root = observables.config.roots.createMutation
      const graphql = observables.config.graphql.createMutation

      if (!root || !graphql) {
        throw Error(helper.actionName('create mutation missing'))
      }

      const prev = observables.value.get()

      if (optimistic) {
        runInAction(helper.actionName('create mutation optimistic'), () => {
          helper.setValue({ ...prev, ...optimistic })
        })
      }

      const res = await client.mutate<Graphql['createMutation'], Graphql['createVariables']>({
        variables: { data: createVariablesData },
        mutation: graphql,
        errorPolicy: 'all',
      })

      if (res.data) {
        runInAction(helper.actionName('create mutation response'), () => {
          helper.setValue({ ...prev, ...res.data![root] })
        })

        return res.data
      }

      if (res.errors) {
        runInAction(helper.actionName('create mutation error'), () => {
          if (optimistic) {
            helper.setValue(prev)
          }
        })

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
      updateVariablesData: Graphql['updateVariables']['data'],
      optimistic?: Partial<Typing['value']>,
    ) => {
      const root = observables.config.roots.updateMutation
      const graphql = observables.config.graphql.updateMutation

      if (!root || !graphql) {
        throw Error(helper.actionName('update mutation missing'))
      }

      const prev = observables.value.get()

      if (optimistic) {
        runInAction(helper.actionName('update mutation optimistic'), () => {
          helper.setValue({ ...prev, ...optimistic })
        })
      }

      const id = observables.variables.where.id

      const res = await client.mutate<Graphql['updateMutation'], Graphql['updateVariables']>({
        variables: { where: { id }, data: updateVariablesData },
        mutation: graphql,
      })

      if (res.data) {
        runInAction(helper.actionName('update mutation response'), () => {
          helper.setValue({ ...prev, ...res.data![root] })
        })

        return res.data
      }

      if (res.errors) {
        runInAction(helper.actionName('update mutation error'), () => {
          if (optimistic) {
            helper.setValue(prev)
          }
        })
        handleErrors(res)
      }
    },
  )

  /**
   * run delete mutation
   */
  const deleteMutation = action(helper.actionName('delete mutation'), async () => {
    const root = observables.config.roots.deleteMutation
    const graphql = observables.config.graphql.deleteMutation

    if (!root || !graphql) {
      throw Error(helper.actionName('delete mutation missing'))
    }

    // TODO: no optimistic?

    const res = await client.mutate<Graphql['deleteMutation'], Graphql['deleteVariables']>({
      variables: { where: toJS(observables.variables.where) },
      mutation: graphql,
    })

    if (res.data) {
      return res.data
    }

    if (res.errors) {
      handleErrors(res)
    }
  })

  /**
   * run create mutation with current values
   */
  const autoCreate = action(helper.actionName('auto create mutation'), async () => {
    const root = observables.config.roots.createMutation
    const graphql = observables.config.graphql.createMutation

    if (!root || !graphql) {
      throw Error(helper.actionName('create mutation missing'))
    }

    const next = observables.value.get()

    // cannot autocreate without value
    if (typeof next !== 'object' || Object.keys(next).length === 0) {
      return
    }

    // optimistic
    helper.setValue({ ...next, id: 'new' })

    // TODO: test if diff's working with empty source
    const { updateData } = updateDiff({}, next, {
      map: observables.config.relations,
      prefilter: dataPrefilter,
    })

    const res = await client.mutate({
      variables: { data: updateData },
      mutation: graphql,
    })

    if (res.data) {
      runInAction(helper.actionName('auto create mutation response'), () => {
        helper.setValue(res.data![root])
      })
      return res.data
    }

    if (res.errors) {
      handleErrors(res)
    }
  })

  /**
   * run update mutation by providing partial of next query value
   */
  const autoUpdate = action(
    helper.actionName('auto update mutation'),
    async (next: Partial<Typing['value']>) => {
      const root = observables.config.roots.updateMutation
      const graphql = observables.config.graphql.updateMutation

      if (!root || !graphql) {
        throw Error(helper.actionName('update mutation missing'))
      }

      const prev = observables.value.get()

      // get nextValue keys from prevValue
      const prevPartial = Object.keys(next).reduce(
        (acc, key) => ({ ...acc, [key]: (prev as any)[key] }),
        {},
      )

      const id = observables.variables.where.id

      const { updateData } = updateDiff(prevPartial, next, {
        map: observables.config.relations,
        prefilter: dataPrefilter,
      })

      if (!updateData) {
        return
      }

      // optimistic
      helper.setValue({ ...prev, ...next })

      const res = await client.mutate({
        variables: { where: { id }, data: updateData },
        mutation: graphql,
      })

      if (res.errors) {
        runInAction(helper.actionName('auto update mutation error'), () => {
          helper.setValue(prev)
        })

        handleErrors(res)
      }
    },
  )

  // omits system fields form diff
  const omitFields = ['id', '__typename', 'createdAt', 'updatedAt']
  const dataPrefilter: PreFilterFunction = (path, key) => {
    return omitFields.includes(key)
  }

  const props = {
    update: updateMutation,
    create: createMutation,
    delete: deleteMutation,
    autoUpdate,
    autoCreate,
  }

  return {
    props,
  }
}
