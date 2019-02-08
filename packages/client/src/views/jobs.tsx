import { RouteComponentProps, Router } from '@reach/router'
import gql from 'graphql-tag'
import React, { useMemo } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { JobsContext, JobsList, jobsSorter, useJobsReducer } from '../components'
import { JobSurface } from '../components/job'
import { JobsBar } from '../components/jobs/bar'
import { JobFragment } from '../generated/fragments'
import { JobsQuery, JobsQueryVariables } from '../generated/queries'
import { routes } from '../routes'

export interface IJobsViewProps extends RouteComponentProps {}

export const JobsView: React.FC<IJobsViewProps> = () => {
  const [state, dispatch] = useJobsReducer()

  const { data } = useQuery<JobsQuery, JobsQueryVariables>(JOBS_QUERY, {
    variables: state.variables,
  })

  if (!data) {
    return null
  }

  if (data.jobs.length === 0) {
    // TODO: handle it
    return null
  }

  const jobs = useMemo(() => jobsSorter(data, state), [data, state])
  return (
    <>
      <JobsContext.Provider value={{ jobs, dispatch, state }}>
        <Router basepath={routes.jobs.basepath} primary={false}>
          <JobSurface path={routes.jobs.children.jobSurface.path} />
        </Router>
        <JobsBar />
        <JobsList />
      </JobsContext.Provider>
    </>
  )
}

export const JOBS_QUERY = gql`
  query JobsQuery($where: JobWhereInput, $orderBy: JobOrderByInput) {
    jobs(where: $where, orderBy: $orderBy) {
      ...Job
    }
  }
  ${JobFragment}
`
