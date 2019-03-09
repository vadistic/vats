import { RouteComponentProps } from '@reach/router'
import React from 'react'
import { LoadingSpinner } from '../../components'

export interface CandidateViewProps extends RouteComponentProps {
  id?: string
}

const CandidateViewFallback = <LoadingSpinner label="Fetching candidate view" />

export const CandidateView: React.FC<CandidateViewProps> = ({ id }) => {
  if (!id) {
    console.error(`CandidateView: no id parameter provided`)
    return null
  }

  return CandidateViewFallback
}
