import { RouteComponentProps } from '@reach/router'
import { useStore } from '@vats/store'
import { useObserver } from 'mobx-react-lite'
import React from 'react'
import { Router } from '../../components'
import { JobSurface } from '../job'
import { JobsBar } from './bar'
import { JobsList } from './list'
import { createJobsStore, JobsContext } from './store'

const JobsViewDefaultRoute: React.FC<RouteComponentProps> = ({ navigate }) => {
  // TODO: from settings/ last state

  const defaultUrl = `list`

  if (navigate) {
    console.warn(`JobsView: Default route, redirecting to /${defaultUrl}`)
    navigate(defaultUrl, { replace: true })
  }

  return null
}

export interface JobsViewProps extends RouteComponentProps {}

export const JobsView: React.FC<JobsViewProps> = () => {
  const store = useStore(createJobsStore, {}, [])

  return useObserver(
    () => (
      <JobsContext.Provider value={store}>
        <JobsBar />
        <Router basepath={`/jobs`} primary={false}>
          <JobsViewDefaultRoute default={true} />
          <JobsList path={`list`}>
            <JobSurface path={`/job/:id`} />
          </JobsList>
        </Router>
      </JobsContext.Provider>
    ),
    'JobsView',
  )
}

export default JobsView
