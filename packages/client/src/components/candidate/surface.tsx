import { RouteComponentProps } from '@reach/router'
import React from 'react'
import { routes } from '../../routes'
import { Surface } from '../surface'
import { CandidateHost } from './host'
import { CandidateProfile } from './profile'

export interface ICandidateSurfaceProps extends RouteComponentProps {
  // injected by router
  id?: string
}

export const CandidateSurface: React.FC<ICandidateSurfaceProps> = ({ navigate, id }) => {
  const handleDismiss = () => {
    if (navigate) {
      navigate('..')
    }
  }

  const handleExpand = () => {
    if (navigate) {
      navigate('/' + routes.candidate.basepath + '/' + id)
    }
  }

  if (!id) {
    console.error('CandidateSurface: No id provided')
    return null
  }

  return (
    <Surface onDismiss={handleDismiss} onExpand={handleExpand}>
      <CandidateHost initArg={{ id }}>
        <CandidateProfile />
      </CandidateHost>
    </Surface>
  )
}
