import { ActionsUnion, createAction } from '@martin_hotell/rex-tils'
import { SortDirection } from '@vats/utils'
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
import {
  GraphqlMultiTypingCreator,
  HostActions,
  HostConfigI,
  hostContextFactory,
  HostStateI,
  HostType,
  HostTypingCreator,
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

export const JobsActions = {
  ...HostActions,
  ...JobsCustomActions,
}

type JobsActions = ActionsUnion<typeof JobsActions>

/*
 * REDUCER
 */

export const jobsReducer = produce<JobsState, [JobsActions]>((draft, action) => {
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
export type JobsState = HostStateI<JobsHostTyping>

export type JobsGraphqlTyping = GraphqlMultiTypingCreator<{
  query: JobsQuery
  queryVariables: JobsQueryVariables
  createMutation: JobCreateMutation
  createMutationVariables: JobCreateMutationVariables
  updateMutation: JobUpdateMutation
  updateMutationVariables: JobUpdateMutationVariables
  deleteMutation: JobDeleteMutation
  deleteMutationVariables: JobDeleteMutationVariables
  updateManyMutation: JobsUpdateManyMutation
  updateManyMutationVariables: JobsUpdateManyMutationVariables
  deleteManyMutation: JobsDeleteManyMutation
  deleteManyMutationVariables: JobsDeleteManyMutationVariables
}>

export type JobsHostTyping = HostTypingCreator<{
  value: JobsValue
  localState: JobsLocalState
  actions: JobsActions
  initArg: JobsInitArg
  queryVariables: JobsQueryVariables
}>

const jobsHostConfig: HostConfigI<JobsHostTyping> = {
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
  useContext: useJobsContext,
  Context: JobsContext,
  HostProvider: JobsHostProvider,
} = hostContextFactory<JobsHostTyping>(jobsHostConfig)
