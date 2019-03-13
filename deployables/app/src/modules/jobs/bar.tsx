import { useTranslation } from '@vats/i18n'
import { SortDirection } from '@vats/utils'
import { observer } from 'mobx-react-lite'
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react'
import React, { useContext } from 'react'
import { JobsSortBy } from './sort'
import { JobsContext } from './store'

export interface JobsBarProps {}

const JobsBarBase: React.FC<JobsBarProps> = () => {
  const store = useContext(JobsContext)
  const { tp } = useTranslation()

  const getSortSubmenuItem = (sortBy: JobsSortBy) => ({
    text: tp.job[sortBy](),
    key: 'sort-by-' + sortBy,
    onClick: () => {
      store.state.sortBy = sortBy
    },
  })

  const items: ICommandBarItemProps[] = [
    {
      text: `Sort: ${tp.job[store.state.sortBy]().toLocaleLowerCase()}`,
      key: 'sort',
      split: true,
      iconProps: {
        iconName: store.state.sortDirection === SortDirection.ASCENDING ? 'SortUp' : 'SortDown',
      },
      onClick: () => {
        store.state.sortDirection = store.state.sortDirection * -1
      },
      subMenuProps: {
        items: Object.values(JobsSortBy).map(enumValue => getSortSubmenuItem(enumValue)),
      },
    },
  ]

  return (
    <>
      <CommandBar
        items={items}
        ariaLabel="Use left and right arrow keys to navigate between commands"
      />
    </>
  )
}

export const JobsBar = observer(JobsBarBase)
