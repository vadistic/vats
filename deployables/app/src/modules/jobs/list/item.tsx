import { css } from '@emotion/core'
import { useTheme } from '@vats/styling'
import { objSwitch } from '@vats/utils'
import React from 'react'
import { Link, LinkArg } from '../../../components'
import { JobType } from '../../../generated/queries'
import { SingleJobValue } from '../../job/store'

export interface JobListItemProps {
  job: SingleJobValue
  linkProps?: {
    name?: LinkArg
  }
}

export const JobListItemCard: React.FC<JobListItemProps> = ({ job, ...rest }) => {
  const theme = useTheme()

  const borderColor = objSwitch({
    [JobType.ARCHIVED]: theme.palette.neutralQuaternary,
    [JobType.DRAFT]: theme.palette.themeLight,
    [JobType.PUBLISHED]: theme.palette.themePrimary,
  })[job.type || JobType.PUBLISHED]

  const styles = css`
    padding: ${theme.spacing.m} ${theme.spacing.l2};

    background-color: ${theme.palette.white};
    border-left: solid 4px;

    border-color: ${borderColor};
  `

  return <div css={styles} {...rest} />
}

export const JobListItem: React.FC<JobListItemProps> = ({ job, linkProps }) => {
  return (
    <JobListItemCard job={job}>
      <Link plain={true} to={linkProps ? linkProps.name : undefined} data-is-focusable={false}>
        <h3>{job.name}</h3>
      </Link>
      <h4>{job.department}</h4>
      <p>{job.type}</p>
      <span>Applications: {job.applications && job.applications.length}</span>
    </JobListItemCard>
  )
}
