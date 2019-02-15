import { ActionsUnion, createAction } from '@martin_hotell/rex-tils'
import gql from 'graphql-tag'
import produce from 'immer'
import { CandidateFragment } from '../../generated/fragments'
import {
  CandidateCreateMutation,
  CandidateCreateMutationVariables,
  CandidateDeleteMutation,
  CandidateDeleteMutationVariables,
  CandidateQuery,
  CandidateQuery_candidate,
  CandidateQueryVariables,
  CandidateUpdateMutation,
  CandidateUpdateMutationVariables,
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

export const CANDIDATE_QUERY = gql`
  query CandidateQuery($where: CandidateWhereUniqueInput!) {
    candidate(where: $where) {
      # TODO: Fix generate fragments
      phones
      emails
      links
      resumesString
      coverLettersString
      ...Candidate
    }
  }

  ${CandidateFragment}
`

export const CANDIDATE_CREATE_MUTATION = gql`
  mutation CandidateCreateMutation($data: CandidateCreateInput!) {
    createCandidate(data: $data) {
      phones
      emails
      links
      resumesString
      ...Candidate
    }
  }

  ${CandidateFragment}
`

export const CANDIDATE_UPDATE_MUTATION = gql`
  mutation CandidateUpdateMutation(
    $data: CandidateUpdateInput!
    $where: CandidateWhereUniqueInput!
  ) {
    updateCandidate(data: $data, where: $where) {
      phones
      emails
      links
      resumesString
      ...Candidate
    }
  }

  ${CandidateFragment}
`

export const CANDIDATE_DELETE_MUTATION = gql`
  mutation CandidateDeleteMutation($where: CandidateWhereUniqueInput!) {
    deleteCandidate(where: $where) {
      phones
      emails
      links
      resumesString
      ...Candidate
    }
  }

  ${CandidateFragment}
`

/*
 * ACTIONS
 */

const EDIT = 'EDIT'

const CandidateCustomActions = {
  edit: (editable: boolean) => createAction(EDIT, editable),
}

type CandidateActionsUnion = ActionsUnion<typeof CandidateCustomActions>

/*
 * REDUCER
 */

const candidateReducer = produce<CandidateState, [CandidateActionsUnion]>((draft, action) => {
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

export type CandidateValue = CandidateQuery_candidate

export interface ICandidateInitArg {
  id: string
}

const candidateStateInit = ({ id }: ICandidateInitArg) => ({
  editable: false,
})

export type CandidateLocalState = ReturnType<typeof candidateStateInit>
export type CandidateState = IHostState<CandidateHostTyping, CandidateGraphqlTyping>

export type CandidateHostThunk = HostThunk<CandidateHostTyping, CandidateGraphqlTyping>

export type CandidateGraphqlTyping = IGraphqlSingleTyping<
  CandidateQuery,
  CandidateQueryVariables,
  CandidateCreateMutation,
  CandidateCreateMutationVariables,
  CandidateUpdateMutation,
  CandidateUpdateMutationVariables,
  CandidateDeleteMutation,
  CandidateDeleteMutationVariables
>

export type CandidateHostTyping = IHostTyping<
  CandidateValue,
  CandidateLocalState,
  CandidateActionsUnion,
  ICandidateInitArg
>

const candidateHostConfig: IHostConfig<CandidateHostTyping, CandidateGraphqlTyping> = {
  displayName: 'CANDIDATE',
  type: HostType.Single,
  reducer: candidateReducer,
  initState: candidateStateInit,
  initVariables: ({ id }) => ({ where: { id } }),
  resetOnInitArgPropChange: true,
  graphql: {
    query: CANDIDATE_QUERY,
    queryRoot: 'candidate',
    createMutation: CANDIDATE_CREATE_MUTATION,
    createMutationRoot: 'createCandidate',
    updateMutation: CANDIDATE_UPDATE_MUTATION,
    updateMutationRoot: 'updateCandidate',
    deleteMutation: CANDIDATE_DELETE_MUTATION,
    deleteMutationRoot: 'deleteCandidate',
  },
}

export const {
  Host: CandidateHost,
  useContext: useCandidateContext,
  Context: CandidateContext,
  Actions: CandidateHostActions,
} = hostFactory<CandidateHostTyping, CandidateGraphqlTyping>(candidateHostConfig)

export const CandidateActions = {
  ...CandidateHostActions,
  ...CandidateCustomActions,
}
