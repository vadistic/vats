import { ActionsUnion, createAction } from '@martin_hotell/rex-tils'
import gql from 'graphql-tag'
import { client } from '../../apollo'
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
  AugumentedDispatch,
  GraphqlSingleTypingCreator,
  HostActions,
  HostConfigI,
  hostContextFactory,
  HostStateI,
  HostType,
  HostTypingCreator,
  RelationsType,
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
  setEditable: (editable: boolean) => createAction(EDIT, editable),
}

export const CandidateActions = {
  ...HostActions,
  ...CandidateCustomActions,
}

export type CandidateActions = ActionsUnion<typeof CandidateActions>

/*
 * REDUCER
 */

const candidateReducer = (state: CandidateState, action: CandidateActions) => {
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

export type CandidateValue = CandidateQuery_candidate

export interface CandidateInitArg {
  id: string
}

const candidateStateInit = ({ id }: CandidateInitArg) => ({
  editable: false,
})

export type CandidateLocalState = ReturnType<typeof candidateStateInit>
export type CandidateState = HostStateI<CandidateHostTyping>

export type CandidateDispatch = AugumentedDispatch<
  CandidateActions,
  HostStateI<CandidateHostTyping>
>

export type CandidateGraphqlTyping = GraphqlSingleTypingCreator<{
  query: CandidateQuery
  queryVariables: CandidateQueryVariables
  createMutation: CandidateCreateMutation
  createMutationVariables: CandidateCreateMutationVariables
  updateMutation: CandidateUpdateMutation
  updateMutationVariables: CandidateUpdateMutationVariables
  deleteMutation: CandidateDeleteMutation
  deleteMutationVariables: CandidateDeleteMutationVariables
}>

export type CandidateHostTyping = HostTypingCreator<{
  value: CandidateValue
  localState: CandidateLocalState
  actions: CandidateActions
  initArg: CandidateInitArg
  queryVariables: CandidateQueryVariables
}>

const candidateRelations: RelationsType<CandidateValue> = {
  tags: {
    onCreate: 'connect',
    onDelete: 'disconnect',
  },
  sources: {
    onCreate: 'connect',
    onDelete: 'disconnect',
  },
}

export const candidateHostConfig: HostConfigI<CandidateHostTyping> = {
  displayName: 'CANDIDATE',
  type: HostType.Single,
  reducer: candidateReducer,
  initState: candidateStateInit,
  initVariables: ({ id }) => ({ where: { id } }),
  resetOnInitArgPropChange: true,
  relations: candidateRelations,
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
  Context: CandidateContext,
  HostProvider: CandidateHostProvider,
  useContext: useCandidateContext,
} = hostContextFactory<CandidateHostTyping>(candidateHostConfig)
