import { css } from '@emotion/core'
import { Icon, IPersonaSharedProps, Persona, PersonaSize } from 'office-ui-fabric-react'
import React from 'react'
import { useTranslation } from '../../../i18n'
import { useTheme } from '../../../styles'
import { useDayjs } from '../../datetime'
import { Link, LinkArg } from '../../router'
import { CandidateValue } from '../host'

export interface CandidatePersonaProps extends IPersonaSharedProps {
  candidate: CandidateValue
  linkProps?: {
    name?: LinkArg
    date?: LinkArg
    comments?: LinkArg
    review?: LinkArg
  }
}

export const CandidatePersona: React.FC<CandidatePersonaProps> = ({
  candidate,
  linkProps = {},
  ...rest
}) => {
  const theme = useTheme()
  const { tp } = useTranslation()
  const { dayjs, shortDateFormat } = useDayjs(candidate.updatedAt)

  const { avatar, firstName, lastName, position, company, comments } = candidate

  const statusStyles = css`
    & > * {
      margin-right: ${theme.spacing.s1};
    }
  `

  const renderName = () => (
    <Link plain={true} to={linkProps.name}>{`${firstName} ${lastName}`}</Link>
  )

  const renderStatus = () => {
    const renderDate = (
      <Link
        tabIndex={-1}
        plain={true}
        to={linkProps.date}
        title={`${tp.candidate.updatedAt()}: ${dayjs.format(shortDateFormat)}`}
      >
        <Icon iconName="clock" /> {dayjs.fromNow(true)}
      </Link>
    )

    const commentsCount = (comments && comments.length) || 0

    const renderComments = (
      <Link
        tabIndex={-1}
        plain={true}
        to={linkProps.comments}
        title={`${commentsCount} ${tp.candidate.comment({ count: commentsCount })}`}
      >
        <Icon iconName="comment" /> {commentsCount}
      </Link>
    )

    // TODO: implement reviews/rating api
    const reviews = true
    const reviewsValue = Math.round(Math.random() * 4)
    const reviewsCount = Math.round(Math.random() * 4)

    const renderReviews = (
      <Link
        tabIndex={-1}
        plain={true}
        to={linkProps.review}
        title={`${reviewsCount} ${tp.candidate.review({ count: reviewsCount })}`}
      >
        <Icon iconName={reviewsValue >= 2.5 ? 'favoritestarfill' : 'favoritestar'} />{' '}
        {commentsCount}
      </Link>
    )

    return (
      <div css={statusStyles}>
        {renderDate}
        {comments && renderComments}
        {reviews && renderReviews}
      </div>
    )
  }

  return (
    <Persona
      hidePersonaDetails={false}
      imageShouldFadeIn={true}
      size={PersonaSize.size72}
      imageAlt={`${firstName} ${lastName} avatar`}
      imageUrl={avatar ? avatar.url : undefined}
      imageInitials={firstName[0] + lastName[0]}
      onRenderPrimaryText={renderName}
      secondaryText={position || company || undefined}
      onRenderTertiaryText={renderStatus}
      {...rest}
    />
  )
}
