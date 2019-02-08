import { RouteComponentProps } from '@reach/router'
import { IButtonProps, IconButton } from 'office-ui-fabric-react'
import React from 'react'
import { routes } from '../../routes'
import { Surface } from '../surface'
import { JobHost } from './host'
import { JobProfile } from './profile'

const ExpandButton: React.FC<IButtonProps> = props => (
  <IconButton iconProps={{ iconName: 'FullScreen' }} {...props} />
)

export interface IJobSurfaceProps extends RouteComponentProps {
  // injected by router
  id?: string
}

export const JobSurface: React.FC<IJobSurfaceProps> = ({ navigate, id }) => {
  const handleDismiss = () => {
    if (navigate) {
      navigate('..')
    }
  }

  const handleExpand = () => {
    if (navigate) {
      navigate('/' + routes.job.basepath + '/' + id)
    }
  }

  if (!id) {
    console.error('JobSurface/JobHost: tried to initialize without id')
    return null
  }

  return (
    <Surface onDismiss={handleDismiss} onExpand={handleExpand}>
      <JobHost initOptions={{ id }}>
        <JobProfile />
      </JobHost>
    </Surface>
  )
}
