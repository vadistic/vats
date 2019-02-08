import gql from 'graphql-tag'
import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { CandidateFragment } from '../../generated/fragments'
import { CandidateQuery, CandidateQueryVariables } from '../../generated/queries'
import { CandidateContext, ICandidateContextInitOptions } from './context'
import { useCandidateReducer } from './reducer'

export interface ICandidateHostProps {
  // TODO:
  initOptions: ICandidateContextInitOptions
}

export const CandidateHost: React.FC<ICandidateHostProps> = ({ initOptions, children }) => {
  const [state, dispatch] = useCandidateReducer(initOptions)

  const { data } = useQuery<CandidateQuery, CandidateQueryVariables>(candidateQuery, {
    variables: state.variables,
  })

  if (!data) {
    console.error(`CandidateHost: query returned undefined`)
    return null
  }

  const candidate = data.candidate

  if (candidate === null) {
    console.error(`CandidateHost: data fetch error/ candidate not found. ID: ${initOptions.id}`)
    // TODO: Not-found fallback
    return null
  }

  return (
    <CandidateContext.Provider value={{ candidate, dispatch, state }}>
      {children}
    </CandidateContext.Provider>
  )
}

export const candidateQuery = gql`
  query CandidateQuery($where: CandidateWhereUniqueInput!) {
    candidate(where: $where) {
      ...Candidate
    }
  }

  ${CandidateFragment}
`
