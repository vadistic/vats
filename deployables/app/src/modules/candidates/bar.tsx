import { NavigateFn } from '@reach/router'
import { Translation, TranslationProxy, useTranslation } from '@vats/i18n'
import { useStoreAction } from '@vats/store'
import { ElementTypeOr, pathProxy, SortDirection } from '@vats/utils'
import { observer } from 'mobx-react-lite'
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react'
import React, { useContext, useMemo } from 'react'
import { CandidatesContext, CandidatesValue } from './store'

export interface CandidatesBarProps {
  navigate?: NavigateFn
}

const p = pathProxy<ElementTypeOr<CandidatesValue>>()

export const candidatesSortByMap = (tp: TranslationProxy<Translation>) => ({
  [p.createdAt.PATH]: tp.candidate.createdAt(),
  [p.updatedAt.PATH]: tp.candidate.updatedAt(),
  [p.firstName.PATH]: tp.candidate.firstName(),
  [p.lastName.PATH]: tp.candidate.lastName(),
  [p.company.PATH]: tp.candidate.company(),
  [p.position.PATH]: tp.candidate.position(),
  [p.applications.PATH]: tp.candidate.applications({ count: 10 }),
  [p.comments.PATH]: tp.candidate.comment({ count: 10 }),
})

const CandidatesBarBase: React.FC<CandidatesBarProps> = ({ navigate }) => {
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

  const createAction = useStoreAction(store, 'create candidate')(async () => {
    const res: any = await store.create({ firstName: 'New', lastName: 'New' })
    if (res.data && navigate) {
      navigate('candidate/' + res.data.createCandidate.id)
    }
  })

  const deleteAction = useStoreAction(store, 'delete candidate')(async () => {
    const indicies = store.state.selection.indicies

    store.state.selection.instance.setAllSelected(false)

    store.deleteMany({ indicies })
  })

  const getSubmenuItem = (sortBy: string) => ({
    text: sortByMap[sortBy],
    key: 'sort-by-' + sortBy,
    onClick: () => {
      sortByAction(sortBy)
    },
  })

  const items: ICommandBarItemProps[] = [
    {
      text: tp.action.create(),
      key: 'create',
      iconProps: {
        iconName: 'circleaddition',
      },
      onClick: () => {
        createAction()
      },
    },
    {
      text: tp.action.remove(),
      key: 'delete',
      iconProps: {
        iconName: 'delete',
      },
      disabled: store.state.selection.indicies.length < 1,
      onClick: () => {
        deleteAction()
      },
    },
    {
      text: !!store.state.sortBy
        ? `${tp.action.sort()}: ${sortByMap[store.state.sortBy]}`
        : tp.common.unsorted(),
      key: 'sort',
      split: true,
      iconProps: {
        iconName: store.state.sortDirection === SortDirection.ASCENDING ? 'sortup' : 'sortdown',
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
