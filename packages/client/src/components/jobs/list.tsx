import { css } from '@emotion/core'
import { FocusZone, FocusZoneDirection, GroupedList, List } from 'office-ui-fabric-react'
import React, { useContext } from 'react'
import { Job, JobType } from '../../generated/queries'
import { styled } from '../../styles'
import { JobsContext } from '../../views'

export interface IJobListItem {
  item: Job
}

export const JobListItemCard = styled.div<IJobListItem>(
  ({ theme }) => css`
    padding: ${theme.spacing.m} ${theme.spacing.l2};
    margin: ${theme.spacing.m};

    background-color: ${theme.palette.white};
    border-left: solid 4px;
  `,
  ({ theme, item }) => {
    switch (item.type) {
      case JobType.ARCHIVED:
        return { borderColor: theme.palette.neutralQuaternary }
      case JobType.DRAFT:
        return { borderColor: theme.palette.themeLight }
      case JobType.PUBLISHED:
        return { borderColor: theme.palette.themePrimary }
    }
  },
)

export const JobListItem: React.FC<IJobListItem> = ({ item }) => (
  <JobListItemCard item={item}>
    <h3>{item.name}</h3>
    <h4>{item.department}</h4>
    <p>{item.type}</p>
    <span>Applications: {item.applications && item.applications.length}</span>
  </JobListItemCard>
)

export interface IJobsListProps {}

export const JobsList: React.FC<IJobsListProps> = () => {
  const { jobs } = useContext(JobsContext)

  const handleGroupedRenderCell = (nestingDepth?: number, item?: Job, index?: number) => {
    if (item) {
      return <JobListItem item={item} />
    }
    return null
  }

  const getKey = (item: Job) => item.id
  return (
    <FocusZone direction={FocusZoneDirection.vertical}>
      <GroupedList items={jobs} onRenderCell={handleGroupedRenderCell} />
    </FocusZone>
  )
}
