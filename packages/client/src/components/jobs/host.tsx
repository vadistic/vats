import gql from 'graphql-tag'
import React, { useMemo } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { JobFragment } from '../../generated/fragments'
import { JobsQuery, JobsQueryVariables } from '../../generated/queries'
import { JobsContext } from './context'
import { useJobsReducer } from './reducer'
import { jobsSorter } from './sort'

export interface IJobsHostProps {}

export const JobsHost: React.FC<IJobsHostProps> = ({ children }) => {
  const [state, dispatch] = useJobsReducer()

  const { data } = useQuery<JobsQuery, JobsQueryVariables>(JOBS_QUERY, {
    variables: state.variables,
  })

  if (!data) {
    console.error(`JobsHost returned null data`)
    return null
  }

  if (data.jobs.length === 0) {
    console.error(`JobsHost found no jobs`)
    // TODO: handle it
    return null
  }

  const jobs = useMemo(() => jobsSorter(data, state), [data, state])

  return <JobsContext.Provider value={{ jobs, dispatch, state }}>{children}</JobsContext.Provider>
}

export const JOBS_QUERY = gql`
  query JobsQuery($where: JobWhereInput, $orderBy: JobOrderByInput) {
    jobs(where: $where, orderBy: $orderBy) {
      ...Job
    }
  }

  ${JobFragment}
`
