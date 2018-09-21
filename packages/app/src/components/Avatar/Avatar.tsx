import gql from 'graphql-tag'
import * as React from 'react'

import {
  IPersonaProps,
  IPersonaSharedProps,
  Persona,
  PersonaPresence,
} from 'office-ui-fabric-react/lib/Persona'

import { CandidateAvatarFragment } from './generated/CandidateAvatarFragment'

export const candidateAvatarFragment = gql`
  fragment CandidateAvatarFragment on Candidate {
    id
    firstName
    lastName
    avatar {
      url
      name
    }
  }
`

export const userAvatarFragment = gql`
  fragment UserAvatarFragment on User {
    id
    firstName
    lastName
    avatar {
      url
      name
    }
  }
`

export interface IAvatarProps extends IPersonaSharedProps {
  candidate: CandidateAvatarFragment
}

export const Avatar: React.SFC<IAvatarProps> = ({
  candidate: { avatar, firstName, lastName },
  ...rest
}) => {
  return (
    <Persona
      hidePersonaDetails={false}
      imageAlt={'first name last name profile photo'}
      imageShouldFadeIn={true}
      imageUrl={avatar ? avatar.url : undefined}
      text={`${firstName} ${lastName}`}
      secondaryText={'Secondary text'}
      tertiaryText={'Tetriary text'}
      optionalText={'optional text'}
      {...rest}
    />
  )
}
