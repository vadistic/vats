import { css } from '@emotion/core'
import { Theme, useTheme } from '@vats/styling'
import { observer } from 'mobx-react-lite'
import { PersonaCoin } from 'office-ui-fabric-react'
import React, { useContext } from 'react'
import { SingleCandidateContext } from '../store'

export const candidateAvatarStyles = (theme: Theme) => css`
  width: ${theme.sizes.s1};
  height: ${theme.sizes.s1};

  border-radius: 100%;

  background-color: ${theme.semanticColors.disabledBackground};
`

export const CandidateAvatarBase: React.FC = () => {
  const store = useContext(SingleCandidateContext)

  if (!store.data.candidate) {
    return null
  }

  const theme = useTheme()

  const { avatar, firstName, lastName } = store.data.candidate

  return (
    <PersonaCoin
      coinSize={+theme.sizes.s1.slice(0, -2)}
      imageUrl={avatar ? avatar.url : undefined}
      imageInitials={(firstName ? firstName[0] : '') + (lastName ? lastName[0] : '') || '?'}
    />
  )
}

export const CandidateAvatar = observer(CandidateAvatarBase)
