import { Link } from '@reach/router'
import gql from 'graphql-tag'
import * as React from 'react'

import { IPersonaSharedProps, Persona } from 'office-ui-fabric-react/lib/Persona'

import { PersonaUserFragment } from './generated/UserPersonaFragment'

export interface IPersonaUserProps extends IPersonaSharedProps {
  user: PersonaUserFragment
}

export const PersonaUser: React.SFC<IPersonaUserProps> = ({
  user: { id, avatar, firstName, lastName },
  ...rest
}) => {
  return (
    <Link to={`/user/${id}`}>
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
    </Link>
  )
}
