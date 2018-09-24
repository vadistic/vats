import * as dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'
import { css } from 'emotion'
import * as React from 'react'

import { Icon } from 'office-ui-fabric-react/lib/Icon'
import { ITheme } from 'office-ui-fabric-react/lib/Styling'

import { Box } from '../Box'

dayjs.extend(relativeTime)

dayjs.locale({
  // @ts-ignore
  ...dayjs().$locale(),
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: 'now',
    m: '1min',
    mm: '%dmin',
    h: '1hr',
    hh: '%dhrs',
    d: '1d',
    dd: '%dd',
    M: '1mo',
    MM: '%dmos',
    y: '1yr',
    yy: '%dyrs',
  },
})

const statusCommonStyles = css`
  width: auto;
  display: flex;
  align-items: center;

  span {
    white-space: nowrap;
  }
`

interface IStatusCommonProps {
  hideOnNull?: boolean
  short?: boolean
}

export interface ICommentStatusProps extends IStatusCommonProps {
  comments: Array<
    object & {
      id: string
    }
  > | null
}

const commentStyles = ({ theme }: { theme: ITheme }) => ({
  root: css`
    ${statusCommonStyles};
  `,
})

const Comment: React.SFC<ICommentStatusProps> = ({ comments, hideOnNull }) => {
  if (!comments && hideOnNull) {
    return null
  }

  return (
    <Box styles={commentStyles}>
      <Icon iconName="Comment" />
      <span>
        {` `}
        {comments ? comments.length : 0}
      </span>
    </Box>
  )
}

const updateStyles = ({ theme }: { theme: ITheme }) => ({
  root: css`
    ${statusCommonStyles};
  `,
})

export interface IUpdateStatusProps extends IStatusCommonProps {
  application:
    | object & {
        updatedAt: any
      }
    | null
}

const Update: React.SFC<IUpdateStatusProps> = ({ application, hideOnNull }) => {
  if (!application && hideOnNull) {
    return null
  }

  // @ts-ignore
  const relativeVal: string = application ? dayjs(application.updatedAt).fromNow(true) : '?'

  return (
    <Box styles={updateStyles}>
      <Icon iconName="Clock" />
      <span>{relativeVal}</span>
    </Box>
  )
}

const ratingStyles = ({ theme }: { theme: ITheme }) => ({
  root: css`
    ${statusCommonStyles};
  `,
})

export interface IRatingStatusProps extends IStatusCommonProps {
  ratings: Array<
    object & {
      value: any
    }
  > | null
}

const Rating: React.SFC<IRatingStatusProps> = ({ ratings, hideOnNull }) => {
  if (!ratings && hideOnNull) {
    return null
  }

  const hasRatings = ratings && ratings.length > 0

  const averageVal = hasRatings
    ? (ratings!.reduce((acc, rating) => acc + rating.value, 0) / ratings!.length).toFixed(1)
    : 0

  return (
    <Box styles={updateStyles}>
      <Icon iconName={hasRatings ? 'FavoriteStarFill' : 'FavoriteStar'} />
      <span>{averageVal}</span>
    </Box>
  )
}

export const Status = { Update, Comment, Rating }
