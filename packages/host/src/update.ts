import { Omit } from '@vats/utils'
import { ApolloError, MutationOptions } from 'apollo-client'
import { useContext } from 'react'
import { diffQuery } from './diff'
import { ActionCallback, ApolloContext } from './react-apollo'
import { reporter } from './reporter'
import { Host, HostStatus, HostTypingI } from './types'
import { useAsyncEffect } from './use-async-effect'

export type UseHostMutationOptions<HostTyping extends HostTypingI> = Omit<
  MutationOptions<HostTyping['variables']>,
  'mutation'
> & {
  updatePolicy?: 'cache-only' | 'optimistic' | 'optimistic-and-network' | 'network-only'
}

export interface UpdateCallbackArg<HostTyping extends HostTypingI> {
  name: string
  data?: HostTyping['data']
  error?: ApolloError
}

/*
 * Hook for performing auto-update of data
 * TODO: optimsie with batch updates
 */
export const useHostAutoUpdate = <HostTyping extends HostTypingI>(
  host: Host<HostTyping>,
  options: UseHostMutationOptions<HostTyping> = {},
  cb?: ActionCallback<UpdateCallbackArg<HostTyping>>,
) => {
  const ctx = useContext(host.context)
  const {
    config,
    variables,
    dispatchActions: { setData, setStatus },
    data,
  } = ctx

  const client = useContext(ApolloContext)

  const autoUpdate = (next: HostTyping['data']) => {
    /*
     * validate
     */
    const query = config.graphql && config.graphql.query
    const updateMutation = config.graphql && config.graphql.updateMutation
    const updateRoot = config.graphqlRoots && config.graphqlRoots.updateMutation
    const queryRoot = config.graphqlRoots && config.graphqlRoots.query

    if (!updateMutation || !updateRoot || !query || !queryRoot) {
      throw Error('useHostMutation: query or update mutation missing')
    }

    const prev = data
    const { updateData, queryData } = diffQuery(prev[queryRoot], next[queryRoot], config.relations)

    /*
     * config
     */
    const updatePolicy = options.updatePolicy || 'optimistic'

    const shouldOptimisticUpdate =
      queryData &&
      (updatePolicy === 'cache-only' ||
        updatePolicy === 'optimistic' ||
        updatePolicy === 'optimistic-and-network')

    const shouldResUpdate =
      updatePolicy === 'optimistic-and-network' || updatePolicy === 'network-only'

    // in other cases mutation will update cache automatically
    const shouldCacheUpadte = queryData && updatePolicy === 'cache-only'

    const shouldMutate = queryData && updatePolicy !== 'cache-only'

    const main = async () => {
      // tslint:disable-next-line: no-unused-expression
      cb && cb.onStart && cb.onStart({ name: updateRoot })
      reporter(ctx, 'MUTATE', queryData, updateData)
      setStatus(HostStatus.MUTATE)

      if (shouldOptimisticUpdate) {
        reporter(ctx, 'UPDATE_OPTIMISTIC', queryData, updateData)

        update({
          [queryRoot]: queryData,
        })
      }

      if (shouldCacheUpadte) {
        cacheUpdate({
          [queryRoot]: queryData,
        })
      }

      if (shouldMutate) {
        try {
          const res = await mutate()
          // tslint:disable-next-line: no-unused-expression
          cb && cb.onReady && cb.onReady({ name: updateRoot, data: res })
          reporter(ctx, 'MUTATE_READY', res)
          setStatus(HostStatus.READY)

          if (shouldResUpdate) {
            update(res)
          }
        } catch (error) {
          // tslint:disable-next-line: no-unused-expression
          cb && cb.onError && cb.onError({ name: updateRoot, error })
          reporter(ctx, 'MUTATE_ERROR', queryData, updateData)
          setStatus(HostStatus.ERROR)
          // reverse optimistic
          setData(prev)
        }
      }
    }

    /*
     * make optimistic update
     */
    const update = (val: HostTyping['data']) => {
      setData({
        ...prev,
        [queryRoot]: {
          ...prev[queryRoot],
          ...val[queryRoot],
        },
      })
    }

    /*
     * cache update for cach-only
     */
    const cacheUpdate = (val: HostTyping['data']) =>
      client.writeQuery({
        query,
        data: val,
        variables,
      })

    /*
     * mutation itself
     */
    const mutate = (): Promise<HostTyping['data']> =>
      client.mutate({
        mutation: updateMutation,
        variables: {
          where: variables.where,
          data: updateData,
        },
        ...options,
      })

    // fire!
    main()
  }

  return autoUpdate
}
