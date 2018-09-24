import gql from 'graphql-tag'
import * as React from 'react'

import { IPersonaSharedProps, Persona } from 'office-ui-fabric-react/lib/Persona'

import { PersonaCandidateFragment } from './generated/PersonaCandidateFragment'

export interface IPersonaCandidateProps extends IPersonaSharedProps {
  candidate: PersonaCandidateFragment
}

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
