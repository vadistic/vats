import gql from 'graphql-tag'
import React from 'react'
import { useMutation, useQuery } from 'react-apollo-hooks'
import { CandidateFragment } from '../../generated/fragments'
import { CandidateView } from '../candidate'

export const CandidateViewFixture: React.FC = () => {
  const { data } = useQuery(candidateViewFixtureIndexQuery)

  if (!data || !data.candidates[0]) {
    return null
  }

  const id = data.candidates[0].id

  return <CandidateView id={id} />
}

const candidateViewFixtureIndexQuery = gql`
  query CandidateViewFixtureIndexQuery {
    candidates(first: 1) {
      ...Candidate
    }
  }

  ${CandidateFragment}
`

export default <CandidateViewFixture />
