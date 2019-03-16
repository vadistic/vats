import { Translation, TranslationProxy, useTranslation } from '@vats/i18n'
import { useStoreAction } from '@vats/store'
import { ElementTypeOr, pathProxy, SortDirection } from '@vats/utils'
import { observer } from 'mobx-react-lite'
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react'
import React, { useContext, useMemo } from 'react'
import { JobsContext, JobsValue } from './store'

export interface JobsBarProps {}

const p = pathProxy<ElementTypeOr<JobsValue>>()

export const jobsSortByLabels = (tp: TranslationProxy<Translation>) => ({
  [p.name.PATH]: tp.job.name(),
  [p.createdAt.PATH]: tp.job.createdAt(),
  [p.applications.PATH]: tp.job.applications({ count: 10 }),
  [p.type.PATH]: tp.job.type(),
  [p.department.PATH]: tp.job.department(),
})

const JobsBarBase: React.FC<JobsBarProps> = () => {
  const store = useContext(JobsContext)
  const { tp } = useTranslation()

  const sortByMap = useMemo(() => jobsSortByLabels(tp), [])

  const sortByAction = useStoreAction(store, `sortBy dispatch`)((sortBy: string) => {
    store.state.sortBy = sortBy
  })

  const sortDirectionAction = useStoreAction(store, `sortDirection dispatch`)(
    (sortDirection?: SortDirection) => {
      store.state.sortDirection = sortDirection || store.state.sortDirection * -1
    },
  )

  const getSubmenuItem = (sortBy: string) => ({
    text: sortByMap[sortBy],
    key: 'sort-by-' + sortBy,
    onClick: () => {
      sortByAction(sortBy)
    },
  })

  const items: ICommandBarItemProps[] = [
    {
      text: store.state.sortBy ? `Sort: ${sortByMap[store.state.sortBy]}` : `No sorting`,
      key: 'sort',
      split: true,
      iconProps: {
        iconName: store.state.sortDirection === SortDirection.ASCENDING ? 'SortUp' : 'SortDown',
      },
      onClick: () => {
        sortDirectionAction()
      },
      subMenuProps: {
        items: Object.keys(sortByMap).map(key => getSubmenuItem(key)),
      },
    },
  ]

  return <CommandBar items={items} />
}

export const JobsBar = observer(JobsBarBase)
