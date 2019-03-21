import { RouteComponentProps } from '@reach/router'
import { ElementType } from '@vats/utils'
import { toJS } from 'mobx'
import { useObserver } from 'mobx-react-lite'
import { DetailsList, DetailsListLayoutMode, IColumnDragDropDetails } from 'office-ui-fabric-react'
import React, { useContext, useMemo } from 'react'
import { CandidatesBar } from '../bar'
import { CandidatesContext, CandidatesValue } from '../store'
import { useCandidatesTableColumns } from './columns'

export interface TableProps extends RouteComponentProps {}

export const CandidatesTable: React.FC<TableProps> = ({ children, navigate }) => {
  const store = useContext(CandidatesContext)

  const handleInvoke = (item: ElementType<CandidatesValue>) => {
    if (navigate) {
      navigate(`candidate/` + item.id)
    }
  }

  const columns = useCandidatesTableColumns()

  const columnReorderAction = store.action(
    'column reorder',
    (dragDropDetails: IColumnDragDropDetails) => {
      // remove
      const [col] = store.state.table.columns.splice(dragDropDetails.draggedIndex, 1)
      // insert at target
      store.state.table.columns.splice(dragDropDetails.targetIndex, 0, col)
    },
  )

  useMemo(
    () =>
      store.value.observe(change => {
        store.state.selection.instance.setItems(change.newValue as any[], true)
      }),
    [store],
  )

  return useObserver(
    () => (
      <div>
        <CandidatesBar navigate={navigate} />
        {children}
        <DetailsList
          selection={store.state.selection.instance}
          items={toJS(store.data.candidates)}
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
