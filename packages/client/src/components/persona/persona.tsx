import { IPersonaSharedProps, Persona } from 'office-ui-fabric-react'

export interface IUserPersonaProps extends IPersonaSharedProps {
  user: any
}

export const UserPersona: React.SFC<IUserPersonaProps> = ({
  user: { avatar, firstName, lastName, position },
  ...rest
}) => {
  return (
    <Persona
      hidePersonaDetails={false}
      imageAlt={`${firstName} ${lastName} avatar`}
      imageShouldFadeIn={true}
      // handle user without avatar
      imageUrl={avatar ? avatar.url : undefined}
      text={`${firstName} ${lastName}`}
      secondaryText={`${position}`}
      {...rest}
    />
  )
}
