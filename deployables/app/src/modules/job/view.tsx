import { RouteComponentProps } from '@reach/router'
import React from 'react'
import { LoadingSpinner } from '../../components'

export interface JobViewProps extends RouteComponentProps {
  id?: string
}

export const JobViewFallback = LoadingSpinner

export const JobView: React.FC<JobViewProps> = ({ id }) => {
  if (!id) {
    console.error(`CandidateView: No id provided`)
    return null
  }
  return <p>Single job view</p>
}
