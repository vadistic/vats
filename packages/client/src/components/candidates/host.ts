import { ActionsUnion, createAction } from '@martin_hotell/rex-tils'
import gql from 'graphql-tag'
import { CandidateFragment } from '../../generated/fragments'
import {
  CandidateCreateMutation,
  CandidateCreateMutationVariables,
  CandidateDeleteMutation,
  CandidateDeleteMutationVariables,
  CandidatesDeleteManyMutation,
  CandidatesDeleteManyMutationVariables,
  CandidatesQuery,
  CandidatesQuery_candidates,
  CandidatesQueryVariables,
  CandidatesUpdateManyMutation,
  CandidatesUpdateManyMutationVariables,
  CandidateUpdateMutation,
  CandidateUpdateMutationVariables,
} from '../../generated/queries'
import { SortDirection } from '../../utils'
import {
  CANDIDATE_CREATE_MUTATION,
  CANDIDATE_DELETE_MUTATION,
  CANDIDATE_UPDATE_MUTATION,
} from '../candidate/host'
import {
  GraphqlMultiTypingCreator,
  HostActions,
  hostContextFactory,
  HostType,
  HostTypingCreator,
  IHostConfig,
  IHostState,
} from '../host'
import { CandidatesSortBy } from './sort'

/*
 * GRAPHQL
 */
export const CANDIDATES_QUERY = gql`
  query CandidatesQuery($where: CandidateWhereInput) {
    candidates(where: $where) {
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

export const CANDIDATES_UPDATE_MANY_MUTATION = gql`
  mutation CandidatesUpdateManyMutation(
    $where: CandidateWhereInput!
    $data: CandidateUpdateManyMutationInput!
  ) {
    updateManyCandidates(data: $data, where: $where) {
      count
    }
  }
`

export const CANDIDATES_DELETE_MANY_MUTATION = gql`
  mutation CandidatesDeleteManyMutation($where: CandidateWhereInput!) {
    deleteManyCandidates(where: $where) {
      count
    }
  }
`

/*
 * ACTIONS
 */

const SORT_BY = 'SORT_BY'
const SORT_DIRECTION = 'SORT_DIRECTION'

const CandidatesCustomActions = {
  sortDirection: (sortDirection: SortDirection) => createAction(SORT_DIRECTION, sortDirection),
  sortBy: (sortBy: CandidatesSortBy) => createAction(SORT_BY, sortBy),
}

export const CandidatesActions = {
  ...HostActions,
  ...CandidatesCustomActions,
}

type CandidatesActions = ActionsUnion<typeof CandidatesActions>

/*
 * REDUCER
 */

export const candidatesReducer = (state: CandidatesState, action: CandidatesActions) => {
  switch (action.type) {
    default:
      // noop
      return
  }
}

/*
 * HOST
 */

export type CandidatesValue = CandidatesQuery_candidates[]

export type CandidatesInitArg = CandidatesQueryVariables | undefined

const candidatesStateInit = () => ({
  sortBy: CandidatesSortBy.CreatedAt,
  sortDirection: SortDirection.ASCENDING,
})

export type CandidatesLocalState = ReturnType<typeof candidatesStateInit>
export type CandidatesState = IHostState<CandidatesHostTyping>

export type CandidatesGraphqlTyping = GraphqlMultiTypingCreator<{
  query: CandidatesQuery
  queryVariables: CandidatesQueryVariables
  createMutation: CandidateCreateMutation
  createMutationVariables: CandidateCreateMutationVariables
  updateMutation: CandidateUpdateMutation
  updateMutationVariables: CandidateUpdateMutationVariables
  deleteMutation: CandidateDeleteMutation
  deleteMutationVariables: CandidateDeleteMutationVariables
  updateManyMutation: CandidatesUpdateManyMutation
  updateManyMutationVariables: CandidatesUpdateManyMutationVariables
  deleteManyMutation: CandidatesDeleteManyMutation
  deleteManyMutationVariables: CandidatesDeleteManyMutationVariables
}>

export type CandidatesHostTyping = HostTypingCreator<{
  value: CandidatesValue
  localState: CandidatesLocalState
  actions: CandidatesActions
  initArg: CandidatesInitArg
  queryVariables: CandidatesQueryVariables
}>

const candidatesHostConfig: IHostConfig<CandidatesHostTyping> = {
  displayName: 'CANDIDATES',
  type: HostType.Multi,
  reducer: candidatesReducer,
  initState: candidatesStateInit,
  initVariables: variables => (variables ? variables : {}),
  resetOnInitArgPropChange: true,
  graphql: {
    query: CANDIDATES_QUERY,
    queryRoot: 'candidates',
    createMutation: CANDIDATE_CREATE_MUTATION,
    createMutationRoot: 'createCandidate',
    updateMutation: CANDIDATE_UPDATE_MUTATION,
    updateMutationRoot: 'updateCandidate',
    deleteMutation: CANDIDATE_DELETE_MUTATION,
    deleteMutationRoot: 'deleteCandidate',
    updateManyMutation: CANDIDATES_UPDATE_MANY_MUTATION,
    updateManyMutationRoot: 'updateManyCandidates',
    deleteManyMutation: CANDIDATES_DELETE_MANY_MUTATION,
    deleteManyMutationRoot: 'deleteManyCandidates',
  },
}

export const {
  Context: CandidatesContext,
  HostProvider: CandidatesHostProvider,
  useContext: useCandidatesContext,
} = hostContextFactory(candidatesHostConfig)
