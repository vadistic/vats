import { css } from '@emotion/core'
import React from 'react'
import { styled } from '../../styles'
import { Omit } from '../../utils'

type IntristicDivAttributes = React.HTMLAttributes<any>

export interface IBoxProps extends IntristicDivAttributes {
  direction?: 'row' | 'column'
  as?: keyof React.ReactHTML
  className?: string
}

const BoxBase: React.FC<IBoxProps> = ({ as: Tag = 'div', ...rest }) => <Tag {...rest} />

export const Box = styled(BoxBase)(
  ({ direction = 'column' }) => css`
    display: flex;
    flex-direction: ${direction};
    box-sizing: border-box;
  `,
)
