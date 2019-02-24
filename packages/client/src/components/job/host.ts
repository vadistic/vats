import { ActionsUnion, createAction } from '@martin_hotell/rex-tils'
import gql from 'graphql-tag'
import { JobFragment } from '../../generated/fragments'
import {
  Job,
  JobCreateMutation,
  JobCreateMutationVariables,
  JobDeleteMutation,
  JobDeleteMutationVariables,
  JobQuery,
  JobQueryVariables,
  JobUpdateMutation,
  JobUpdateMutationVariables,
} from '../../generated/queries'
import {
  GraphqlSingleTypingCreator,
  HostActions,
  hostContextFactory,
  HostType,
  HostTypingCreator,
  IAugumentedDispatch,
  IHostConfig,
  IHostState,
} from '../host'

/*
 * GRAPHQL
 */

export const JOB_QUERY = gql`
  query JobQuery($where: JobWhereUniqueInput!) {
    job(where: $where) {
      ...Job
    }
  }
  ${JobFragment}
`

export const JOB_CREATE_MUTATION = gql`
  mutation JobCreateMutation($data: JobCreateInput!) {
    createJob(data: $data) {
      ...Job
    }
  }
  ${JobFragment}
`

export const JOB_UPDATE_MUTATION = gql`
  mutation JobUpdateMutation($where: JobWhereUniqueInput!, $data: JobUpdateInput!) {
    updateJob(where: $where, data: $data) {
      ...Job
    }
  }
  ${JobFragment}
`

export const JOB_DELETE_MUTATION = gql`
  mutation JobDeleteMutation($where: JobWhereUniqueInput!) {
    deleteJob(where: $where) {
      ...Job
    }
  }
  ${JobFragment}
`

/*
 * ACTIONS
 */

const EDIT = 'EDIT'

const JobCustomActions = {
  setEditable: (editable: boolean) => createAction(EDIT, editable),
}

export const JobActions = {
  ...HostActions,
  ...JobCustomActions,
}

export type JobActions = ActionsUnion<typeof JobActions>

/*
 * REDUCER
 */

const jobReducer = (state: JobState, action: JobActions) => {
  switch (action.type) {
    case EDIT:
      return { ...state, local: { ...state.local, editable: action.payload } }
    default:
      return state
  }
}

/*
 * HOST
 */

export type JobValue = Job

export interface IJobHostInitArg {
  id: string
}

const jobStateInit = ({ id }: IJobHostInitArg) => ({
  editable: false,
})

export type JobLocalState = ReturnType<typeof jobStateInit>
export type JobState = IHostState<JobHostTyping>

export type JobDispatch = IAugumentedDispatch<JobActions, IHostState<JobHostTyping>>

export type JobGraphqlTyping = GraphqlSingleTypingCreator<{
  query: JobQuery
  queryVariables: JobQueryVariables
  createMutation: JobCreateMutation
  createMutationVariables: JobCreateMutationVariables
  updateMutation: JobUpdateMutation
  updateMutationVariables: JobUpdateMutationVariables
  deleteMutation: JobDeleteMutation
  deleteMutationVariables: JobDeleteMutationVariables
}>

export type JobHostTyping = HostTypingCreator<{
  value: JobValue
  localState: JobLocalState
  actions: JobActions
  initArg: IJobHostInitArg
  queryVariables: JobQueryVariables
}>

export const jobHostConfig: IHostConfig<JobHostTyping> = {
  displayName: 'JOB',
  type: HostType.Single,
  reducer: jobReducer,
  initState: jobStateInit,
  initVariables: ({ id }) => ({ where: { id } }),
  resetOnInitArgPropChange: true,
  graphql: {
    query: JOB_QUERY,
    queryRoot: 'job',
    createMutation: JOB_CREATE_MUTATION,
    createMutationRoot: 'createJob',
    updateMutation: JOB_UPDATE_MUTATION,
    updateMutationRoot: 'updateJob',
    deleteMutation: JOB_DELETE_MUTATION,
    deleteMutationRoot: 'deleteJob',
  },
}

export const {
  HostProvider: JobHostProvider,
  useContext: useJobContext,
  Context: JobContext,
} = hostContextFactory<JobHostTyping>(jobHostConfig)
