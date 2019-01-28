import gql from 'graphql-tag'
import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { CandidateFragment } from '../../../generated/fragments'
import {
  CandidateProfileFixtureIndexQuery,
  CandidateProfileFixtureQuery,
  CandidateProfileFixtureQueryVariables,
} from '../../../generated/queries'
import { IFixtureLogProps } from '../../fixture'
import { CandidateProfile } from '../candidate-profile'

import { StrictId as SetId } from '../../../utils'
import mock from './mock.json'

export const CandidateProfileFixture: React.FC<IFixtureLogProps> = () => (
  <CandidateProfile candidate={mock.candidate as SetId<'Candidate', typeof mock.candidate>} />
)

export const CandidateProfileLiveFixture: React.FC<IFixtureLogProps> = ({ log }) => {
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

  if (log) {
    log(data)
  }

  return <CandidateProfile candidate={data.candidate} />
}

export const candidateProfileFixtureQuery = gql`
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
