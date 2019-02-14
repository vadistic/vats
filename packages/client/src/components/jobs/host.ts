import { ActionsUnion, createAction } from '@martin_hotell/rex-tils'
import gql from 'graphql-tag'
import produce from 'immer'
import { JobFragment } from '../../generated/fragments'
import { JobsQuery_jobs, JobsQueryVariables } from '../../generated/queries'
import { SortDirection } from '../../utils'
import { hostFactory, HostType, IHostTyping } from '../host'
import { JOB_UPDATE_MUTATION } from '../job/host'
import { JobsState } from './host'
import { JobsSortBy, jobsSorter } from './sort'

/*
 * GRAPHQL
 */

export const JOBS_QUERY = gql`
  query JobsQuery($where: JobWhereInput, $orderBy: JobOrderByInput) {
    jobs(where: $where, orderBy: $orderBy) {
      ...Job
    }
  }

  ${JobFragment}
`
/*
 * ACTIONS
 */

const SORT_BY = 'SORT_BY'
const SORT_DIRECTION = 'SORT_DIRECTION'

const JobsCustomActions = {
  sortDirection: (sortDirection: SortDirection) => createAction(SORT_DIRECTION, sortDirection),
  sortBy: (sortBy: JobsSortBy) => createAction(SORT_BY, sortBy),
}

type JobsActionsUnion = ActionsUnion<typeof JobsCustomActions>

/*
 * REDUCER
 */

export const jobsReducer = produce<JobsState, [JobsActionsUnion]>((draft, action) => {
  switch (action.type) {
    case SORT_BY:
      draft.local.sortBy = action.payload
      return
    case SORT_DIRECTION:
      draft.local.sortDirection = action.payload || draft.local.sortDirection * -1
      return
    default:
      return
  }
})

/*
 * HOST
 */

export type JobsValue = JobsQuery_jobs[]

export type JobsInitArg = JobsQueryVariables | undefined

const jobsStateInit = () => ({
  sortBy: JobsSortBy.CreatedAt,
  sortDirection: SortDirection.ASCENDING,
})

export type JobsLocalState = ReturnType<typeof jobsStateInit>

export type JobsHostTyping = IHostTyping<
  JobsValue,
  JobsLocalState,
  JobsActionsUnion,
  JobsInitArg,
  JobsQueryVariables
>

export type JobsState = JobsHostTyping['state']

const jobsHostConfig: JobsHostTyping['config'] = {
  displayName: 'CANDIDATES',
  rootField: 'jobs',
  type: HostType.Multi,
  reducer: jobsReducer,
  query: JOBS_QUERY,
  updateMutation: JOB_UPDATE_MUTATION,
  initState: jobsStateInit,
  initVariables: variables => (variables ? variables : {}),
  resetOnInitArgPropChange: true,
  filter: jobsSorter,
}

export const {
  Host: JobsHost,
  useContext: useJobsContext,
  Context: JobsContext,
  Actions: JobsHostActions,
} = hostFactory<JobsHostTyping>(jobsHostConfig)

export const JobsActions = {
  ...JobsHostActions,
  ...JobsCustomActions,
}
