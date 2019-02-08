import { RouteComponentProps, Router } from '@reach/router'
import React from 'react'
import { routes } from '../../routes'
import { JobSurface } from '../job'
import { JobsBar } from './bar'
import { JobsHost } from './host'
import { JobsList } from './list'

export interface IJobsViewProps extends RouteComponentProps {}

export const JobsView: React.FC<IJobsViewProps> = () => {
  return (
    <JobsHost>
      <Router basepath={routes.jobs.basepath} primary={false}>
        <JobSurface path={routes.jobs.children.jobSurface.path} />
      </Router>
      <JobsBar />
      <JobsList />
    </JobsHost>
  )
}
