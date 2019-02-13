import produce from 'immer'
import { JobHostTyping } from './host'

export enum JobActionType {
  Noop = 'NOOP',
  Edit = 'EDIT',
}

export type JobActions =
  | {
      type: JobActionType.Noop
    }
  | {
      type: JobActionType.Edit
      editable?: boolean
    }

export interface IJobHostInitArg {
  id: string
}

export const jobStateInit = ({ id }: IJobHostInitArg) => ({
  editable: false,
})

export type IJobHostLocalState = ReturnType<typeof jobStateInit>

export const jobReducer = produce<JobHostTyping['state'], [JobActions]>((draft, action) => {
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
