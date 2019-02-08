import { css } from '@emotion/core'
import { getTheme, IImageProps, Image, ImageFit } from 'office-ui-fabric-react'
import React from 'react'
import { Candidate } from '../../generated/queries'
import { ITheme } from '../../styles'
import { FormikTextField, FormikTextFieldProps } from '../formik'

export const profileImageStyles = (theme: ITheme) => css`
  width: ${theme.sizes.ms};
  height: ${theme.sizes.ms};
`

export interface IProfileImageProps extends IImageProps {
  avatar: Candidate['avatar']
}

export const ProfileImage: React.FC<IProfileImageProps> = ({ avatar }) => {
  const theme = getTheme()

  if (avatar === null) {
    return null
  }

  return (
    <Image
      styles={{ root: { ...theme.effects.elevation8 } }}
      css={profileImageStyles}
      shouldFadeIn={true}
      imageFit={ImageFit.cover}
      src={avatar.url}
    />
  )
}
