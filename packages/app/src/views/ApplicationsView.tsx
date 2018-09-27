import { RouteComponentProps, Router } from '@reach/router'
import * as React from 'react'

import { ApplicationsBoard, ApplicationsList, ApplicationsTable, LinkButton } from '../components'
import { qStringify } from '../utils'

const TEMP_APPLICATIONS_LIST_QUERY_VARIABLES = {
  jobIds: ['cjmbn87un12ot0843kr233jv9', 'cjmbn88ri12qz0843qv1xmjl1'],
  stageIds: ['cjmbn87uq12oy0843bi0w6zjx', 'cjmbn87ur12p0084332ls7zhd'],
}

interface IApplicationsViewProps extends RouteComponentProps {}

export const ApplicationsView: React.SFC<IApplicationsViewProps> = () => (
  <>
    <h3>Applications View</h3>
    <ul>
      <li>
        <LinkButton to="list" state={TEMP_APPLICATIONS_LIST_QUERY_VARIABLES}>
          Applications List
        </LinkButton>
      </li>
      <li>
        <LinkButton to="table">Applications Table</LinkButton>
      </li>
      <li>
        <LinkButton to="board" state={TEMP_APPLICATIONS_LIST_QUERY_VARIABLES}>
          Applications Board
        </LinkButton>
      </li>
    </ul>
    <Router basepath="/applications">
      <ApplicationsTable path="table" />
      <ApplicationsList path="list" />
      <ApplicationsBoard path="board" />
    </Router>
  </>
)
