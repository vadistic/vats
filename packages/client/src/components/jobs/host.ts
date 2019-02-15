import { ActionsUnion, createAction } from '@martin_hotell/rex-tils'
import gql from 'graphql-tag'
import produce from 'immer'
import { JobFragment } from '../../generated/fragments'
import {
  JobCreateMutation,
  JobCreateMutationVariables,
  JobDeleteMutation,
  JobDeleteMutationVariables,
  JobsDeleteManyMutation,
  JobsDeleteManyMutationVariables,
  JobsQuery,
  JobsQuery_jobs,
  JobsQueryVariables,
  JobsUpdateManyMutation,
  JobsUpdateManyMutationVariables,
  JobUpdateMutation,
  JobUpdateMutationVariables,
} from '../../generated/queries'
import { SortDirection } from '../../utils'
import {
  hostFactory,
  HostType,
  IGraphqlMultiTyping,
  IHostConfig,
  IHostState,
  IHostTyping,
} from '../host'
import { JOB_CREATE_MUTATION, JOB_DELETE_MUTATION, JOB_UPDATE_MUTATION } from '../job/host'
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

export const JOBS_UPDATE_MANY_MUTATION = gql`
  mutation JobsUpdateManyMutation($where: JobWhereInput!, $data: JobUpdateManyMutationInput!) {
    updateManyJobs(data: $data, where: $where) {
      count
    }
  }
`

export const JOBS_DELETE_MANY_MUTATION = gql`
  mutation JobsDeleteManyMutation($where: JobWhereInput!) {
    deleteManyJobs(where: $where) {
      count
    }
  }
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
  sortBy: JobsSortBy.createdAt as JobsSortBy,
  sortDirection: SortDirection.ASCENDING,
})

export type JobsLocalState = ReturnType<typeof jobsStateInit>
export type JobsState = IHostState<JobsHostTyping, JobsGraphqlTyping>

export type JobsGraphqlTyping = IGraphqlMultiTyping<
  JobsQuery,
  JobsQueryVariables,
  JobCreateMutation,
  JobCreateMutationVariables,
  JobUpdateMutation,
  JobUpdateMutationVariables,
  JobDeleteMutation,
  JobDeleteMutationVariables,
  JobsUpdateManyMutation,
  JobsUpdateManyMutationVariables,
  JobsDeleteManyMutation,
  JobsDeleteManyMutationVariables
>

export type JobsHostTyping = IHostTyping<JobsValue, JobsLocalState, JobsActionsUnion, JobsInitArg>

const jobsHostConfig: IHostConfig<JobsHostTyping, JobsGraphqlTyping> = {
  displayName: 'CANDIDATES',
  type: HostType.Multi,
  reducer: jobsReducer,
  initState: jobsStateInit,
  initVariables: variables => (variables ? variables : {}),
  resetOnInitArgPropChange: true,
  filter: jobsSorter,
  graphql: {
    query: JOBS_QUERY,
    queryRoot: 'jobs',
    createMutation: JOB_CREATE_MUTATION,
    createMutationRoot: 'createJob',
    updateMutation: JOB_UPDATE_MUTATION,
    updateMutationRoot: 'updateJob',
    deleteMutation: JOB_DELETE_MUTATION,
    deleteMutationRoot: 'deleteJob',
    updateManyMutation: JOBS_UPDATE_MANY_MUTATION,
    updateManyMutationRoot: 'updateManyJobs',
    deleteManyMutation: JOBS_DELETE_MANY_MUTATION,
    deleteManyMutationRoot: 'deleteManyJobs',
  },
}

export const {
  Host: JobsHost,
  useContext: useJobsContext,
  Context: JobsContext,
  Actions: JobsHostActions,
} = hostFactory<JobsHostTyping, JobsGraphqlTyping>(jobsHostConfig)

export const JobsActions = {
  ...JobsHostActions,
  ...JobsCustomActions,
}
