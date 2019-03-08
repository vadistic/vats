import { Omit } from '@martin_hotell/rex-tils'
import { NetworkStatus, WatchQueryOptions } from 'apollo-client'
import { useContext, useEffect, useMemo, useRef } from 'react'
import { Host } from './context'
import { ApolloContext } from './react-apollo'
import { HostStatus, HostTypingI } from './types'

export type UseHostOptions<HostTyping extends HostTypingI> = Omit<
  WatchQueryOptions<HostTyping['variables']>,
  'query'
>

export const useHostQuery = <HostTyping extends HostTypingI>(
  host: Host<HostTyping>,
  options: UseHostOptions<HostTyping>,
) => {
  const ctx = useContext(host.context)

  // useEffect have closure on variables and I do not want to reobserve query on each status
  // useRef (which is tiny proxy I guess) allow getting current values nicely, it's not even a hack
  //
  const ctxRef = useRef(ctx)
  ctxRef.current = ctx

  const {
    config,
    status,
    variables,
    dispatchActions: { setStatus },
    batch,
    actions,
  } = ctx

  const client = useContext(ApolloContext)

  /*
   * Create observable query
   */
  const query = useMemo(() => {
    if (status !== HostStatus.INIT) {
      throw Error('useHostQuery hook can be used only once per host instance')
    }

    const watchQueryOptions: WatchQueryOptions<HostTyping['variables']> = {
      query: config.graphql.query,
      fetchPolicy: 'cache-and-network',
      ...options,
    }

    return client.watchQuery(watchQueryOptions)
  }, [])

  /*
   * Subscribe to it and handle status changes
   */
  useEffect(() => {
    const subscription = query.subscribe(res => {
      const _status = ctxRef.current.status

      /*
       * INIT => LOADING
       */
      if (res.networkStatus === NetworkStatus.loading && _status === HostStatus.INIT) {
        batch(async batchDispatch => {
          batchDispatch(actions.setVariables(options.variables || {}))
          batchDispatch(actions.setStatus(HostStatus.LOADING))
        })
      }

      /*
       * UPDATE
       */

      if (res.networkStatus === NetworkStatus.setVariables && _status !== HostStatus.UPDATE) {
        setStatus(HostStatus.UPDATE)
      }

      /*
       * READY
       */

      if (res.networkStatus === NetworkStatus.ready && _status !== HostStatus.READY) {
        batch(async batchDispatch => {
          batchDispatch(actions.setValue(res.data))
          batchDispatch(actions.setStatus(HostStatus.READY))
        })
      }

      /*
       * ERROR
       */

      if (res.networkStatus === NetworkStatus.error && _status !== HostStatus.ERROR) {
        setStatus(HostStatus.ERROR)
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  /*
   * Refetch on ctx variables changes (except on inital load)
   */
  useEffect(() => {
    const _status = ctxRef.current.status
    if (_status !== 'INIT' && _status !== 'LOADING') {
      query.refetch(variables)
    }
  }, [variables])

  return ctx
}
