import { RouteComponentProps } from '@reach/router'
import { useStoreAction } from '@vats/store'
import { ElementType } from '@vats/utils'
import { set } from 'mobx'
import { useObserver } from 'mobx-react-lite'
import { DetailsList, DetailsListLayoutMode, IColumnDragDropDetails } from 'office-ui-fabric-react'
import React, { useContext } from 'react'
import { CandidatesContext, CandidatesValue } from '../store'
import { useCandidatesTableColumns } from './columns'

export interface TableProps extends RouteComponentProps {}

export const CandidatesTable: React.FC<TableProps> = ({ children, navigate }) => {
  const store = useContext(CandidatesContext)

  const handleInvoke = (item: ElementType<CandidatesValue>) => {
    if (navigate) {
      navigate(item.id)
    }
  }

  const columns = useCandidatesTableColumns()

  const columnReorderAction = useStoreAction(store, 'column reorder')(
    (dragDropDetails: IColumnDragDropDetails) => {
      if (!store.state.table.columns) {
        return
      }

      // remove
      const [col] = store.state.table.columns.splice(dragDropDetails.draggedIndex, 1)
      // insert at target
      store.state.table.columns.splice(dragDropDetails.targetIndex, 0, col)

      // trigger render
      set(columns, columns)
    },
  )

  return useObserver(
    () => (
      <div>
        {children}
        <DetailsList
          items={store.data.candidates.slice()}
          onItemInvoked={handleInvoke}
          compact={true}
          columns={columns.get()}
          setKey="id"
          layoutMode={DetailsListLayoutMode.fixedColumns}
          isHeaderVisible={true}
          columnReorderOptions={{ onColumnDrop: columnReorderAction }}
          enterModalSelectionOnTouch={true}
        />
      </div>
    ),
    'CandidatesTable',
  )
}
