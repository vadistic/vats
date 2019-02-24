import { ActionsUnion, createAction } from '@martin_hotell/rex-tils'
import gql from 'graphql-tag'
import produce from 'immer'
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
  hostFactory,
  HostThunk,
  HostType,
  IGraphqlSingleTyping,
  IHostConfig,
  IHostState,
  IHostTyping,
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

type JobActionsUnion = ActionsUnion<typeof JobCustomActions>

/*
 * REDUCER
 */

const jobReducer = produce<JobHostState, [JobActionsUnion]>((draft, action) => {
  switch (action.type) {
    case EDIT:
      draft.local.editable = action.payload || !draft.local.editable
      return
    default:
      return
  }
})

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

export type JobHostLocalState = ReturnType<typeof jobStateInit>
export type JobHostState = IHostState<JobHostTyping, JobGraphqlTyping>

export type JobGraphqlTyping = IGraphqlSingleTyping<
  JobQuery,
  JobQueryVariables,
  JobCreateMutation,
  JobCreateMutationVariables,
  JobUpdateMutation,
  JobUpdateMutationVariables,
  JobDeleteMutation,
  JobDeleteMutationVariables
>

export type JobHostTyping = IHostTyping<
  JobValue,
  JobHostLocalState,
  JobActionsUnion,
  IJobHostInitArg
>

export type JobHostThunk = HostThunk<JobHostTyping, JobGraphqlTyping>

const jobHostConfig: IHostConfig<JobHostTyping, JobGraphqlTyping> = {
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
  Host: JobHost,
  HostProvider: JobHostProvider,
  HostQuery: JobHostQuery,
  useContext: useJobContext,
  Context: JobContext,
  Actions: JobHostActions,
} = hostFactory<JobHostTyping, JobGraphqlTyping>(jobHostConfig)

export const JobActions = {
  ...JobHostActions,
  ...JobCustomActions,
}
