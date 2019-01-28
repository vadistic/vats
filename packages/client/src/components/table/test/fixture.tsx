import gql from 'graphql-tag'
import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { Table } from '..'
import { CandidateFragment } from '../../../generated/fragments'
import { Candidate, TableFixtureQuery, User } from '../../../generated/queries'
import { IFixtureLogProps } from '../../fixture'

export const TableLiveFixture: React.FC<IFixtureLogProps> = ({ log }) => {
  const { data } = useQuery<TableFixtureQuery>(tableFixtureQuery)

  if (!(data && data.candidates)) {
    return null
  }

  log(data)

  return <Table items={data.candidates as Candidate[]} />
}

export const tableFixtureQuery = gql`
  query TableFixtureQuery {
    candidates(first: 20) {
      ...Candidate
    }
  }

  ${CandidateFragment}
`
