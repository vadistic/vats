import { Candidate, CandidatesQuery } from '../../generated/queries'
import { filterNull, mutableSortByProp } from '../../utils'
import { ICandidatesState } from './reducer'

export enum CandidatesSortBy {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
}
// auto
// custom

type TCandidatesSortDisplayNamesMap = { [K in CandidatesSortBy]: string }

export const CandidatesSortDisplayNamesMap: TCandidatesSortDisplayNamesMap = {
  [CandidatesSortBy.CreatedAt]: 'add date',
  [CandidatesSortBy.UpdatedAt]: 'update date',
}

export const candidatesSorter = (data: CandidatesQuery, state: ICandidatesState): Candidate[] => {
  const candidates = filterNull(data.candidates)
  switch (state.local.sortBy) {
    default:
      return candidates
    // return mutableSortByProp(candidates, state.local.sortDirection, state.local.sortBy)
  }
}
