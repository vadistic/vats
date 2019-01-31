import gql from 'graphql-tag'
import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { JobFragment } from '../../generated/fragments'
import { JobView } from '../job'

export const JobViewFixture: React.FC = () => {
  const { data } = useQuery(jobViewFixtureIndexQuery)

  if (!data || !data.jobs[0]) {
    return null
  }

  const id = data.jobs[0].id

  return <JobView id={id} />
}

const jobViewFixtureIndexQuery = gql`
  query JobViewFixtureIndexQuery {
    jobs(first: 1) {
      ...Job
    }
  }

  ${JobFragment}
`

export default <JobViewFixture />
