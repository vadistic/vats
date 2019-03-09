import React, { useRef } from 'react'
import { HostActions, HostActionsU } from './reducer'
import { HostState, HostTypingI } from './types'

/*
 * This will work a bit like thunks, but
 * I will combine all state updates into one batch update to prevent rerenders
 *
 * __If there will be problems with loosing state I can use immer patches__
 *
 * Update: There is a problem with loosing state^^
 * Using immer patches could still result in lost state.
 */

export type BatchThunk<HostTyping extends HostTypingI> = (
  batchDispatch: React.Dispatch<HostActionsU>,
  snapshot: HostState<HostTyping>,
) => Promise<void> | void

export type Batch<HostTyping extends HostTypingI> = (input: BatchThunk<HostTyping>) => void

export const getBatchDispatch = <HostTyping extends HostTypingI>(
  dispatch: React.Dispatch<HostActionsU>,
  state: HostState<HostTyping>,
  reducer: React.Reducer<HostState<HostTyping>, HostActionsU>,
) => {
  const busy = useRef(false)
  const draft = useRef<HostState<HostTyping>>({} as any)
  draft.current = state

  const batchDispatch = (action: HostActionsU) => {
    draft.current = reducer(draft.current, action)
  }

  const batch: Batch<HostTyping> = async input => {
    if (busy.current === false) {
      busy.current = true
      await input(batchDispatch, state)
      dispatch(HostActions.set(draft.current))
      busy.current = false
    } else {
      console.error('race condition!')
    }
  }

  return batch
}
