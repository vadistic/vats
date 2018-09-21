import { RouteComponentProps, Router } from '@reach/router'
import * as React from 'react'

import { ApplicationsBoard, ApplicationsList, ApplicationsTable } from '../components/Applications'

interface IApplicationsViewProps extends RouteComponentProps {}

export const ApplicationsView: React.SFC<IApplicationsViewProps> = () => (
  <>
    <Router basepath="/applications">
      <ApplicationsTable path="table" />
      <ApplicationsList path="list" />
      <ApplicationsBoard path="board" />
    </Router>
  </>
)
