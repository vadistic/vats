import React from 'react'
import { Table } from '..'
import { anyTypename } from '../../../utils'
import response from './response.json'

export const TableBasicFixture: React.FC = () => (
  <Table items={anyTypename(response.data.candidates)} />
)

export default <TableBasicFixture />
