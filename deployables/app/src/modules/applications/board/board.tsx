import { RouteComponentProps } from '@reach/router'
import { StoreStatus, useComputed, useReaction } from '@vats/store'
import { useObserver } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Board, BoardProps, boardUpdateAction } from '../../../components'
import { getGrouped, PartialGroup } from '../../../utils'
import { ApplicationsContext, ApplicationsElement } from '../store'
import { ApplicationCard } from '../widgets'

export interface ApplicationsBoardProps extends RouteComponentProps {}

export const ApplicationsBoardBase: React.FC<ApplicationsBoardProps> = ({ children }) => {
  const store = useContext(ApplicationsContext)

  const grouped = useComputed('grouped', () =>
    getGrouped(template, store.data.applications, application => application.stage.id),
  )

  useReaction(
    'selection items',
    () => store.data.applications.length,
    () => {
      store.state.selection.instance.setItems(grouped.get().items as any, true)
    },
    [],
  )

  const template = store.data.applications.reduce(
    (acc, app) => {
      if (acc.findIndex(val => val.key === app.stage.id) === -1) {
        acc.push({ key: app.stage.id })
      }

      return acc
    },
    [] as PartialGroup[],
  )

  const renderHeader: BoardProps['onRenderHeader'] = (group, items) => (
    <>
      <h3>STAGE: {group.key}</h3>
      <span>{items.length}</span>
    </>
  )

  const renderItem = (application: ApplicationsElement) => (
    <ApplicationCard application={application} />
  )

  const handleDrop = store.action(
    'handle drop',
    boardUpdateAction({
      selection: store.state.selection.instance,
      grouped: grouped.get(),
      items: store.data.applications,
      update: selectedItems => {
        console.log(selectedItems)
        /* noop */
      },
    }),
  )

  return useObserver(
    () => (
      <div>
        <Board
          onRenderItem={renderItem}
          onRenderHeader={renderHeader}
          onDrop={handleDrop}
          groups={grouped.get().groups}
          items={grouped.get().items}
          selection={store.state.selection.instance}
        />
        {children}
      </div>
    ),
    'ApplicationsBoardBase',
  )
}

export const ApplicationsBoard: React.FC<ApplicationsBoardProps> = () => {
  const store = useContext(ApplicationsContext)

  return useObserver(() => {
    if (!store.variables.where || !store.variables.where.job) {
      return <p>Needs jobs selector</p>
    }

    if (store.meta.status !== StoreStatus.ready) {
      return <p>Loading...</p>
    }

    return <ApplicationsBoardBase />
  }, 'ApplicationsBoard')
}
