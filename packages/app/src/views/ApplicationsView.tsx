import { RouteComponentProps, Router } from '@reach/router'
import { DefaultButton } from 'office-ui-fabric-react/lib/Button'
import * as React from 'react'
import { Applications } from '../components/Applications'

interface IApplicationsViewProps extends RouteComponentProps {}

export const ApplicationsView: React.SFC<IApplicationsViewProps> = () => (
  <>
    <Router basepath="/applications">
      <Applications.List path="list" />
    </Router>
  </>
)
