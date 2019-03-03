import { css } from '@emotion/core'
import { RouteComponentProps } from '@reach/router'
import { objSwitch } from '@vats/utils'
import { FocusZone, FocusZoneDirection, GroupedList } from 'office-ui-fabric-react'
import React from 'react'
import { Job, JobType } from '../../generated/queries'
import { useTheme } from '../../styles'
import { Link } from '../router'
import { useJobsContext } from './host'

export interface JobListItem {
  job: Job
}

export const JobListItemCard: React.FC<JobListItem> = ({ job, ...rest }) => {
  const theme = useTheme()

  const borderColor = objSwitch({
    [JobType.ARCHIVED]: theme.palette.neutralQuaternary,
    [JobType.DRAFT]: theme.palette.themeLight,
    [JobType.PUBLISHED]: theme.palette.themePrimary,
  })[job.type || JobType.PUBLISHED]

  const styles = css`
    padding: ${theme.spacing.m} ${theme.spacing.l2};
    margin: ${theme.spacing.m};

    background-color: ${theme.palette.white};
    border-left: solid 4px;

    border-color: ${borderColor};
  `

  return <div css={styles} {...rest} />
}

export const JobListItem: React.FC<JobListItem> = ({ job }) => {
  // TODO: get from app settings
  const openJobSurface = true

  return (
    <JobListItemCard job={job}>
      <Link plain={true} to={openJobSurface ? job.id : `/job/${job.id}`}>
        <h3>{job.name}</h3>
      </Link>
      <h4>{job.department}</h4>
      <p>{job.type}</p>
      <span>Applications: {job.applications && job.applications.length}</span>
    </JobListItemCard>
  )
}

export interface JobsListProps extends RouteComponentProps {}

export const JobsList: React.FC<JobsListProps> = ({ children }) => {
  const { value: jobs, state } = useJobsContext()

  const renderCell = (nestingDepth?: number, job?: Job, index?: number) => {
    if (job) {
      return <JobListItem job={job} key={job.id} />
    }
    return null
  }

  return (
    <FocusZone direction={FocusZoneDirection.vertical}>
      {/* children necessary for reach router */}
      {children}
      <GroupedList items={jobs} onRenderCell={renderCell} />
    </FocusZone>
  )
}
