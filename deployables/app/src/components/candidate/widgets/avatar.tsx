import { css } from '@emotion/core'
import { useHostContext } from '@vats/host'
import { Theme, useTheme } from '@vats/styling'
import { PersonaCoin } from 'office-ui-fabric-react'
import React from 'react'
import { candidateHost } from '../host'

export const userAvatarStyles = (theme: Theme) => css`
  width: ${theme.sizes.s1};
  height: ${theme.sizes.s1};

  border-radius: 100%;

  background-color: ${theme.semanticColors.disabledBackground};
`

export const UserAvatar: React.FC = () => {
  const {
    data: { candidate },
  } = useHostContext(candidateHost)

  if (!candidate) {
    return null
  }

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
