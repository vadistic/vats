import React, { useRef } from 'react'
import { HostActions, HostActionsU } from './reducer'
import { HostState, HostTypingI } from './types'

/*
 * This will work a bit like thunks, but
 * I will combine all state updates into one batch update to prevent rerenders
 *
 * If there will be problems with loosing state I can use immer patches
 */

export type Batch<HostTyping extends HostTypingI> = (
  input: (
    batchDispatch: React.Dispatch<HostActionsU>,
    snapshot: HostState<HostTyping>,
  ) => Promise<void> | void,
) => void

export const getBatchDispatch = <HostTyping extends HostTypingI>(
  dispatch: React.Dispatch<HostActionsU>,
  state: HostState<HostTyping>,
  reducer: React.Reducer<HostState<HostTyping>, HostActionsU>,
) => {
  const _state = useRef(state)

  const batchDispatch = (action: HostActionsU) => {
    _state.current = reducer(_state.current, action)
  }

  const batch: Batch<HostTyping> = async (input: any) => {
    // invalidate/sync cache
    _state.current = state
    // wait for all async updates and dispatch
    const result = await input(batchDispatch, _state.current)
    // dispatch!
    dispatch(HostActions.set(_state.current))
  }

  return batch
}
