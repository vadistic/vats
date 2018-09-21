import * as React from 'react'
import {
  IPersonaProps,
  Persona,
  PersonaPresence,
  IPersonaSharedProps,
} from 'office-ui-fabric-react/lib/Persona'
import gql from 'graphql-tag'
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

const examplePersona: IPersonaSharedProps = {
  imageUrl: 'TestImages.personaFemale',
  imageInitials: 'AL',
  text: 'Annie Lindqvist',
  secondaryText: 'Software Engineer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
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
