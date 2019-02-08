import produce from 'immer'
import React, { useContext, useState } from 'react'
import { Job, JobQueryVariables } from '../../generated/queries'
import { useInspectedReducer } from '../../utils'

export interface IJobContext {
  job: Job
  dispatch: React.Dispatch<IJobActions>
  state: IJobState
}

export const JobContext: React.Context<IJobContext> = React.createContext({} as any)

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

export interface IJobState {
  variables: {
    where: JobQueryVariables['where']
  }
  local: {}
}

export interface IJobContextInitOptions {
  id: string
}

export const init = ({ id }: IJobContextInitOptions) => (state: IJobState): IJobState => ({
  variables: {
    where: {
      id,
    },
  },
  local: {},
})

export const useJobReducer = (initOptions: IJobContextInitOptions) =>
  useInspectedReducer(jobReducer, undefined as any, init(initOptions), 'JOB_CONTEXT')
