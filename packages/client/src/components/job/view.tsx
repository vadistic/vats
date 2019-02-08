import { RouteComponentProps } from '@reach/router'
import React, { Suspense } from 'react'
import { Loading } from '../loading'
import { JobHost } from './host'

export interface IJobViewProps extends RouteComponentProps {
  id?: string
}

export const JobViewFallback = Loading

export const JobView: React.FC<IJobViewProps> = ({ id }) => {
  if (!id) {
    console.error(`CandidateView: No id provided`)
    return null
  }
  return (
    <Suspense fallback={JobViewFallback}>
      <JobHost initOptions={{ id }}>
        <p>Single job view</p>
      </JobHost>
    </Suspense>
  )
}
