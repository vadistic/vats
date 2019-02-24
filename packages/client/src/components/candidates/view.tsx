import { RouteComponentProps } from '@reach/router'
import React from 'react'
import { routes } from '../../routes'
import { CandidateSurface } from '../candidate/surface'
import { HostQuery } from '../host'
import { Router } from '../router'
import { CandidatesContext, CandidatesHostProvider } from './host'
import { CandidatesTable } from './table'

const CandidatesViewDefaultRoute: React.FC<RouteComponentProps> = ({ navigate }) => {
  // TODO: from settings/ last state
  const defaultUrl = routes.candidates.children.table.basepath

  if (navigate) {
    console.warn(`CandidatesViewDefaultRoute: redirecting to /${defaultUrl}`)
    navigate(defaultUrl, { replace: true })
  }

  return null
}

export interface ICandidatesViewProps extends RouteComponentProps {}

export const CandidatesView: React.FC<ICandidatesViewProps> = () => {
  return (
    <CandidatesHostProvider>
      <HostQuery context={CandidatesContext}>
        <Router basepath={routes.candidates.basepath} primary={false}>
          <CandidatesViewDefaultRoute default={true} />
          <CandidatesTable path={routes.candidates.children.table.basepath}>
            <CandidateSurface path={routes.candidates.children.table.children.surface.basepath} />
          </CandidatesTable>
        </Router>
      </HostQuery>
    </CandidatesHostProvider>
  )
}
