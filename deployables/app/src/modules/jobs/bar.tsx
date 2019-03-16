import { Translation, TranslationProxy, useTranslation } from '@vats/i18n'
import { useStoreAction } from '@vats/store'
import { SortDirection, stringIndex } from '@vats/utils'
import { observer } from 'mobx-react-lite'
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react'
import React, { useContext, useMemo } from 'react'
import { JobsContext } from './store'

export interface JobsBarProps {}

export const jobsSortByLabels = (tp: TranslationProxy<Translation>) => ({
  name: tp.job.name(),
  createdAt: tp.job.createdAt(),
  applications: tp.job.applications({ count: 10 }),
  type: tp.job.type(),
  department: tp.job.department(),
})

export type JobsBarSortKey = keyof ReturnType<typeof jobsSortByLabels>

const JobsBarBase: React.FC<JobsBarProps> = () => {
  const store = useContext(JobsContext)
  const { tp } = useTranslation()

  const sortByMap = useMemo(() => jobsSortByLabels(tp), [])

  const sortByAction = useStoreAction(store, `sortBy dispatch`)((sortBy: JobsBarSortKey) => {
    store.state.sortBy = sortBy
  })

  const sortDirectionAction = useStoreAction(store, `sortDirection dispatch`)(
    (sortDirection?: SortDirection) => {
      store.state.sortDirection = sortDirection || store.state.sortDirection * -1
    },
  )

  const getSubmenuItem = (sortBy: JobsBarSortKey) => ({
    text: sortByMap[sortBy],
    key: 'sort-by-' + sortBy,
    onClick: () => {
      sortByAction(sortBy)
    },
  })

  const items: ICommandBarItemProps[] = [
    {
      text: store.state.sortBy
        ? `Sort: ${stringIndex(sortByMap)[store.state.sortBy]}`
        : `No sorting`,
      key: 'sort',
      split: true,
      iconProps: {
        iconName: store.state.sortDirection === SortDirection.ASCENDING ? 'SortUp' : 'SortDown',
      },
      onClick: () => {
        sortDirectionAction()
      },
      subMenuProps: {
        items: Object.keys(sortByMap).map(key => getSubmenuItem(key as JobsBarSortKey)),
      },
    },
  ]

  return <CommandBar items={items} />
}

export const JobsBar = observer(JobsBarBase)
