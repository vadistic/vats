import { RouteComponentProps } from '@reach/router'
import gql from 'graphql-tag'
import React, { Suspense } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { Router } from '../components'
import { CandidateFragment } from '../generated/fragments'
import { Candidate, CandidateQuery, CandidateQueryVariables } from '../generated/queries'

export const CandidateContext: React.Context<Candidate> = React.createContext({} as any)

export interface ICandidateViewProps extends RouteComponentProps {
  id?: string
}

export const CandidateView: React.FC<ICandidateViewProps> = ({ id = '' }) => {
  const { data } = useQuery<CandidateQuery, CandidateQueryVariables>(candidateQuery, {
    variables: { where: { id } },
  })

  if (!data) {
    return null
  }

  const candidate = data.candidate

  if (candidate === null) {
    // TODO: Not-found fallback
    return <p>Candidate not found</p>
  }

  return (
    <>
      <Suspense fallback={<p>Loading candidate profile</p>}>
        <CandidateContext.Provider value={candidate}>
          <h1>Candidate View</h1>
        </CandidateContext.Provider>
      </Suspense>
    </>
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
