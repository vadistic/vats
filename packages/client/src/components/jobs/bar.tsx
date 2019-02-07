import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react'
import React, { useContext } from 'react'
import { capitalise, SortDirection } from '../../utils'
import { JobActionType, JobsContext, JobsSortBy, JobsSortDisplayNamesMap } from './context'

export interface IJobsBarProps {}

export const JobsBar: React.FC<IJobsBarProps> = () => {
  const { dispatch, state } = useContext(JobsContext)

  const getSortSubmenuItem = (enumValue: JobsSortBy.Name) => ({
    text: capitalise(JobsSortDisplayNamesMap[enumValue]),
    key: 'sort-by-' + enumValue,
    onClick: () => dispatch({ type: JobActionType.SortBy, sortBy: enumValue }),
  })

  const items: ICommandBarItemProps[] = [
    {
      text: `Sort by ${JobsSortDisplayNamesMap[state.local.sortBy]}`,
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
