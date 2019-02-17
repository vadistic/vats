import { css } from '@emotion/core'
import { IImageProps, Image, ImageFit } from 'office-ui-fabric-react'
import React from 'react'
import { ITheme } from '../../../styles'
import { Box } from '../../box'
import { CandidateValue } from '../host'

export const userAvatarStyles = (theme: ITheme) => css`
  width: ${theme.sizes.ms};
  height: ${theme.sizes.ms};

  border-radius: 100%;

  background-color: ${theme.semanticColors.disabledBackground};
`

export interface IProfileImageProps extends IImageProps {
  avatar: CandidateValue['avatar']
}

export const UserAvatar: React.FC<IProfileImageProps> = ({ avatar }) => {
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
        <Box css={userAvatarStyles} className="fallback" />
      )}
    </Box>
  )
}
