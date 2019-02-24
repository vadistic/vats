import { css } from '@emotion/core'
import { Icon, IIconProps, Label } from 'office-ui-fabric-react'
import React from 'react'
import { ITheme } from '../../styles'

export interface IDisplayLabelProps {
  iconProps?: IIconProps
  text: string
}

const displaylabelStyles = (theme: ITheme) => css`
  display: flex;
  box-sizing: border-box;
  align-items: center;

  span {
    font-weight: 600;
  }

  i {
    color: ${theme.palette.themePrimary};
    margin: 0;
    margin-left: ${theme.spacing.s1};
  }
`

export const DisplayLabel: React.FC<IDisplayLabelProps> = ({ text, iconProps }) => (
  <Label css={displaylabelStyles}>
    <span>{text}</span>
    <Icon {...iconProps} />
  </Label>
)
