import { DetailsList, DetailsListLayoutMode, IColumn } from 'office-ui-fabric-react'
import React from 'react'
import { Candidate } from '../../generated/queries'
import { getColumns } from './columns'

export type TableItem = Candidate

export interface ITableProps {
  items: TableItem[]
}

export const Table: React.FC<ITableProps> = ({ items }) => {
  const columns: IColumn[] = getColumns(items[0])
  return (
    <DetailsList
      items={items}
      compact={true}
      columns={columns}
      setKey="id"
      layoutMode={DetailsListLayoutMode.justified}
      isHeaderVisible={true}
      enterModalSelectionOnTouch={true}
    />
  )
}
