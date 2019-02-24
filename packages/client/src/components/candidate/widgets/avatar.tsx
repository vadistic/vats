import { css } from '@emotion/core'
import { Image, ImageFit } from 'office-ui-fabric-react'
import React from 'react'
import { ITheme } from '../../../styles'
import { Box } from '../../box'
import { useCandidateContext } from '../host'

export const userAvatarStyles = (theme: ITheme) => css`
  width: ${theme.sizes.s1};
  height: ${theme.sizes.s1};

  border-radius: 100%;

  background-color: ${theme.semanticColors.disabledBackground};
`

export const UserAvatar: React.FC = () => {
  const {
    value: { avatar },
  } = useCandidateContext()

  return (
    <Box as="figure">
      {avatar ? (
        <Image
          css={userAvatarStyles}
          shouldFadeIn={true}
          shouldStartVisible={false}
          imageFit={ImageFit.cover}
          src={avatar.url}
        />
      ) : (
        <Box css={userAvatarStyles} />
      )}
    </Box>
  )
}
