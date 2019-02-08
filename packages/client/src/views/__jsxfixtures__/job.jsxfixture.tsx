import gql from 'graphql-tag'
import React, { Suspense } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { JobFragment } from '../../generated/fragments'
import { JobViewFixtureIndexQuery } from '../../generated/queries'
import { random } from '../../utils'
import { JobView } from '../job'

const RANDOM_POOL = 10

export const JobViewFixture: React.FC = () => {
  const { data } = useQuery<JobViewFixtureIndexQuery>(jobViewFixtureIndexQuery, {
    variables: { first: RANDOM_POOL },
  })

  const index = random(RANDOM_POOL)

  if (!data) {
    return null
  }

  const job = data.jobs[index]

  if (!job) {
    return null
  }

  const id = job.id

  return <JobView path={id} />
}

const jobViewFixtureIndexQuery = gql`
  query JobViewFixtureIndexQuery($first: Int = 1) {
    jobs(first: $first) {
      ...Job
    }
  }

  ${JobFragment}
`

export default <JobViewFixture />
