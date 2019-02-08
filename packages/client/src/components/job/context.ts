import React from 'react'
import { Job, JobQueryVariables } from '../../generated/queries'
import { IJobActions } from './reducer'

export interface IJobContext {
  job: Job
  dispatch: React.Dispatch<IJobActions>
  state: IJobState
}

export const JobContext: React.Context<IJobContext> = React.createContext({} as any)

export interface IJobState {
  variables: {
    where: JobQueryVariables['where']
  }
  local: {}
}

export interface IJobContextInitArg {
  id: string
}

export const init = ({ id }: IJobContextInitArg) => ({
  variables: {
    where: {
      id,
    },
  },
  local: {},
})
