import { RouteComponentProps } from '@reach/router'
import React from 'react'
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

  if (!id) {
    console.error('CandidateSurface: No id provided')
    return null
  }

  return (
    <Surface onDismiss={handleDismiss}>
      <CandidateHost initOptions={{ id }}>
        <CandidateProfile />
      </CandidateHost>
    </Surface>
  )
}
