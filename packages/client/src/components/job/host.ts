import { ActionsUnion, createAction } from '@martin_hotell/rex-tils'
import gql from 'graphql-tag'
import produce from 'immer'
import { JobFragment } from '../../generated/fragments'
import { Job, JobQueryVariables, JobUpdateMutationVariables } from '../../generated/queries'
import { hostFactory, HostType, IHostTyping } from '../host'

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

export const JOB_UPDATE_MUTATION = gql`
  mutation JobUpdateMutation($where: JobWhereUniqueInput!, $data: JobUpdateInput!) {
    updateJob(where: $where, data: $data) {
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
  edit: (editable: boolean) => createAction(EDIT, editable),
}

type JobActionsUnion = ActionsUnion<typeof JobCustomActions>

/*
 * REDUCER
 */

const jobReducer = produce<JobHostTyping['state'], [JobActionsUnion]>((draft, action) => {
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

export type IJobHostLocalState = ReturnType<typeof jobStateInit>

export type JobHostTyping = IHostTyping<
  JobValue,
  IJobHostLocalState,
  JobActionsUnion,
  IJobHostInitArg,
  JobQueryVariables,
  JobUpdateMutationVariables['data']
>

const jobHostConfig: JobHostTyping['config'] = {
  displayName: 'JOB',
  rootField: 'job',
  type: HostType.Single,
  reducer: jobReducer,
  query: JOB_QUERY,
  updateMutation: JOB_UPDATE_MUTATION,
  initState: jobStateInit,
  initVariables: ({ id }) => ({ where: { id } }),
  resetOnInitArgPropChange: true,
}

export const {
  Host: JobHost,
  useContext: useJobContext,
  Context: JobContext,
  Actions: JobHostActions,
} = hostFactory<JobHostTyping>(jobHostConfig)

export const JobActions = {
  ...JobHostActions,
  ...JobCustomActions,
}
