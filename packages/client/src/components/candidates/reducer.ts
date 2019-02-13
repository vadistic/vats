import produce from 'immer'
import { SortDirection } from '../../utils'
import { CandidatesSortBy } from './sort'

export enum CandidatesActionType {
  Noop = 'Noop',
  Edit = 'Edit',
}

export type CandidatesActions =
  | {
      type: CandidatesActionType.Noop
    }
  | {
      type: CandidatesActionType.Edit
      editable?: boolean
    }

export const candidatesStateInit = () => ({
  sortBy: CandidatesSortBy.CreatedAt,
  sortDirection: SortDirection.ASCENDING,
})

export type CandidatesHostLocalState = ReturnType<typeof candidatesStateInit>

export const candidatesReducer = produce<any, [CandidatesActions]>((draft, action) => {
  switch (action.type) {
    default:
      // noop
      return
  }
})
