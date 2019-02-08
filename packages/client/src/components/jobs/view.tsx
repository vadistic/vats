import { RouteComponentProps } from '@reach/router'
import React from 'react'
import { routes } from '../../routes'
import { JobSurface } from '../job'
import { Router } from '../router'
import { JobsBar } from './bar'
import { JobsHost } from './host'
import { JobsList } from './list'

const JobsViewDefaultRoute: React.FC<RouteComponentProps> = ({ navigate }) => {
  // TODO: from settings/ last state
  const defaultUrl = routes.jobs.children.list.basepath
  if (navigate) {
    console.warn(`JobsView: Default route, redirecting to /${defaultUrl}`)
    navigate(defaultUrl, { replace: true })
  }

  return null
}

export interface IJobsViewProps extends RouteComponentProps {}

export const JobsView: React.FC<IJobsViewProps> = () => {
  return (
    <JobsHost>
      <JobsBar />
      <Router basepath={routes.jobs.basepath} primary={false}>
        <JobsList path={routes.jobs.children.list.basepath}>
          <JobSurface path={routes.jobs.children.list.children.surface.basepath} />
        </JobsList>
        <JobsViewDefaultRoute default={true} />
      </Router>
    </JobsHost>
  )
}
