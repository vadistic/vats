import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react'
import React from 'react'
import { useIntl } from '../../i18n'
import { SortDirection } from '../../utils'
import { JobsActions, useJobsContext } from './host'
import { JobsSortBy } from './sort'

export interface IJobsBarProps {}

// TODO: sorting menu as Callout component!
export const JobsBar: React.FC<IJobsBarProps> = () => {
  const { dispatch, state } = useJobsContext()
  const { intl } = useIntl()

  const getSortSubmenuItem = (enumValue: JobsSortBy) => ({
    text: intl(undefined, 'job', enumValue),
    key: 'sort-by-' + enumValue,
    onClick: () => dispatch(JobsActions.sortBy(enumValue)),
  })

  const items: ICommandBarItemProps[] = [
    {
      text: `Sort: ${intl(undefined, 'job', state.local.sortBy).toLocaleLowerCase()}`,
      key: 'sort',
      split: true,
      iconProps: {
        iconName: state.local.sortDirection === SortDirection.ASCENDING ? 'SortUp' : 'SortDown',
      },
      onClick: () => {
        dispatch(JobsActions.sortDirection(state.local.sortDirection * -1))
      },
      subMenuProps: {
        items: Object.values(JobsSortBy).map(enumValue => getSortSubmenuItem(enumValue)),
      },
    },
  ]

  return (
    <>
      <CommandBar
        items={items}
        ariaLabel="Use left and right arrow keys to navigate between commands"
      />
    </>
  )
}
