import { RouteComponentProps } from '@reach/router'
import React from 'react'
import { Surface } from '../surface'
import { JobHost } from './host'
import { JobProfile } from './profile'

export interface IJobSurfaceProps extends RouteComponentProps {
  // injected by router
  id?: string
}

export const JobSurface: React.FC<IJobSurfaceProps> = ({ children, navigate, id }) => {
  const handleDismiss = () => {
    if (navigate) {
      navigate('..')
    }
  }

  if (!id) {
    console.error('JobSurface/JobHost: tried to initialize without id')
    return null
  }

  return (
    <Surface onDismiss={handleDismiss}>
      <JobHost initOptions={{ id }}>
        <JobProfile />
      </JobHost>
    </Surface>
  )
}
