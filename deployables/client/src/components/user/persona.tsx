import { IPersonaSharedProps, Persona } from 'office-ui-fabric-react'
import React from 'react'
import { User } from '../../generated/queries'

export interface UserPersonaProps extends IPersonaSharedProps {
  user: User
}

export const UserPersona: React.FC<UserPersonaProps> = ({
  user: { avatar, firstName, lastName, position },
  ...rest
}) => {
  return (
    <Persona
      hidePersonaDetails={false}
      imageShouldFadeIn={true}
      imageAlt={`${firstName} ${lastName} avatar`}
      imageUrl={avatar ? avatar.url : undefined}
      imageInitials={firstName[0] + lastName[0]}
      text={`${firstName} ${lastName}`}
      secondaryText={`${position}`}
      {...rest}
    />
  )
}
