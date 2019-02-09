import produce from 'immer'
import { CandidatesQueryVariables } from '../../generated/queries'
import { IHostState } from '../host'

export enum CandidateActionType {
  Noop = 'Noop',
  Edit = 'Edit',
}

export type ICandidateActions =
  | {
      type: CandidateActionType.Noop
    }
  | {
      type: CandidateActionType.Edit
      editable?: boolean
    }

interface ICandidateHostLocalState {
  editable: boolean
}

export type ICandidateState = IHostState<ICandidateHostLocalState, CandidatesQueryVariables>

export const candidateReducer = produce<ICandidateState, [ICandidateActions]>((draft, action) => {
  switch (action.type) {
    case CandidateActionType.Noop:
      return
    case CandidateActionType.Edit:
      draft.local.editable = action.editable || !draft.local.editable
      return
    default:
      return
  }
})

export interface ICandidateHostInitArg {
  id: string
}

export const candidateStateInit = ({ id }: ICandidateHostInitArg): ICandidateState => ({
  local: {
    editable: false,
  },
  variables: {
    where: { id },
  },
})
