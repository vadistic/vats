import { Translation, TranslationProxy, useTranslation } from '@vats/i18n'
import { useStoreAction } from '@vats/store'
import { ElementTypeOr, pathProxy, SortDirection } from '@vats/utils'
import { observer } from 'mobx-react-lite'
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react'
import React, { useContext, useMemo } from 'react'
import { CandidatesContext, CandidatesValue } from './store'

export interface CandidatesBarProps {}

const p = pathProxy<ElementTypeOr<CandidatesValue>>()

export const candidatesSortByMap = (tp: TranslationProxy<Translation>) => ({
  [p.firstName.PATH]: tp.candidate.firstName(),
  [p.lastName.PATH]: tp.candidate.lastName(),
  [p.createdAt.PATH]: tp.job.createdAt(),
  [p.applications.PATH]: tp.job.applications({ count: 10 }),
  [p.comments.PATH]: tp.candidate.comment({ count: 10 }),
})

const CandidatesBarBase: React.FC<CandidatesBarProps> = () => {
  const store = useContext(CandidatesContext)
  const { tp } = useTranslation()

  const sortByMap = useMemo(() => candidatesSortByMap(tp), [])

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
      text: store.state.sortBy ? `Sort: ${sortByMap[store.state.sortBy]}` : 'No storing',
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

export const CandidatesBar = observer(CandidatesBarBase)
