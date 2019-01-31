import gql from 'graphql-tag'
import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { CandidateFragment } from '../../../generated/fragments'
import {
  CandidateProfileFixtureIndexQuery,
  CandidateProfileFixtureQuery,
  CandidateProfileFixtureQueryVariables,
} from '../../../generated/queries'
import { CandidateContext } from '../../../views'
import { CandidateProfile } from '../candidate-profile'

export const CandidateProfileLiveFixture: React.FC = () => {
  const { data: indexData } = useQuery<CandidateProfileFixtureIndexQuery>(
    candidateProfileFixtureIndexQuery,
  )

  if (!indexData || !indexData.candidates[0]) {
    return null
  }

  const candidate = indexData.candidates[0]

  const id = (candidate && candidate.id) || ''

  const { data } = useQuery<CandidateProfileFixtureQuery, CandidateProfileFixtureQueryVariables>(
    candidateProfileFixtureQuery,
    { variables: { where: { id } } },
  )

  if (!data || !data.candidate) {
    return null
  }

  return (
    <CandidateContext.Provider value={data.candidate}>
      <CandidateProfile />
    </CandidateContext.Provider>
  )
}

const candidateProfileFixtureQuery = gql`
  query CandidateProfileFixtureQuery($where: CandidateWhereUniqueInput!) {
    candidate(where: $where) {
      ...Candidate
    }
  }

  ${CandidateFragment}
`

const candidateProfileFixtureIndexQuery = gql`
  query CandidateProfileFixtureIndexQuery {
    candidates(first: 1) {
      ...Candidate
    }
  }

  ${CandidateFragment}
`

export default <CandidateProfileLiveFixture />
