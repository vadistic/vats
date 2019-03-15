import { useTranslation } from '@vats/i18n'
import { useStoreAction } from '@vats/store'
import { SortDirection } from '@vats/utils'
import { observer } from 'mobx-react-lite'
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react'
import React, { useContext, useMemo } from 'react'
import { JobsSortBy, jobsSortByLabels } from './reactions'
import { JobsContext } from './store'

export interface JobsBarProps {}

const JobsBarBase: React.FC<JobsBarProps> = () => {
  const store = useContext(JobsContext)
  const { tp } = useTranslation()

  const sortByLabelMap = useMemo(() => jobsSortByLabels(tp), [])

  const sortByAction = useStoreAction(store, `sortBy dispatch`)((sortBy: JobsSortBy) => {
    store.state.sortBy = sortBy
  })

  const sortDirectionAction = useStoreAction(store, `sortDirection dispatch`)(
    (sortDirection?: SortDirection) => {
      store.state.sortDirection = sortDirection || store.state.sortDirection * -1
    },
  )

  const getSubmenuItem = (sortBy: JobsSortBy) => ({
    text: sortByLabelMap[sortBy],
    key: 'sort-by-' + sortBy,
    onClick: () => {
      sortByAction(sortBy)
    },
  })

  const items: ICommandBarItemProps[] = [
    {
      text: `Sort: ${sortByLabelMap[store.state.sortBy]}`,
      key: 'sort',
      split: true,
      iconProps: {
        iconName: store.state.sortDirection === SortDirection.ASCENDING ? 'SortUp' : 'SortDown',
      },
      onClick: () => {
        sortDirectionAction()
      },
      subMenuProps: {
        items: Object.values(JobsSortBy).map(value => getSubmenuItem(value)),
      },
    },
  ]

  return <CommandBar items={items} />
}

export const JobsBar = observer(JobsBarBase)
