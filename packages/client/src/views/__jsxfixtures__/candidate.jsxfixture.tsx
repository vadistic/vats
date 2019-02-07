import gql from 'graphql-tag'
import React, { Suspense } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { CandidateFragment } from '../../generated/fragments'
import { CandidateViewFixtureIndexQuery } from '../../generated/queries'
import { random } from '../../utils'
import { CandidateView } from '../candidate'

const RANDOM_POOL = 20

export const CandidateViewFixture: React.FC = () => {
  const { data } = useQuery<CandidateViewFixtureIndexQuery>(candidateViewFixtureIndexQuery, {
    variables: { first: RANDOM_POOL },
  })

  if (!data) {
    return null
  }

  const index = random(RANDOM_POOL)

  const candidate = data.candidates[index]

  if (!candidate) {
    return null
  }

  const id = candidate.id

  return <CandidateView id={id} />
}

const candidateViewFixtureIndexQuery = gql`
  query CandidateViewFixtureIndexQuery($first: Int = 1) {
    candidates(first: $first) {
      ...Candidate
    }
  }

  ${CandidateFragment}
`

export default <CandidateViewFixture />
