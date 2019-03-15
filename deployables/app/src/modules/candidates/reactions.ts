import { Translation, TranslationProxy } from '@vats/i18n'
import { useReaction } from '@vats/store'
import { sortByGetter, SortGetter } from '@vats/utils'
import { SingleCandidateValue } from '../candidate'
import { CandidatesStore } from './store'

export enum CandidatesSortBy {
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  firstName = 'firstName',
  lastName = 'lastName',
  company = 'company',
  position = 'position',
  applications = 'applications',
  comments = 'comments',
}

export type CandidatesSortByGetterMap = {
  [K in CandidatesSortBy]: SortGetter<SingleCandidateValue>
}

export const candidatesSortByGetters: CandidatesSortByGetterMap = {
  [CandidatesSortBy.createdAt]: candidate => candidate.createdAt,
  [CandidatesSortBy.updatedAt]: candidate => candidate.updatedAt,
  [CandidatesSortBy.firstName]: candidate => candidate.firstName,
  [CandidatesSortBy.lastName]: candidate => candidate.lastName,
  [CandidatesSortBy.company]: candidate => candidate.company,
  [CandidatesSortBy.position]: candidate => candidate.position,
  [CandidatesSortBy.applications]: candidate =>
    candidate.applications && candidate.applications.length,
  [CandidatesSortBy.comments]: candidate => candidate.comments && candidate.comments.length,
}

export type CandidatesSortByLabelMap = { [K in CandidatesSortBy]: string }

export const candidatesSortByLabels = (
  tp: TranslationProxy<Translation>,
): CandidatesSortByLabelMap => ({
  [CandidatesSortBy.createdAt]: tp.candidate.createdAt(),
  [CandidatesSortBy.updatedAt]: tp.candidate.updatedAt(),
  [CandidatesSortBy.firstName]: tp.candidate.firstName(),
  [CandidatesSortBy.lastName]: tp.candidate.lastName(),
  [CandidatesSortBy.company]: tp.candidate.company(),
  [CandidatesSortBy.position]: tp.candidate.position(),
  [CandidatesSortBy.applications]: tp.candidate.applications({ count: 10 }),
  [CandidatesSortBy.comments]: tp.candidate.comment({ count: 10 }),
})

export const useCandidatesReactions = (store: CandidatesStore) => {
  useReaction(
    `${store.config.name}: sortBy exec`,
    () => store.state.sortBy,
    sortBy => {
      if (store.data.candidates.length === 0) {
        return
      }

      store.data.candidates = sortByGetter(
        store.data.candidates,
        store.state.sortDirection,
        candidatesSortByGetters[sortBy],
      )
    },
  )

  useReaction(
    `${store.config.name}: sortDirection exec`,
    () => store.state.sortDirection,
    sortDirection => {
      if (store.data.candidates.length === 0) {
        return
      }

      store.data.candidates = sortByGetter(
        store.data.candidates,
        sortDirection,
        candidatesSortByGetters[store.state.sortBy],
      )
    },
  )
}
