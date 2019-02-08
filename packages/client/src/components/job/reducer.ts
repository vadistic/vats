import produce from 'immer'
import { useInspectedReducer } from '../../utils'
import { IJobContextInitOptions, IJobState, init } from './context'

export enum JobActionType {}

export interface IJobActions {
  type: JobActionType
}

export const jobReducer = produce<IJobState, [IJobActions]>((draft, action) => {
  switch (action.type) {
    default:
      // noop
      return
  }
})

export const useJobReducer = (initOptions: IJobContextInitOptions) =>
  useInspectedReducer(jobReducer, undefined as any, init(initOptions), 'JOB_CONTEXT')
