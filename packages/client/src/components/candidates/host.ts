import { ActionsUnion, createAction } from '@martin_hotell/rex-tils'
import gql from 'graphql-tag'
import produce from 'immer'
import { CandidateFragment } from '../../generated/fragments'
import { CandidatesQuery_candidates, CandidatesQueryVariables } from '../../generated/queries'
import { SortDirection } from '../../utils'
import { CANDIDATE_UPDATE_MUTATION } from '../candidate/host'
import { hostFactory, HostType, IHostTyping } from '../host'
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

/*
 * ACTIONS
 */

const SORT_BY = 'SORT_BY'
const SORT_DIRECTION = 'SORT_DIRECTION'

const CandidatesCustomActions = {
  sortDirection: (sortDirection: SortDirection) => createAction(SORT_DIRECTION, sortDirection),
  sortBy: (sortBy: CandidatesSortBy) => createAction(SORT_BY, sortBy),
}

type CandidatesActionsUnion = ActionsUnion<typeof CandidatesCustomActions>

/*
 * REDUCER
 */

export const candidatesReducer = produce<any, [CandidatesActionsUnion]>((draft, action) => {
  switch (action.type) {
    default:
      // noop
      return
  }
})

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

export type CandidatesHostTyping = IHostTyping<
  CandidatesValue,
  CandidatesLocalState,
  CandidatesActionsUnion,
  CandidatesInitArg,
  CandidatesQueryVariables
>

export type CandidatesState = CandidatesHostTyping['state']

const candidatesHostConfig: CandidatesHostTyping['config'] = {
  displayName: 'CANDIDATES',
  rootField: 'candidates',
  type: HostType.Multi,
  reducer: candidatesReducer,
  query: CANDIDATES_QUERY,
  updateMutation: CANDIDATE_UPDATE_MUTATION,
  initState: candidatesStateInit,
  initVariables: variables => (variables ? variables : {}),
  resetOnInitArgPropChange: true,
}

export const {
  Host: CandidatesHost,
  useContext: useCandidatesContext,
  Context: CandidatesContext,
  Actions: CandidatesHostActions,
} = hostFactory<CandidatesHostTyping>(candidatesHostConfig)

export const CandidatesActions = {
  ...CandidatesHostActions,
  ...CandidatesCustomActions,
}
