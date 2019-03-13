import { RouteComponentProps } from '@reach/router'
import { StoreProvider } from '@vats/store'
import React from 'react'
import { Router } from '../../components'
import { routes } from '../../routes'
import { JobSurface } from '../job'
import { JobsBar } from './bar'
import { JobsList } from './list'
import { createJobsStore, JobsContext } from './store'

const JobsViewDefaultRoute: React.FC<RouteComponentProps> = ({ navigate }) => {
  // TODO: from settings/ last state
  const defaultUrl = routes.jobs.children.list.basepath
  if (navigate) {
    console.warn(`JobsView: Default route, redirecting to /${defaultUrl}`)
    navigate(defaultUrl, { replace: true })
  }

  return null
}

export interface JobsViewProps extends RouteComponentProps {}

export const JobsView: React.FC<JobsViewProps> = () => {
  return (
    <StoreProvider createStore={createJobsStore} context={JobsContext}>
      <JobsBar />
      <Router basepath={routes.jobs.basepath} primary={false}>
        <JobsList path={routes.jobs.children.list.basepath}>
          <JobSurface path={routes.jobs.children.list.children.surface.basepath} />
        </JobsList>
        <JobsViewDefaultRoute default={true} />
      </Router>
    </StoreProvider>
  )
}
