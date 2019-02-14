import { ActionsUnion, createAction } from '@martin_hotell/rex-tils'
import gql from 'graphql-tag'
import produce from 'immer'
import { CandidateFragment } from '../../generated/fragments'
import { CandidateQuery_candidate, CandidateQueryVariables } from '../../generated/queries'
import { hostFactory, HostType, IHostTyping } from '../host'

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

const candidateReducer = produce<CandidateHostTyping['state'], [CandidateActionsUnion]>(
  (draft, action) => {
    switch (action.type) {
      case EDIT:
        draft.local.editable = action.payload || !draft.local.editable
        return
      default:
        return
    }
  },
)

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

export type CandidateHostTyping = IHostTyping<
  CandidateValue,
  CandidateLocalState,
  CandidateActionsUnion,
  ICandidateInitArg,
  CandidateQueryVariables
>

const candidateHostConfig: CandidateHostTyping['config'] = {
  displayName: 'CANDIDATE',
  rootField: 'candidate',
  type: HostType.Single,
  reducer: candidateReducer,
  query: CANDIDATE_QUERY,
  updateMutation: CANDIDATE_UPDATE_MUTATION,
  initState: candidateStateInit,
  initVariables: ({ id }) => ({ where: { id } }),
  resetOnInitArgPropChange: true,
}

export const {
  Host: CandidateHost,
  useContext: useCandidateContext,
  Context: CandidateContext,
  Actions: CandidateHostActions,
} = hostFactory<CandidateHostTyping>(candidateHostConfig)

export const CandidateActions = {
  ...CandidateHostActions,
  ...CandidateCustomActions,
}
