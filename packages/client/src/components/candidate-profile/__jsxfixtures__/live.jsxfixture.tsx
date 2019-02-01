import gql from 'graphql-tag'
import React, { useState } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { CandidateFragment } from '../../../generated/fragments'
import {
  CandidateProfileFixtureIndexQuery,
  CandidateProfileFixtureQuery,
  CandidateProfileFixtureQueryVariables,
} from '../../../generated/queries'
import { random } from '../../../utils'
import { CandidateContext } from '../../../views'
import { CandidateProfile } from '../candidate-profile'

export const CandidateProfileLiveFixture: React.FC = () => {
  const { data: indexData } = useQuery<CandidateProfileFixtureIndexQuery>(
    candidateProfileFixtureIndexQuery,
  )

  const [index, setIndex] = useState(random(10))

  if (!indexData || !indexData.candidates[index]) {
    return null
  }

  const candidate = indexData.candidates[index]

  const id = (candidate && candidate.id) || ''

  const { data } = useQuery<CandidateProfileFixtureQuery, CandidateProfileFixtureQueryVariables>(
    candidateProfileFixtureQuery,
    { variables: { where: { id } } },
  )

  if (!data || !data.candidate) {
    return null
  }

  console.log(data)

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
    candidates(first: 10) {
      ...Candidate
    }
  }

  ${CandidateFragment}
`

export default <CandidateProfileLiveFixture />
