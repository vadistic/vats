import { RouteComponentProps } from '@reach/router'
import { StoreProvider } from '@vats/store'
import React from 'react'
import { Router } from '../../components'
import { routes } from '../../routes'
import { CandidateSurface } from '../candidate/surface'
import { CandidatesList } from './list'
import { CandidatesContext, createCandidatesStore } from './store'
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

export interface CandidatesViewProps extends RouteComponentProps {}

export const CandidatesView: React.FC<CandidatesViewProps> = () => {
  return (
    <StoreProvider createStore={createCandidatesStore} context={CandidatesContext}>
      <Router basepath={routes.candidates.basepath} primary={false}>
        <CandidatesViewDefaultRoute default={true} />
        <CandidatesTable path={routes.candidates.children.table.basepath}>
          <CandidateSurface path={routes.candidates.children.table.children.surface.basepath} />
        </CandidatesTable>
        <CandidatesList path={routes.candidates.children.list.basepath}>
          <CandidateSurface path={routes.candidates.children.list.children.surface.basepath} />
        </CandidatesList>
      </Router>
    </StoreProvider>
  )
}
