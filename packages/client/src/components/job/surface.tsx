import { RouteComponentProps } from '@reach/router'
import React from 'react'
import { Surface } from '../surface'

export interface IJobSurfaceProps extends RouteComponentProps {}

export const JobSurface: React.FC<IJobSurfaceProps> = ({ children, navigate }) => {
  const handleDismiss = () => {
    if (navigate) {
      navigate('..')
    }
  }

  return (
    <Surface onDismiss={handleDismiss}>
      <p>JobSurface content</p>
      {children}
    </Surface>
  )
}
