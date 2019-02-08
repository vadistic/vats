import React from 'react'
import { CandidatesTable } from '..'
import { CandidatesHost } from '../../host'

export const TableLiveFixture: React.FC = () => (
  <CandidatesHost>
    <CandidatesTable />
  </CandidatesHost>
)

export default <TableLiveFixture />
