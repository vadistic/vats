import produce from 'immer'
import { tuplify, useInspectedReducer } from '../../utils'
import { IJobContextInitArg, IJobState, init } from './context'

export enum JobActionType {
  Reset = 'RESET',
  Noop = 'NOOP',
}

export type IJobActions =
  | {
      type: JobActionType.Reset
      initArg: IJobContextInitArg
    }
  | {
      type: JobActionType.Noop
    }

export const jobReducer = produce<IJobState, [IJobActions]>((draft, action) => {
  switch (action.type) {
    case JobActionType.Reset:
      return init(action.initArg)
    default:
      // noop
      return
  }
})

export const useJobReducer = (initArg: IJobContextInitArg) => {
  const [state, dispatch] = useInspectedReducer(jobReducer, initArg, init, 'JOB_CONTEXT')

  if (state.variables.where.id !== initArg.id) {
    dispatch({ type: JobActionType.Reset, initArg })
  }

  return tuplify([state, dispatch])
}
