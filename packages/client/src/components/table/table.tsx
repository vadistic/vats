import {
  DetailsList,
  DetailsListLayoutMode,
  IColumn
} from 'office-ui-fabric-react'
import React from 'react'
import { Candidate, User } from '../../generated/queries'

export interface ITableProps {
  items: Candidate[]
}

export const Table: React.FC<ITableProps> = ({ items }) => {
  const columns: IColumn[] = [
    {
      name: 'Name',
      key: 'name',
      minWidth: 100,
      onRender: (candidate: Candidate) =>
        candidate.firstName + ' ' + candidate.lastName
    },
    {
      name: 'Headline',
      key: 'metaHeadline',
      minWidth: 100,
      onRender: (candidate: Candidate) => candidate.metaHeadline
    },
    {
      name: 'Company',
      key: 'metaCompany',
      minWidth: 100,
      onRender: (candidate: Candidate) =>
        (candidate.metaPosition ? candidate.metaPosition + ' @ ' : '') +
        candidate.metaCompany
    },
    {
      name: 'Avatar',
      key: 'avatar',
      minWidth: 100,
      onRender: (candidate: Candidate) =>
        candidate.avatar ? <img src={candidate.avatar.url} /> : null
    }
  ]
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
