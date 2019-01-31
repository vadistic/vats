import { RouteComponentProps } from '@reach/router'
import gql from 'graphql-tag'
import React, { Suspense } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { JobFragment } from '../generated/fragments'
import { Job, JobQuery } from '../generated/queries'

export const JobContext: React.Context<Job> = React.createContext({} as any)

export interface IJobViewProps extends RouteComponentProps {
  id?: string
}

export const JobView: React.FC<IJobViewProps> = ({ id = '' }) => {
  const { data } = useQuery<JobQuery>(jobQuery, {
    variables: { where: { id } },
  })

  if (!data) {
    return null
  }

  const job = data.job

  if (job === null) {
    return <p>Job not found</p>
  }

  return (
    <>
      <Suspense fallback={<p>Loading candidate profile</p>}>
        <JobContext.Provider value={job}>
          <h1>Job View</h1>
        </JobContext.Provider>
      </Suspense>
    </>
  )
}

export const jobQuery = gql`
  query JobQuery($where: JobWhereUniqueInput!) {
    job(where: $where) {
      ...Job
    }
  }
  ${JobFragment}
`
