import { Translation, TranslationProxy } from '@vats/i18n'
import { useReaction } from '@vats/store'
import { sortByGetter, SortGetter } from '@vats/utils'
import { SingleJobValue } from '../job/store'
import { JobsStore } from './store'

export enum JobsSortBy {
  createdAt = 'createdAt',
  name = 'name',
  applications = 'applications',
  type = 'type',
  department = 'department',
}

export const jobsSortByGetters: { [K in JobsSortBy]: SortGetter<SingleJobValue> } = {
  [JobsSortBy.name]: job => job.name,
  [JobsSortBy.createdAt]: job => job.createdAt,
  [JobsSortBy.applications]: job => job.applications && job.applications.length,
  [JobsSortBy.type]: job => job.type,
  [JobsSortBy.department]: job => job.department,
}

export type JobsSortByLabelMap = { [K in JobsSortBy]: string }

export const jobsSortByLabels = (tp: TranslationProxy<Translation>): JobsSortByLabelMap => ({
  [JobsSortBy.name]: tp.job.name(),
  [JobsSortBy.createdAt]: tp.job.createdAt(),
  [JobsSortBy.applications]: tp.job.applications({ count: 10 }),
  [JobsSortBy.type]: tp.job.type(),
  [JobsSortBy.department]: tp.job.department(),
})

export const useJobsReactions = (store: JobsStore) => {
  useReaction(
    `${store.config.name}: sortBy exec`,
    () => store.state.sortBy,
    sortBy => {
      if (store.data.jobs.length === 0) {
        return
      }

      store.data.jobs = sortByGetter(
        store.data.jobs,
        store.state.sortDirection,
        jobsSortByGetters[sortBy],
      )
    },
  )

  useReaction(
    `${store.config.name}: sortDirection exec`,
    () => store.state.sortDirection,
    sortDirection => {
      if (store.data.jobs.length === 0) {
        return
      }

      store.data.jobs = sortByGetter(
        store.data.jobs,
        sortDirection,
        jobsSortByGetters[store.state.sortBy],
      )
    },
  )
}
