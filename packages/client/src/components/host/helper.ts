// tslint:disable-next-line: no-implicit-dependencies
import { DataProxy } from 'apollo-cache'
import { NormalizedCacheObject } from 'apollo-cache-inmemory'
import ApolloClient, { MutationOptions } from 'apollo-client'
import { FetchResult } from 'react-apollo'
import { DeepPartial } from '../../utils'
import { diffAutoUpdataData } from './diff'
import { TGraphqlTyping } from './graphql-types'
import { IHostState, IHostTyping } from './types'

/**
 * rigth now they mostly provide typings, but the idea is:
 *  - smart cache updates
 *  - consistent error handling and/or validation
 */

type CreateMutationOptions<GraphqlTyping extends TGraphqlTyping> = MutationOptions<
  GraphqlTyping['createMutation'],
  GraphqlTyping['createMutationVariables']
>

type UpdateMutationOptions<GraphqlTyping extends TGraphqlTyping> = MutationOptions<
  GraphqlTyping['updateMutation'],
  GraphqlTyping['updateMutationVariables']
>

type DeleteMutationOptions<GraphqlTyping extends TGraphqlTyping> = MutationOptions<
  GraphqlTyping['deleteMutation'],
  GraphqlTyping['deleteMutationVariables']
>

type ReadQueryOptions<GraphqlTyping extends TGraphqlTyping> = DataProxy.Query<
  GraphqlTyping['queryVariables']
>

type AutoUpdateOptions<GraphqlTyping extends TGraphqlTyping> = GraphqlTyping['query'][string]

export interface IThunkHelpers<GraphqlTyping extends TGraphqlTyping> {
  client: ApolloClient<NormalizedCacheObject>
  createMutation: (
    options: DeepPartial<CreateMutationOptions<GraphqlTyping>>,
  ) => Promise<FetchResult<GraphqlTyping['createMutation']>>
  updateMutation: (
    options: DeepPartial<UpdateMutationOptions<GraphqlTyping>>,
  ) => Promise<FetchResult<GraphqlTyping['updateMutation']>>
  deleteMutation: (
    options: DeepPartial<DeleteMutationOptions<GraphqlTyping>>,
  ) => Promise<FetchResult<GraphqlTyping['deleteMutation']>>
  readQuery: (
    options: DeepPartial<DataProxy.Query<GraphqlTyping['queryVariables']>>,
  ) => GraphqlTyping['query'] | null
  autoUpdate: (
    value: AutoUpdateOptions<GraphqlTyping>,
  ) => Promise<FetchResult<GraphqlTyping['updateMutation']>> | undefined
}

export const helpers = <HostTyping extends IHostTyping, GraphqlTyping extends TGraphqlTyping>(
  state: IHostState<HostTyping, TGraphqlTyping>,
  client: ApolloClient<NormalizedCacheObject>,
): IThunkHelpers<GraphqlTyping> => {
  const mergeOptions = <T extends MutationOptions | DataProxy.Query<any>>(
    presetOptions: T,
    providedOptions: DeepPartial<T>,
  ) => {
    return ({
      ...presetOptions,
      ...providedOptions,
      variables: { ...presetOptions.variables, ...providedOptions.variables },
    } as unknown) as T
  }

  type ThunkHelpers = IThunkHelpers<GraphqlTyping>

  const createOptions: CreateMutationOptions<GraphqlTyping> = {
    mutation: state.config.graphql.createMutation,
  }

  const createMutation: ThunkHelpers['createMutation'] = options =>
    client.mutate(mergeOptions(createOptions, options))

  const updateOptions: UpdateMutationOptions<GraphqlTyping> = {
    mutation: state.config.graphql.updateMutation,
    variables: state.variables.where ? { where: state.variables.where } : undefined,
  }

  const updateMutation: ThunkHelpers['updateMutation'] = options =>
    client.mutate(mergeOptions(updateOptions, options))

  const deleteOptions: UpdateMutationOptions<GraphqlTyping> = {
    mutation: state.config.graphql.deleteMutation,
    variables: state.variables.where ? { where: state.variables.where } : undefined,
  }

  const deleteMutation: ThunkHelpers['deleteMutation'] = options =>
    client.mutate(mergeOptions(deleteOptions, options))

  const readOptions: ReadQueryOptions<GraphqlTyping> = {
    query: state.config.graphql.query,
    variables: state.variables,
  }

  const readQuery: ThunkHelpers['readQuery'] = options =>
    client.readQuery(mergeOptions(readOptions, options))

  const autoUpdate: ThunkHelpers['autoUpdate'] = value => {
    const queryCache = readQuery({})

    if (queryCache === null) {
      console.log(`autoUpdate helper: cached query read returned null`, state)
      return undefined
    }

    const prevValue = queryCache[state.config.graphql.queryRoot]

    const { updateData, queryData } = diffAutoUpdataData(prevValue, value, state.config.relations)

    client.writeQuery({
      query: state.config.graphql.query,
      variables: state.variables,
      data: { [state.config.graphql.queryRoot]: { ...prevValue, ...queryData } },
    })

    if (updateData) {
      return client.mutate({
        mutation: state.config.graphql.updateMutation,
        variables: {
          where: state.variables.where || null,
          data: updateData,
        },
      })
    }
  }

  return {
    client,
    createMutation,
    updateMutation,
    deleteMutation,
    readQuery,
    autoUpdate,
  }
}
