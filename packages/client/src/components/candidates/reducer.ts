import produce from 'immer'
import { CandidatesQueryVariables } from '../../generated/queries'
import { SortDirection } from '../../utils'
import { IHostState } from '../host'
import { CandidatesSortBy } from './sort'

export enum CandidatesActionType {
  Noop = 'Noop',
  Edit = 'Edit',
}

export type ICandidatesActions =
  | {
      type: CandidatesActionType.Noop
    }
  | {
      type: CandidatesActionType.Edit
      editable?: boolean
    }

interface ICandidatesHostLocalState {
  sortBy: CandidatesSortBy
  sortDirection: SortDirection
}

export type ICandidatesState = IHostState<ICandidatesHostLocalState, CandidatesQueryVariables>

export const candidatesReducer = produce<ICandidatesState, [ICandidatesActions]>(
  (draft, action) => {
    switch (action.type) {
      default:
        // noop
        return
    }
  },
)

export const candidatesStateInit = (): ICandidatesState => ({
  local: {
    sortBy: CandidatesSortBy.CreatedAt,
    sortDirection: SortDirection.ASCENDING,
  },
  variables: {},
})
