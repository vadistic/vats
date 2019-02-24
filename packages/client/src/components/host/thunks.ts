// tslint:disable-next-line: no-implicit-dependencies
import { DataProxy } from 'apollo-cache'
import { MutationOptions } from 'apollo-client'
import { client } from '../../apollo'
import { DeepPartial } from '../../utils'
import { diffAutoUpdataData } from './diff'
import { TGraphqlSingleTyping } from './graphql-types'
import { IHostConfig, IHostState, IHostTyping } from './types'

const mergeOptions = <T extends any>(presetOptions: T, providedOptions: DeepPartial<T>) => {
  return ({
    ...presetOptions,
    ...providedOptions,
    variables: { ...presetOptions.variables, ...providedOptions.variables },
  } as unknown) as T
}

export const hostThunkHelpers = <
  HostTyping extends IHostTyping,
  // TODO: how to handle union??
  GraphqlTyping extends TGraphqlSingleTyping
>(
  config: IHostConfig<HostTyping>,
) => {
  type State = IHostState<HostTyping>

  type CreateMutationOptions = MutationOptions<
    GraphqlTyping['createMutation'],
    GraphqlTyping['createMutationVariables']
  >

  const createMutation = (state: State, options: DeepPartial<CreateMutationOptions>) => {
    if (config.graphql.createMutation) {
      const createOptions: CreateMutationOptions = {
        mutation: config.graphql.createMutation,
      }

      return client.mutate<
        GraphqlTyping['createMutation'],
        GraphqlTyping['createMutationVariables']
      >(mergeOptions(createOptions, options))
    } else {
      throw Error(`Missing createMutation in config`)
    }
  }

  type UpdateMutationOptions = MutationOptions<
    GraphqlTyping['updateMutation'],
    GraphqlTyping['updateMutationVariables']
  >

  const updateMutation = (state: State, options: DeepPartial<UpdateMutationOptions>) => {
    if (config.graphql.updateMutation) {
      const updateOptions: UpdateMutationOptions = {
        mutation: config.graphql.updateMutation,
        variables: { where: state.variables.where },
      }

      return client.mutate<
        GraphqlTyping['updateMutation'],
        GraphqlTyping['updateMutationVariables']
      >(mergeOptions(updateOptions, options))
    } else {
      throw Error(`Missing updateMutation in config`)
    }
  }

  type DeleteMutationOptions = MutationOptions<
    GraphqlTyping['deleteMutation'],
    GraphqlTyping['deleteMutationVariables']
  >

  const deleteMutation = (state: State, options: DeepPartial<DeleteMutationOptions>) => {
    if (config.graphql.deleteMutation) {
      const deleteOptions: DeleteMutationOptions = {
        mutation: config.graphql.deleteMutation,
        variables: state.variables.where ? { where: state.variables.where } : undefined,
      }

      return client.mutate<
        GraphqlTyping['deleteMutation'],
        GraphqlTyping['deleteMutationVariables']
      >(mergeOptions(deleteOptions, options))
    } else {
      throw Error(`Missing deleteMutation in config`)
    }
  }

  type ReadQueryOptions = DataProxy.Query<GraphqlTyping['queryVariables']>

  const readQuery = (state: State, options: DeepPartial<ReadQueryOptions>) => {
    const readOptions: ReadQueryOptions = {
      query: config.graphql.query,
      variables: state.variables,
    }
    return client.readQuery(mergeOptions(readOptions, options))
  }

  type AutoUpdateValue = HostTyping['value']

  const autoUpdate = (state: State, value: AutoUpdateValue) => {
    if (config.graphql.updateMutation) {
      const queryCache: any = client.readQuery({
        query: config.graphql.query,
        variables: state.variables,
      })

      if (queryCache === null) {
        console.log(`autoUpdate: cached query read returned null`, state)
        return undefined
      }

      const prevValue = queryCache[config.graphql.queryRoot]

      const { updateData, queryData } = diffAutoUpdataData(prevValue, value, config.relations)

      if (updateData) {
        client.writeQuery({
          query: config.graphql.query,
          variables: state.variables,
          data: { [config.graphql.queryRoot]: { ...prevValue, ...queryData } },
        })

        return client.mutate<
          GraphqlTyping['updateMutation'],
          GraphqlTyping['updateMutationVariables']
        >({
          mutation: config.graphql.updateMutation,
          variables: {
            where: state.variables.where || null,
            data: updateData,
          },
        })
      }
    } else {
      throw Error(`Missing updateMutation in config`)
    }
  }

  return {
    createMutation,
    updateMutation,
    deleteMutation,
    readQuery,
    autoUpdate,
  }
}
