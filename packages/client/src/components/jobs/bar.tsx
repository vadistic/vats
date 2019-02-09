import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react'
import React from 'react'
import { useIntl } from '../../i18n'
import { capitalise, SortDirection } from '../../utils'
import { useJobsContect } from './host'
import { JobActionType } from './reducer'
import { JobsSortBy } from './sort'

export interface IJobsBarProps {}

// TODO: sorting menu as Callout component!
export const JobsBar: React.FC<IJobsBarProps> = () => {
  const { dispatch, state } = useJobsContect()
  const { intl } = useIntl()

  const getSortSubmenuItem = (enumValue: JobsSortBy.Name) => ({
    text: intl(undefined, 'job', enumValue),
    key: 'sort-by-' + enumValue,
    onClick: () => dispatch({ type: JobActionType.SortBy, sortBy: enumValue }),
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
        dispatch({ type: JobActionType.SortDirection })
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
