import { IPersonaSharedProps, Persona } from 'office-ui-fabric-react'

export interface IUserPersonaProps extends IPersonaSharedProps {
  user: any
}

export const UserPersona: React.SFC<IUserPersonaProps> = ({
  user: { avatar, firstName, lastName },
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
