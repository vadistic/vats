import { Candidate } from '../../generated/queries'
import { CandidatesState, CandidatesValue } from './host'

export enum CandidatesSortBy {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
}

// TODO: get rid of
type CandidatesSortDisplayNamesMap = { [K in CandidatesSortBy]: string }

export const CandidatesSortDisplayNamesMap: CandidatesSortDisplayNamesMap = {
  [CandidatesSortBy.CreatedAt]: 'add date',
  [CandidatesSortBy.UpdatedAt]: 'update date',
}

export const candidatesSorter = (arr: CandidatesValue, state: CandidatesState): Candidate[] => {
  switch (state.local.sortBy) {
    default:
      return arr
    // return mutableSortByProp(candidates, state.local.sortDirection, state.local.sortBy)
  }
}
