import { StringIndex } from '@vats/utils'
import { IColumn } from 'office-ui-fabric-react'
import { TableItem } from './table'

// TODO: Just declare it in object literal. Autogen only for custom fields

interface ColumnMap {
  [name: string]: string
}

const columnMap: ColumnMap = {
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
  const _item = item as StringIndex<TableItem>

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
      return createStringColumn(key, _item[key] as any)
    } else {
      return createTestColumn(key, _item[key])
    }
  })

  return columns
}
