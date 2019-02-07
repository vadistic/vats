import { RouteComponentProps } from '@reach/router'
import gql from 'graphql-tag'
import produce from 'immer'
import React, { useMemo, useState } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { useReducer } from 'reinspect'
import { JobsList } from '../components'
import { JobsBar } from '../components/jobs/bar'
import { JobFragment } from '../generated/fragments'
import { Job, JobsQuery, JobsQueryVariables } from '../generated/queries'
import { filterNull, mutableSortByGetter, mutableSortByProp, SortDirection } from '../utils'

export interface IJobsState {
  variables: {
    where: JobsQueryVariables['where']
  }
  local: {
    sortBy: JobsSortBy
    sortDirection: SortDirection
  }
}

export interface IJobsContext {
  jobs: Job[]
  dispatch: React.Dispatch<IJobsReducerActions>
  state: IJobsState
}

export enum JobsSortBy {
  NAME = 'name',
  DEPARTMENT = 'department',
  CREATED_AT = 'createdAt',
  UPDATED_AT = 'updatedAt',
  // custom
  APPLICATIONS = 'applications',
  LOCATION = 'location',
}

type TJobsSortDisplayNamesMap = { [K in JobsSortBy]: string }

export const JobsSortDisplayNamesMap: TJobsSortDisplayNamesMap = {
  [JobsSortBy.NAME]: 'job name',
  [JobsSortBy.DEPARTMENT]: 'department',
  [JobsSortBy.CREATED_AT]: 'create date',
  [JobsSortBy.UPDATED_AT]: 'update date',
  [JobsSortBy.APPLICATIONS]: 'application',
  [JobsSortBy.LOCATION]: 'location',
}

export enum JobActionType {
  REFETCH = 'REFETCH',
  SORT_BY = 'SORT_BY',
  SORT_DIRECTION = 'SORT_DIRECTION',
}

export type IJobsReducerActions =
  | {
      type: JobActionType.SORT_BY
      sortBy: JobsSortBy
    }
  | {
      type: JobActionType.REFETCH
      data?: never
    }
  | {
      type: JobActionType.SORT_DIRECTION
      sortDirection?: SortDirection
    }

const jobsReducer = produce<IJobsState, [IJobsReducerActions]>((draft, action) => {
  switch (action.type) {
    case JobActionType.REFETCH:
      return
    case JobActionType.SORT_BY:
      draft.local.sortBy = action.sortBy
      return
    case JobActionType.SORT_DIRECTION:
      draft.local.sortDirection = action.sortDirection || draft.local.sortDirection * -1
      return
    default:
      // noop
      return
  }
})

const jobsSorter = (data: JobsQuery, state: IJobsState): Job[] => {
  const jobs = filterNull(data.jobs)
  switch (state.local.sortBy) {
    case JobsSortBy.APPLICATIONS:
      return mutableSortByGetter(jobs, state.local.sortDirection, job =>
        job.applications ? job.applications.length : null,
      )
    // TODO: evaluate if sorting by city of first location makes any sense
    case JobsSortBy.LOCATION:
      return mutableSortByGetter(jobs, state.local.sortDirection, job =>
        job.locations && job.locations[0] ? job.locations[0].city : null,
      )
    default:
      return mutableSortByProp(jobs, state.local.sortDirection, state.local.sortBy)
  }
}

export const JobsContext: React.Context<IJobsContext> = React.createContext({} as any)

export interface IJobsViewProps extends RouteComponentProps {}

export const JobsView: React.FC<IJobsViewProps> = () => {
  const [state, dispatch] = useReducer(
    jobsReducer,
    {
      variables: {
        where: undefined,
      },
      local: {
        sortBy: JobsSortBy.NAME,
        sortDirection: SortDirection.DESCENDING,
      },
    },
    s => s,
    'JOBS_VIEW',
  )

  const { data } = useQuery<JobsQuery, JobsQueryVariables>(JOBS_QUERY, {
    variables: state.variables,
  })

  if (!data) {
    return null
  }

  if (data.jobs.length === 0) {
    return <p>Jobs not found</p>
  }

  const jobs = useMemo(() => jobsSorter(data, state), [data, state])

  return (
    <>
      <JobsContext.Provider value={{ jobs, dispatch, state }}>
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
