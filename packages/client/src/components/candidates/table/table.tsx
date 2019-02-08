import { css } from '@emotion/core'
import { DetailsList, DetailsListLayoutMode, IColumn } from 'office-ui-fabric-react'
import React, { useContext } from 'react'
import { Candidate } from '../../../generated/queries'
import { CandidatesContext } from '../context'
import { getColumns } from './columns'

export type TableItem = Candidate

export interface ITableProps {}

const tableStyles = css``

export const Table: React.FC<ITableProps> = () => {
  const { candidates } = useContext(CandidatesContext)

  const columns: IColumn[] = getColumns(candidates[0])
  return (
    <div css={tableStyles}>
      <DetailsList
        items={candidates}
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
