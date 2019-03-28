import { css } from '@emotion/core'
import { useTranslation } from '@vats/i18n'
import { createPartialSelector } from '@vats/store'
import { useTheme } from '@vats/styling'
import { filterNull } from '@vats/utils'
import { Icon, IPersonaSharedProps, Persona, PersonaSize } from 'office-ui-fabric-react'
import React from 'react'
import { Link, LinkArg, useDayjs } from '../../../components'
import { SingleCandidateValue } from '../store'

export const personaCandidateSelector = createPartialSelector(
  (candidate: SingleCandidateValue) => ({
    firstName: candidate.firstName,
    lastName: candidate.lastName,
    avatar: candidate.avatar
      ? {
          url: candidate.avatar.url,
        }
      : null,
    position: candidate.position,
    company: candidate.company,
    updatedAt: candidate.updatedAt,
    comments: candidate.comments ? candidate.comments.map(val => ({ id: val.id })) : null,
  }),
  ({ comments, firstName, lastName, company, position }) => ({
    commentsCount: comments ? comments.length : 0,
    fullName: filterNull([firstName, lastName]).join(' '),
    initials: `${firstName ? firstName[0] : ''}${lastName ? lastName[0] : ''}`,
    companyAndPosition: filterNull([position, company]).join(' @ '),
  }),
)

type PersonaCandidate = ReturnType<typeof personaCandidateSelector>

export interface CandidatePersonaProps extends IPersonaSharedProps {
  candidate: PersonaCandidate
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

  const statusStyles = css`
    & > * {
      margin-right: ${theme.spacing.s1};
    }
  `

  const renderName = () => (
    <Link plain={true} to={linkProps.name}>
      {candidate.fullName}
    </Link>
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

    const renderComments = (
      <Link
        tabIndex={-1}
        plain={true}
        to={linkProps.comments}
        title={`${candidate.commentsCount} ${tp.candidate.comment({
          count: candidate.commentsCount,
        })}`}
      >
        <Icon iconName="comment" /> {candidate.commentsCount}
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
        {candidate.commentsCount}
      </Link>
    )

    return (
      <div css={statusStyles}>
        {renderDate}
        {candidate.comments && renderComments}
        {reviews && renderReviews}
      </div>
    )
  }

  return (
    <Persona
      hidePersonaDetails={false}
      imageShouldFadeIn={true}
      size={PersonaSize.size72}
      imageAlt={candidate.fullName + ' ' + tp.candidate.avatar()}
      imageUrl={candidate.avatar ? candidate.avatar.url : undefined}
      imageInitials={candidate.initials}
      onRenderPrimaryText={renderName}
      secondaryText={candidate.companyAndPosition}
      onRenderTertiaryText={renderStatus}
      {...rest}
    />
  )
}
