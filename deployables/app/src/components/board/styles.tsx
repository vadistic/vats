import { css } from '@emotion/core'
import { Theme } from '@vats/styling'
import React from 'react'

interface RefProps {
  componentRef?: React.Ref<any>
}

const boardStyles = css``

export const BoardBase: React.FC<RefProps> = ({ children, componentRef }) => (
  <div ref={componentRef} css={boardStyles}>
    {children}
  </div>
)

const boardGroupStyles = css``

export const BoardGroupBase: React.FC<RefProps> = ({ children, componentRef }) => (
  <div ref={componentRef} css={boardGroupStyles}>
    {children}
  </div>
)

const boardCardStyles = (theme: Theme) => css`
  border: 1px dashed gray;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  background-color: white;
  cursor: move;
`

export interface BoardCardBaseProps {}

export const BoardCardBase: React.FC<BoardCardBaseProps> = ({ children }) => {
  return <div css={boardCardStyles}>{children}</div>
}
