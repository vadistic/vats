import { css } from '@emotion/core'
import { RouteComponentProps } from '@reach/router'
import { FocusZone, FocusZoneDirection, GroupedList } from 'office-ui-fabric-react'
import React, { useContext } from 'react'
import { Job, JobType } from '../../generated/queries'
import { styled } from '../../styles'
import { Link } from '../link'
import { JobsContext } from './context'

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

export const JobListItem: React.FC<IJobListItem> = ({ item }) => {
  // TODO: get from app settings
  const openJobSurface = true

  return (
    <JobListItemCard item={item}>
      <Link plain={true} to={openJobSurface ? item.id : `/job/${item.id}`}>
        <h3>{item.name}</h3>
      </Link>
      <h4>{item.department}</h4>
      <p>{item.type}</p>
      <span>Applications: {item.applications && item.applications.length}</span>
    </JobListItemCard>
  )
}

export interface IJobsListProps extends RouteComponentProps {}

export const JobsList: React.FC<IJobsListProps> = ({ children }) => {
  const { jobs } = useContext(JobsContext)

  const handleGroupedRenderCell = (nestingDepth?: number, item?: Job, index?: number) => {
    if (item) {
      return <JobListItem item={item} />
    }
    return null
  }

  return (
    <FocusZone direction={FocusZoneDirection.vertical}>
      {/* children necessary for reach router */}
      {children}
      <GroupedList items={jobs} onRenderCell={handleGroupedRenderCell} />
    </FocusZone>
  )
}
