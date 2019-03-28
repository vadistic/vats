import { RouteComponentProps } from '@reach/router'
import { StoreStatus, useComputed } from '@vats/store'
import { toJS } from 'mobx'
import { useObserver } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Board, BoardOnDropProps, BoardProps, boardUpdateAction } from '../../../components'
import { getGrouped, PartialGroup } from '../../../utils'
import { ApplicationsContext, ApplicationsElement } from '../store'
import { ApplicationCard } from '../widgets'

export interface ApplicationsBoardProps extends RouteComponentProps {}

export const ApplicationsBoardBase: React.FC<ApplicationsBoardProps> = ({ children }) => {
  const store = useContext(ApplicationsContext)

  const grouped = useComputed('grouped', () => {
    let template: PartialGroup[] = []
    // select first workflow if there's many for now
    if (store.data.workflows.length !== 0 && store.data.workflows[0].stages !== null) {
      template = store.data.workflows[0].stages.map(stage => ({ key: stage.id, name: stage.name }))
    }

    const res = getGrouped(template, store.data.applications, application => application.stage.id)

    store.state.selection.instance.setItems(res.items as any, true)

    return getGrouped(template, store.data.applications, application => application.stage.id)
  })

  const renderHeader: BoardProps['onRenderHeader'] = (group, items) => (
    <>
      <h3>
        STAGE: {group.name} ({items.length})
      </h3>
    </>
  )

  const renderItem = (application: ApplicationsElement) => (
    <ApplicationCard application={application} />
  )

  const handleDrop = store.action('handle drop', (props: BoardOnDropProps) => {
    // TODO: INVESTIGATE MYSTERY
    //  why this observable does not work as function argument
    // but works with this small refactor?
    const _grouped = grouped.get()

    boardUpdateAction({
      selection: store.state.selection.instance,
      grouped: _grouped,
      items: store.data.applications,
      update: (selectedItems, target) => {
        // optimistic is build-in board update action

        const uniqueUpdates = selectedItems.filter(item => item.stage.id !== target.group.key)

        if (uniqueUpdates.length > 1) {
          store.loopUpdateMany(
            {
              ids: uniqueUpdates.map(app => app.id),
            },
            {
              stage: { connect: { id: target.group.key } },
            },
          )
        }

        if (uniqueUpdates.length === 1) {
          store.update(
            {
              id: uniqueUpdates[0].id,
            },
            {
              stage: { connect: { id: target.group.key } },
            },
            undefined,
          )
        }

        const nextStage = store.data.workflows[0].stages!.find(
          stage => stage.id === target.group.key,
        )

        if (nextStage) {
          return selectedItems.map(application => ({
            ...application,
            stage: nextStage,
          }))
        }
      },
    })(props)
  })

  return useObserver(
    () => (
      <div>
        <Board
          onRenderItem={renderItem}
          onRenderHeader={renderHeader}
          onDrop={handleDrop}
          groups={grouped.get().groups}
          items={toJS(grouped.get().items)}
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

  // TEMP: set default job
  if (
    !store.variables.where ||
    (!store.variables.where.job && store.data.applications.length > 0)
  ) {
    store.variables.where = { job: { id: store.data.applications[0].job.id } }
  }

  return useObserver(() => {
    if (store.meta.status === StoreStatus.loading || store.meta.status === StoreStatus.refetch) {
      return <p>Loading...</p>
    }

    return <ApplicationsBoardBase />
  }, 'ApplicationsBoard')
}
