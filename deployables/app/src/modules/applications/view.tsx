import { RouteComponentProps } from '@reach/router'
import { useStore } from '@vats/store'
import React from 'react'
import { Router } from '../../components'
import { CandidateSurface } from '../candidate'
import { ApplicationsBar } from './bar'
import { ApplicationsBoard } from './board'
import { ApplicationsContext, createAplicationsStore } from './store'

export interface ApplicationsViewProps extends RouteComponentProps {}

export const ApplicationsView: React.FC<ApplicationsViewProps> = () => {
  const store = useStore(createAplicationsStore, {})

  return (
    <ApplicationsContext.Provider value={store}>
      <ApplicationsBar />
      <Router basepath={`/applications`} primary={false}>
        <ApplicationsBoard path={`board`}>
          <CandidateSurface path={`candidate/:id`} />
        </ApplicationsBoard>
      </Router>
    </ApplicationsContext.Provider>
  )
}
