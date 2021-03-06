import { css } from '@emotion/core'
import React from 'react'

export interface BoxProps {
  as?: keyof JSX.IntrinsicElements
  direction?: 'row' | 'column'
}

export const Box: React.FC<BoxProps & JSX.IntrinsicElements['div']> = ({
  as: tag,
  direction = 'column',
  ...rest
}) => {
  const Tag = (tag || 'div') as 'div'

  const styles = css`
    display: flex;
    box-sizing: border-box;
    flex-direction: ${direction};
  `

  return <Tag css={styles} {...rest} />
}
