import { css } from 'emotion'
import * as React from 'react'

import { IPersonaProps, Persona } from 'office-ui-fabric-react/lib/Persona'

import { PersonaCandidateFragment } from './generated/PersonaCandidateFragment'

export interface IPersonaCandidateProps extends IPersonaProps {
  candidate: PersonaCandidateFragment
}

export const personaCandidateStyles = () => ({
  root: css`
    width: 100%;
  `,
})

export const PersonaCandidate: React.SFC<IPersonaCandidateProps> = ({
  candidate: { avatar, firstName, lastName, metaCompany, metaPosition },
  ...rest
}) => {
  const secondaryText =
    metaPosition && metaCompany
      ? `${metaPosition} @ ${metaCompany}`
      : metaPosition || metaCompany || undefined

  return (
    <Persona
      styles={personaCandidateStyles}
      hidePersonaDetails={false}
      imageAlt={'first name last name profile photo'}
      imageShouldFadeIn={true}
      imageUrl={avatar ? avatar.url : undefined}
      imageInitials={firstName[0] + lastName[0]}
      text={`${firstName} ${lastName}`}
      secondaryText={secondaryText}
      {...rest}
    />
  )
}
