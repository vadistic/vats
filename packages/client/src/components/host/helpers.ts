import { NormalizedCacheObject } from 'apollo-cache-inmemory'
import ApolloClient, { MutationOptions } from 'apollo-client'
import { FetchResult } from 'react-apollo'
import { DeepPartial } from '../../utils'
import { TGraphqlTyping } from './graphql-types'
import { IHostState, IHostTyping } from './types'

/**
 * rigth now they mostly provide typings, but the idea is:
 *  - smart cache updates
 *  - consistent error handlign or validation
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
}

export const helpers = <HostTyping extends IHostTyping, GraphqlTyping extends TGraphqlTyping>(
  state: IHostState<HostTyping, TGraphqlTyping>,
  client: ApolloClient<NormalizedCacheObject>,
): IThunkHelpers<GraphqlTyping> => {
  const mergeOptions = <T extends MutationOptions>(
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

  return {
    client,
    createMutation,
    updateMutation,
    deleteMutation,
  }
}
