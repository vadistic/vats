import produce from 'immer'
import { JobQueryVariables } from '../../generated/queries'
import { IHostState } from '../host'

export enum JobActionType {
  Noop = 'NOOP',
  Edit = 'EDIT',
}

export type IJobActions =
  | {
      type: JobActionType.Noop
    }
  | {
      type: JobActionType.Edit
      editable?: boolean
    }

interface IJobHostLocalState {
  editable: boolean
}

export type IJobState = IHostState<IJobHostLocalState, JobQueryVariables>

export interface IJobHostInitArg {
  id: string
}

export const jobStateInit = ({ id }: IJobHostInitArg): IJobState => ({
  local: {
    editable: false,
  },
  variables: {
    where: { id },
  },
})

export const jobReducer = produce<IJobState, [IJobActions]>((draft, action) => {
  switch (action.type) {
    case JobActionType.Noop:
      return
    case JobActionType.Edit:
      draft.local.editable = action.editable || !draft.local.editable
      return
    default:
      return
  }
})
