import { css } from '@emotion/core'
import { getTheme, Image, ImageFit } from 'office-ui-fabric-react'
import React from 'react'
import { ITheme } from '../../styles'
import { FormikTextField, FormikTextFieldProps } from '../formik'
import { IProfileImageProps } from './profile'

export const profileImageStyles = (theme: ITheme) => css`
  width: ${theme.sizes.ms};
  height: ${theme.sizes.ms};
`

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

export const DisplayField: React.FC<FormikTextFieldProps> = ({ ...rest }) => {
  return <FormikTextField borderless={true} autoComplete="off" resizable={false} {...rest} />
}
