import { RouteComponentProps } from '@reach/router'
import gql from 'graphql-tag'
import React, { Suspense } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { CandidateFragment } from '../generated/fragments'
import { Candidate, CandidatesQuery, CandidatesQueryVariables, Job } from '../generated/queries'
import { filterNull } from '../utils'

export const CandidatesContext: React.Context<Candidate[]> = React.createContext({} as any)

export interface ICandidatesViewProps extends RouteComponentProps {}

export const CandidatesView: React.FC<ICandidatesViewProps> = ({}) => {
  const id = '123'

  const { data } = useQuery<CandidatesQuery, CandidatesQueryVariables>(candidatesQuery, {
    variables: { where: { id } },
  })

  if (!data) {
    return null
  }

  const candidates = filterNull(data.candidates)

  if (candidates.length === 0) {
    return <p>Candidates not found</p>
  }

  return (
    <>
      <Suspense fallback={<p>Loading candidates list</p>}>
        <CandidatesContext.Provider value={candidates}>
          <h1>Candidates View</h1>
        </CandidatesContext.Provider>
      </Suspense>
    </>
  )
}

export const candidatesQuery = gql`
  query CandidatesQuery($where: CandidateWhereInput) {
    candidates(where: $where) {
      ...Candidate
    }
  }
  ${CandidateFragment}
`
