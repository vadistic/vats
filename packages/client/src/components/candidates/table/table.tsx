import { css } from '@emotion/core'
import { RouteComponentProps } from '@reach/router'
import { DetailsList, DetailsListLayoutMode, IColumn } from 'office-ui-fabric-react'
import React from 'react'
import { Candidate } from '../../../generated/queries'
import { useCandidatesContext } from '../host'
import { getColumns } from './columns'

export type TableItem = Candidate

export interface ITableProps extends RouteComponentProps {}

const tableStyles = css``

export const CandidatesTable: React.FC<ITableProps> = ({ children, navigate }) => {
  const { value: candidates } = useCandidatesContext()

  const handleInvoke = (item: Candidate) => {
    if (navigate) {
      navigate(item.id)
    }
  }

  const columns: IColumn[] = getColumns(candidates[0])
  return (
    <div css={tableStyles}>
      {children}
      <DetailsList
        items={candidates}
        onItemInvoked={handleInvoke}
        compact={true}
        columns={columns}
        setKey="id"
        layoutMode={DetailsListLayoutMode.justified}
        isHeaderVisible={true}
        enterModalSelectionOnTouch={true}
      />
    </div>
  )
}
