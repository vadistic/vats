import gql from 'graphql-tag'
import React, { useState } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { CandidateFragment } from '../../generated/fragments'
import { CandidateQuery, CandidateQueryVariables } from '../../generated/queries'
import { CandidateContext, ICandidateReducerInitArg } from './context'
import { CandidateActionType, useCandidateReducer } from './reducer'

export interface ICandidateHostProps {
  initArg: ICandidateReducerInitArg
}

export const CandidateHost: React.FC<ICandidateHostProps> = ({
  initArg: initOptions,
  children,
}) => {
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
