import { RouteComponentProps } from '@reach/router'
import { useStore } from '@vats/store'
import React from 'react'
import { Router } from '../../components'
import { CandidateSurface } from '../candidate/surface'
import { CandidatesList } from './list'
import { CandidatesContext, createCandidatesStore } from './store'
import { CandidatesTable } from './table'

const CandidatesViewDefaultRoute: React.FC<RouteComponentProps> = ({ navigate, location }) => {
  // TODO: from settings/ last state
  const defaultUrl = `table`

  if (navigate) {
    console.warn(`CandidatesViewDefaultRoute: redirecting to ${defaultUrl}`)
    navigate(defaultUrl, { replace: true })
  }

  return null
}

export interface CandidatesViewProps extends RouteComponentProps {}

export const CandidatesView: React.FC<CandidatesViewProps> = () => {
  const store = useStore(createCandidatesStore, {}, [])
  return (
    <CandidatesContext.Provider value={store}>
      <Router basepath={`/candidates`} primary={false}>
        <CandidatesViewDefaultRoute default={true} />
        <CandidatesTable path={`table`}>
          <CandidateSurface path={`candidate/:id`} />
        </CandidatesTable>
        <CandidatesList path={`list`}>
          <CandidateSurface path={`candidate/:id`} />
        </CandidatesList>
      </Router>
    </CandidatesContext.Provider>
  )
}
