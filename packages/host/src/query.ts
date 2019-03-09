import { Omit } from '@martin_hotell/rex-tils'
import { ApolloQueryResult, NetworkStatus, WatchQueryOptions } from 'apollo-client'
import { useContext, useEffect, useMemo, useRef } from 'react'
import { useHostContext } from './context'
import { ActionCallback, ApolloContext } from './react-apollo'
import { reporter } from './reporter'
import { Host, HostStatus, HostTypingI } from './types'

export type UseHostQueryOptions<HostTyping extends HostTypingI> = Omit<
  WatchQueryOptions<HostTyping['variables']>,
  'query'
>

export const useHostQuery = <HostTyping extends HostTypingI>(
  host: Host<HostTyping>,
  options: UseHostQueryOptions<HostTyping>,
  cb?: ActionCallback<ApolloQueryResult<HostTyping['data']>>,
) => {
  const ctx = useHostContext(host)

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
   * Validate
   */
  const graphqlQuery = config.graphql && config.graphql.query

  if (!graphqlQuery) {
    throw Error('useHostQuery cannot be used without query')
  }

  /*
   * Create observable query
   */
  const query = useMemo(() => {
    if (status !== HostStatus.START) {
      throw Error('useHostQuery hook can be used only once per host instance')
    }

    const watchQueryOptions: WatchQueryOptions<HostTyping['variables']> = {
      query: graphqlQuery,
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
      if (_status === HostStatus.START) {
        // tslint:disable-next-line: no-unused-expression
        cb && cb.onStart && cb.onStart(res)
        reporter(ctxRef.current, HostStatus.START, res, 'variables', options.variables)

        batch(async batchDispatch => {
          batchDispatch(actions.setVariables(options.variables || {}))
          batchDispatch(actions.setStatus(HostStatus.LOADING))
        })

        return
      }

      /*
       * UPDATE
       */

      if (
        (res.networkStatus === NetworkStatus.setVariables ||
          res.networkStatus === NetworkStatus.refetch) &&
        _status !== HostStatus.REFETCH
      ) {
        // tslint:disable-next-line: no-unused-expression
        cb && cb.onUpdate && cb.onUpdate(res)
        reporter(ctxRef.current, HostStatus.REFETCH, res)

        setStatus(HostStatus.REFETCH)

        return
      }

      /*
       * READY
       */

      if (
        res.networkStatus === NetworkStatus.ready &&
        _status !== HostStatus.READY &&
        // ! let mutations handle it themselves
        _status !== HostStatus.MUTATE
      ) {
        // tslint:disable-next-line: no-unused-expression
        cb && cb.onReady && cb.onReady(res)
        reporter(ctxRef.current, HostStatus.READY, res)

        batch(async batchDispatch => {
          batchDispatch(actions.setData(res.data))
          batchDispatch(actions.setStatus(HostStatus.READY))
        })

        return
      }

      /*
       * ERROR
       */

      if (res.networkStatus === NetworkStatus.error && _status !== HostStatus.ERROR) {
        reporter(ctxRef.current, 'ERROR', res)
        // tslint:disable-next-line: no-unused-expression
        cb && cb.onError && cb.onError(res)
        setStatus(HostStatus.ERROR)

        return
      }

      reporter(ctxRef.current, 'PASSED SUBSCRIPTION', res)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  /*
   * Refetch on ctx variables changes (except on inital load)
   */

  useMemo(() => {
    const _status = ctxRef.current.status
    const _variables = ctxRef.current.variables

    if (_status === 'READY' || _status === 'ERROR') {
      query.refetch(_variables)
    }
  }, [variables])

  return ctx
}
