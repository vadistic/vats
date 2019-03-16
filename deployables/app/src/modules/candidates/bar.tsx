import { Translation, TranslationProxy, useTranslation } from '@vats/i18n'
import { useStoreAction } from '@vats/store'
import { SortDirection, stringIndex } from '@vats/utils'
import { observer } from 'mobx-react-lite'
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react'
import React, { useContext, useMemo } from 'react'
import { CandidatesContext } from './store'

export interface CandidatesBarProps {}

export const candidatesSortByLabels = (tp: TranslationProxy<Translation>) => ({
  firstName: tp.candidate.firstName(),
  lastName: tp.candidate.lastName(),
  createdAt: tp.job.createdAt(),
  applications: tp.job.applications({ count: 10 }),
  comments: tp.candidate.comment({ count: 10 }),
})
export type CandidatesBarSortKey = keyof ReturnType<typeof candidatesSortByLabels>

const CandidatesBarBase: React.FC<CandidatesBarProps> = () => {
  const store = useContext(CandidatesContext)
  const { tp } = useTranslation()

  const sortByMap = useMemo(() => candidatesSortByLabels(tp), [])

  const sortByAction = useStoreAction(store, `sortBy dispatch`)((sortBy: CandidatesBarSortKey) => {
    store.state.sortBy = sortBy
  })

  const sortDirectionAction = useStoreAction(store, `sortDirection dispatch`)(
    (sortDirection?: SortDirection) => {
      store.state.sortDirection = sortDirection || store.state.sortDirection * -1
    },
  )

  const getSubmenuItem = (sortBy: CandidatesBarSortKey) => ({
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
        : 'No storing',
      key: 'sort',
      split: true,
      iconProps: {
        iconName: store.state.sortDirection === SortDirection.ASCENDING ? 'SortUp' : 'SortDown',
      },
      onClick: () => {
        sortDirectionAction()
      },
      subMenuProps: {
        items: Object.keys(sortByMap).map(key => getSubmenuItem(key as CandidatesBarSortKey)),
      },
    },
  ]

  return <CommandBar items={items} />
}

export const CandidatesBar = observer(CandidatesBarBase)
