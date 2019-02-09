import { RouteComponentProps } from '@reach/router'
import React, { Suspense } from 'react'
import { Loading } from '../loading'
import { CandidateHost } from './host'

export interface ICandidateViewProps extends RouteComponentProps {
  id?: string
}

const CandidateViewFallback = <Loading label="Fetching candidate view" />

export const CandidateView: React.FC<ICandidateViewProps> = ({ id }) => {
  if (!id) {
    console.error(`CandidateView: no id parameter provided`)
    return null
  }

  return (
    <Suspense fallback={CandidateViewFallback}>
      <CandidateHost initArg={{ id }}>
        <h1>Candidate View</h1>
      </CandidateHost>
    </Suspense>
  )
}
