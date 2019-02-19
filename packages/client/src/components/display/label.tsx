import { css } from '@emotion/core'
import { Icon, IIconProps } from 'office-ui-fabric-react'
import React from 'react'
import { ITheme } from '../../styles'
import { Box } from '../box'

export interface IDisplayLabelProps {
  iconProps?: IIconProps
  text: string
}

const displaylabelStyles = (theme: ITheme) => css`
  align-items: center;
  margin-top: ${theme.spacing.m};
  margin-bottom: ${theme.spacing.s1};

  h4 {
    margin: 0;
  }

  i {
    margin: 0;
    margin-left: ${theme.spacing.s1};
  }
`

export const DisplayLabel: React.FC<IDisplayLabelProps> = ({ text, iconProps }) => (
  <Box direction="row" css={displaylabelStyles}>
    <h4>{text}</h4>
    <Icon {...iconProps} />
  </Box>
)
