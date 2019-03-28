import { RouteComponentProps } from '@reach/router'
import { useObserver } from 'mobx-react-lite'
import React from 'react'
import { LoadingSpinner } from '../../components'

export interface CandidateViewProps extends RouteComponentProps {
  id?: string
}

export const CandidateView: React.FC<CandidateViewProps> = ({ id }) => {
  if (!id) {
    console.error(`CandidateView: no id parameter provided`)
    return null
  }

  const fallback = <LoadingSpinner label="Fetching candidate view" />

  return useObserver(() => <div>{fallback}</div>, 'CandidateView')
}

export default CandidateView
