import { RouteComponentProps } from '@reach/router'
import { useReaction } from '@vats/store'
import { useObserver } from 'mobx-react-lite'
import {
  FocusZone,
  FocusZoneDirection,
  GroupedList,
  Selection,
  SelectionMode,
  SelectionZone,
} from 'office-ui-fabric-react'
import React, { useContext, useRef } from 'react'
import { SingleJobValue } from '../../job/store'
import { JobsContext } from '../store'
import { JobListItem } from './item'

export interface JobsListProps extends RouteComponentProps {
  children: React.ReactElement
}

export const JobsList: React.FC<JobsListProps> = ({ children }) => {
  const store = useContext(JobsContext)

  const selection = useRef<Selection>(
    new Selection({
      selectionMode: SelectionMode.single,
      getKey: ((job: SingleJobValue) => job.id) as any,
      canSelectItem: ((job: SingleJobValue) => job.__typename === 'Job') as any,
      onSelectionChanged: () => {
        console.log('selection changed', selection.current.getSelection())
      },
    }),
  )

  useReaction(
    `JobsList: selection`,
    () => store.data.jobs.map(job => job.id),
    () => {
      selection.current.setItems(store.data.jobs as any, true)
    },
    [store, selection.current],
  )

  const renderCell = (nestingDepth?: number, job?: SingleJobValue) => {
    if (job) {
      return (
        <div
          data-is-focusable={true}
          data-selection-toggle={true}
          key={job.id}
          onClick={() => {
            selection.current.toggleKeySelected(job.id)
          }}
        >
          <JobListItem job={job} linkProps={{ name: { to: `./${job.id}` } }} key={job.id} />
        </div>
      )
    }

    return null
  }

  return useObserver(() => {
    if (store.data.jobs.length === 0) {
      return null
    }

    return (
      <FocusZone direction={FocusZoneDirection.vertical}>
        {/* children necessary for reach router */}
        {children}
        <SelectionZone
          selection={selection.current}
          onItemInvoked={item => {
            console.log('item invoked', item)
          }}
          isSelectedOnFocus={true}
        >
          <GroupedList
            items={store.data.jobs}
            groups={[
              {
                name: 'Jobs',
                key: 'jobs',
                startIndex: 0,
                count: store.data.jobs.length,
              },
            ]}
            selection={selection.current}
            selectionMode={SelectionMode.single}
            onRenderCell={renderCell}
          />
        </SelectionZone>
      </FocusZone>
    )
  }, 'JobsList')
}
