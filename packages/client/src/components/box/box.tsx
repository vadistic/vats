import { css } from '@emotion/core'
import React from 'react'
import { ITheme, styled } from '../../styles'

export interface IBoxProps {
  fill?: boolean
  direction?: 'row' | 'column'
  as?: keyof React.ReactHTML
}

const BoxBase: React.FC<IBoxProps> = ({ as: Tag = 'div', ...rest }) => <Tag {...rest} />

export const Box = styled(BoxBase)(
  ({ direction = 'column' }) => css`
    display: flex;
    flex-direction: ${direction};
    box-sizing: border-box;
  `,
  ({ fill }) =>
    fill &&
    css`
      height: 100%;
      width: 100%;
    `,
)
