import gql from 'graphql-tag'
import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { JobFragment } from '../../generated/fragments'
import { JobQuery, JobQueryVariables } from '../../generated/queries'
import { IJobContextInitOptions, JobContext } from './context'
import { useJobReducer } from './reducer'

export interface IJobHostProps {
  initOptions: IJobContextInitOptions
}

export const JobHost: React.FC<IJobHostProps> = ({ initOptions, children }) => {
  const [state, dispatch] = useJobReducer(initOptions)

  const { data } = useQuery<JobQuery, JobQueryVariables>(JOB_QUERY, {
    variables: state.variables,
  })

  if (!data) {
    console.error(`JobHost: query returned undefined`)
    return null
  }

  const job = data.job

  if (job === null) {
    console.error(`JobHost: data fetch error/ job not found. ID: ${initOptions.id}`)
    // TODO: handle it
    return null
  }

  return <JobContext.Provider value={{ job, dispatch, state }}>{children}</JobContext.Provider>
}

export const JOB_QUERY = gql`
  query JobQuery($where: JobWhereUniqueInput!) {
    job(where: $where) {
      ...Job
    }
  }
  ${JobFragment}
`
