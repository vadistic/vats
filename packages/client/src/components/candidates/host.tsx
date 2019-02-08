import gql from 'graphql-tag'
import React, { useMemo } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { CandidateFragment } from '../../generated/fragments'
import { CandidatesQuery, CandidatesQueryVariables } from '../../generated/queries'
import { CandidatesContext } from './context'
import { useCandidatesReducer } from './reducer'
import { candidatesSorter } from './sort'

export interface ICandidatesHostProps {}

export const CandidatesHost: React.FC<ICandidatesHostProps> = ({ children }) => {
  const [state, dispatch] = useCandidatesReducer()

  const { data } = useQuery<CandidatesQuery, CandidatesQueryVariables>(CANDIDATES_QUERY, {
    variables: state.variables,
  })

  if (!data) {
    console.error(`CandidatesHost returned null data`)
    return null
  }

  if (data.candidates.length === 0) {
    console.error(`CandidatesHost found no candidates`)
    // TODO: handle it
    return null
  }

  const candidates = useMemo(() => candidatesSorter(data, state), [data, state])

  return (
    <CandidatesContext.Provider value={{ candidates, dispatch, state }}>
      {children}
    </CandidatesContext.Provider>
  )
}

export const CANDIDATES_QUERY = gql`
  query CandidatesQuery($where: CandidateWhereInput) {
    candidates(where: $where) {
      ...Candidate
    }
  }

  ${CandidateFragment}
`
