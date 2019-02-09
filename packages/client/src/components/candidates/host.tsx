import gql from 'graphql-tag'
import { CandidateFragment } from '../../generated/fragments'
import { Candidate } from '../../generated/queries'
import { hostFactory, HostType, IHostConfig } from '../host'
import {
  candidatesReducer,
  candidatesStateInit,
  ICandidatesActions,
  ICandidatesState,
} from './reducer'

export const CANDIDATES_QUERY = gql`
  query CandidatesQuery($where: CandidateWhereInput) {
    candidates(where: $where) {
      ...Candidate
    }
  }

  ${CandidateFragment}
`

const candidatesHostConfig: IHostConfig<
  Candidate[],
  ICandidatesState,
  ICandidatesActions,
  undefined
> = {
  query: CANDIDATES_QUERY,
  name: 'CANDIDATES_HOST',
  propName: 'candidates',
  type: HostType.Multi,
  reducer: candidatesReducer,
  init: candidatesStateInit,
}

export const { Host: CandidatesHost, useContext: useCandidatesContext } = hostFactory(
  candidatesHostConfig,
)
