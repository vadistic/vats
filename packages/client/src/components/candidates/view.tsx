import { RouteComponentProps } from '@reach/router'
import React from 'react'
import { CandidatesHost } from './host'
import { Table } from './table'

export interface ICandidatesViewProps extends RouteComponentProps {}

export const CandidatesView: React.FC<ICandidatesViewProps> = () => {
  return (
    <CandidatesHost>
      <Table />
    </CandidatesHost>
  )
}
