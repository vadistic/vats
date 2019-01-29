import gql from 'graphql-tag'
import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { Table } from '..'
import { CandidateFragment } from '../../../generated/fragments'
import { Candidate, TableFixtureQuery } from '../../../generated/queries'

export const TableLiveFixture: React.FC = () => {
  const { data } = useQuery<TableFixtureQuery>(tableFixtureQuery)

  if (!(data && data.candidates)) {
    return null
  }

  return <Table items={data.candidates as Candidate[]} />
}

const tableFixtureQuery = gql`
  query TableFixtureQuery {
    candidates(first: 20) {
      ...Candidate
    }
  }

  ${CandidateFragment}
`

export default <TableLiveFixture />
