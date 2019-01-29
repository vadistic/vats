import React from 'react'
import { Table } from '..'
import { Candidate } from '../../../generated/queries'
import response from './response.json'

export const TableBasicFixture: React.FC = () => (
  <Table items={response.data.candidates as Candidate[]} />
)

export default <TableBasicFixture />
