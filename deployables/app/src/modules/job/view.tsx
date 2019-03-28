import { RouteComponentProps } from '@reach/router'
import { useObserver } from 'mobx-react-lite'
import React from 'react'
import { LoadingSpinner } from '../../components'

export interface JobViewProps extends RouteComponentProps {
  id?: string
}

export const JobViewFallback = LoadingSpinner

export const JobView: React.FC<JobViewProps> = ({ id }) => {
  if (!id) {
    console.error(`JobView: No id provided`)
    return null
  }
  const fallback = <LoadingSpinner label="Fetching job view" />

  return useObserver(() => <div>{fallback}</div>, 'JobView')
}

export default JobView
