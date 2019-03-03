import { RouteComponentProps } from '@reach/router'
import React, { Suspense } from 'react'
import { HostQuery } from '../host'
import { LoadingSpinner } from '../loading'
import { JobContext, JobHostProvider } from './host'

export interface JobViewProps extends RouteComponentProps {
  id?: string
}

export const JobViewFallback = LoadingSpinner

export const JobView: React.FC<JobViewProps> = ({ id }) => {
  if (!id) {
    console.error(`CandidateView: No id provided`)
    return null
  }
  return (
    <Suspense fallback={JobViewFallback}>
      <JobHostProvider initArg={{ id }}>
        <HostQuery context={JobContext}>
          <p>Single job view</p>
        </HostQuery>
      </JobHostProvider>
    </Suspense>
  )
}
