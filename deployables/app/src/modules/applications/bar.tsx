import { CommandBar } from 'office-ui-fabric-react'
import React, { useContext } from 'react'
import { useCommandBarItems } from '../../components/bar'
import { ApplicationsContext } from './store'

export const ApplicationsBar: React.FC = () => {
  const store = useContext(ApplicationsContext)

  const selectRandomJobAction = store.action('select random job', () => {
    store.variables.where = {
      job: {
        id: store.data.applications[0].job.id,
      },
    }
  })

  const { items } = useCommandBarItems(() => ({
    sort: {},
    select: {
      iconProps: {
        iconName: 'warning',
      },
      name: 'Select random',
      onClick: selectRandomJobAction,
    },
  }))

  return <CommandBar items={items} />
}
