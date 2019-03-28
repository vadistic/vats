import { RouteComponentProps } from '@reach/router'
import { useStore } from '@vats/store'
import { useObserver } from 'mobx-react-lite'
import React, { lazy } from 'react'
import { DefaultRoute, Router } from '../../components'
import { CandidatesList } from './list'
import { CandidatesContext, createCandidatesStore } from './store'
import { CandidatesTable } from './table'

const LazyCandidateSurface = lazy(() =>
  import(/* webpackChunkName: "candidate-surface" */ '../candidate/surface'),
)

export interface CandidatesViewProps extends RouteComponentProps {}

export const CandidatesView: React.FC<CandidatesViewProps> = () => {
  const store = useStore(createCandidatesStore, {}, [])

  const defaultUrl = `table`

  return useObserver(
    () => (
      <CandidatesContext.Provider value={store}>
        <Router basepath={`/candidates`} primary={false}>
          <DefaultRoute default={true} to={defaultUrl} />
          <CandidatesTable path={`table`}>
            <LazyCandidateSurface path={`candidate/:id`} />
          </CandidatesTable>
          <CandidatesList path={`list`}>
            <LazyCandidateSurface path={`candidate/:id`} />
          </CandidatesList>
        </Router>
      </CandidatesContext.Provider>
    ),
    'CandidatesView',
  )
}

export default CandidatesView
