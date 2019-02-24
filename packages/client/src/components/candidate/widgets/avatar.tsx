import { css } from '@emotion/core'
import { Image, ImageFit, PersonaCoin, PersonaSize } from 'office-ui-fabric-react'
import React from 'react'
import { ITheme, useTheme } from '../../../styles'
import { Box } from '../../box'
import { useCandidateContext } from '../host'

export const userAvatarStyles = (theme: ITheme) => css`
  width: ${theme.sizes.s1};
  height: ${theme.sizes.s1};

  border-radius: 100%;

  background-color: ${theme.semanticColors.disabledBackground};
`

export const UserAvatar: React.FC = () => {
  const { value: candidate } = useCandidateContext()
  const theme = useTheme()

  const { avatar, firstName, lastName } = candidate

  return (
    <PersonaCoin
      coinSize={+theme.sizes.s1.slice(0, -2)}
      imageUrl={avatar ? avatar.url : undefined}
      imageInitials={(firstName ? firstName[0] : '') + (lastName ? lastName[0] : '') || '?'}
    />
  )
}
