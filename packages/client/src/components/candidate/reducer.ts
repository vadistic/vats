import produce from 'immer'
import { CandidateHostTyping } from './host'

const EDIT = 'EDIT'

class Edit {
  readonly type = EDIT
  constructor(public editable: boolean) {}
}

export type CandidateActions = Edit

export const CandidateActionType = {
  Edit: EDIT as typeof EDIT,
}

export interface ICandidateInitArg {
  id: string
}

export const candidateStateInit = ({ id }: ICandidateInitArg) => ({
  editable: false,
})

export type CandidateHostLocalState = ReturnType<typeof candidateStateInit>

// TODO: get candidate State!
export const candidateReducer = produce<CandidateHostTyping['state'], [CandidateActions]>(
  (draft, action) => {
    switch (action.type) {
      case CandidateActionType.Edit:
        draft.local.editable = action.editable || !draft.local.editable
        return
      default:
        return
    }
  },
)
