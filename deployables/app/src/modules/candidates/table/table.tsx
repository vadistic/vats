import { RouteComponentProps } from '@reach/router'
import { toJS } from 'mobx'
import { useObserver } from 'mobx-react-lite'
import { DetailsList, DetailsListLayoutMode, IColumn } from 'office-ui-fabric-react'
import React, { useContext } from 'react'
import { SingleCandidateValue } from '../../candidate/store'
import { CandidatesContext } from '../store'

export interface TableProps extends RouteComponentProps {}

export const CandidatesTable: React.FC<TableProps> = ({ children, navigate }) => {
  const store = useContext(CandidatesContext)

  const handleInvoke = (item: SingleCandidateValue) => {
    if (navigate) {
      navigate(item.id)
    }
  }

  const columns: IColumn[] = [
    {
      name: 'Fist Name',
      fieldName: 'firstName',
    },
    {
      name: 'Last Name',
      fieldName: 'lastName',
    },
    {
      name: 'Company',
      fieldName: 'company',
    },
  ].map(col => ({ ...col, key: col.fieldName, isResizable: true, minWidth: 100 }))

  return useObserver(
    () => (
      <div>
        {children}
        <DetailsList
          items={toJS(store.data.candidates)}
          onItemInvoked={handleInvoke}
          compact={true}
          columns={columns}
          setKey="id"
          layoutMode={DetailsListLayoutMode.justified}
          isHeaderVisible={true}
          enterModalSelectionOnTouch={true}
        />
      </div>
    ),
    'CandidatesTable',
  )
}
