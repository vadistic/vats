import { IColumn } from 'office-ui-fabric-react'
import { StrictlyIndexed } from '../../../utils'
import { TableItem } from './table'

// TODO: Just declare it in object literal. Autogen only for custom fields

interface IColumnMap {
  [name: string]: string
}

const columnMap: IColumnMap = {
  avatar: 'Photo',
  firstName: 'First name',
  lastName: 'Last name',
  createdAt: 'Created',
  updatedAt: 'Updated',
  metaCompany: 'Company',
  metaHeadline: 'Headline',
  metaPosition: 'Position',
  applications: 'Applications',
}

export const getColumns = (item: TableItem): IColumn[] => {
  const _item = item as StrictlyIndexed<TableItem>

  const createStringColumn = (key: string, val: string): IColumn => ({
    name: columnMap[key] || key,
    fieldName: key,
    isResizable: true,

    key,
    minWidth: 100,
  })

  const createTestColumn = (key: string, val: any): IColumn => ({
    onRender: () => `Missing onRender: ${key}`,
    name: columnMap[key] || key,
    isResizable: true,
    key,
    minWidth: 100,
  })

  const columns: IColumn[] = Object.keys(columnMap).map(key => {
    // create simple string columns for items object keys
    if (typeof _item[key] === 'string') {
      return createStringColumn(key, _item[key])
    } else {
      return createTestColumn(key, _item[key])
    }
  })

  return columns
}
