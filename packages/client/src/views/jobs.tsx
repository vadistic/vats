import { RouteComponentProps } from '@reach/router'
import gql from 'graphql-tag'
import React, { Suspense } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { JobFragment } from '../generated/fragments'
import { Job, JobsQuery } from '../generated/queries'
import { filterNull } from '../utils'

export const JobsContext: React.Context<Job[]> = React.createContext({} as any)

export interface IJobsViewProps extends RouteComponentProps {}

export const JobsView: React.FC<IJobsViewProps> = ({}) => {
  const id = '123'

  const { data } = useQuery<JobsQuery>(jobsQuery, {
    variables: { where: { id } },
  })

  if (!data) {
    return null
  }

  const jobs = filterNull(data.jobs)

  if (jobs.length === 0) {
    return <p>Jobs not found</p>
  }

  return (
    <>
      <Suspense fallback={<p>Loading jobs list</p>}>
        <JobsContext.Provider value={jobs}>
          <h1>Jobs View</h1>
        </JobsContext.Provider>
      </Suspense>
    </>
  )
}

export const jobsQuery = gql`
  query JobsQuery($where: JobWhereInput) {
    jobs(where: $where) {
      ...Job
    }
  }
  ${JobFragment}
`
