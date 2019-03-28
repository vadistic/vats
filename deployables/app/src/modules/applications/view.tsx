import { RouteComponentProps } from '@reach/router'
import { useStore } from '@vats/store'
import { useObserver } from 'mobx-react-lite'
import React from 'react'
import { DefaultRoute, Router } from '../../components'
import { CandidateSurface } from '../candidate'
import { ApplicationsBar } from './bar'
import { ApplicationsBoard } from './board'
import { ApplicationsContext, createAplicationsStore } from './store'

export interface ApplicationsViewProps extends RouteComponentProps {}

export const ApplicationsView: React.FC<ApplicationsViewProps> = () => {
  const store = useStore(createAplicationsStore, {})

  const defaultUrl = 'board'

  return useObserver(
    () => (
      <ApplicationsContext.Provider value={store}>
        <ApplicationsBar />
        <Router basepath={`/applications`} primary={false}>
          <DefaultRoute default={true} to={defaultUrl} />
          <ApplicationsBoard path={`board`}>
            <CandidateSurface path={`candidate/:id`} />
          </ApplicationsBoard>
        </Router>
      </ApplicationsContext.Provider>
    ),
    'ApplicationsView',
  )
}

export default ApplicationsView
