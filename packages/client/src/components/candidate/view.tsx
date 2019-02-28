import { RouteComponentProps } from '@reach/router'
import React, { Suspense } from 'react'
import { HostQuery } from '../host'
import { LoadingSpinner } from '../loading'
import { CandidateContext, CandidateHostProvider } from './host'

export interface CandidateViewProps extends RouteComponentProps {
  id?: string
}

const CandidateViewFallback = <LoadingSpinner label="Fetching candidate view" />

export const CandidateView: React.FC<CandidateViewProps> = ({ id }) => {
  if (!id) {
    console.error(`CandidateView: no id parameter provided`)
    return null
  }

  return (
    <Suspense fallback={CandidateViewFallback}>
      <CandidateHostProvider initArg={{ id }}>
        <HostQuery context={CandidateContext}>
          <h1>Candidate View</h1>
        </HostQuery>
      </CandidateHostProvider>
    </Suspense>
  )
}
