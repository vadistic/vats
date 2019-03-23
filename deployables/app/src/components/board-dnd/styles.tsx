import { css, SerializedStyles } from '@emotion/core'
import { Theme } from '@vats/styling'
import React from 'react'

interface RefProps {
  componentRef?: React.RefObject<any>
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

export interface BoardCardBaseProps extends RefProps {
  isDragging: boolean
}

console.log(boardCardStyles)

const cssx = (
  ...styles: Array<SerializedStyles | ((theme: Theme) => SerializedStyles) | undefined | false>
) => (theme: Theme) =>
  css(...styles.map(style => (style instanceof Function ? style(theme) : style)).filter(Boolean))

console.log(cssx(boardCardStyles))

export const BoardCardBase: React.FC<BoardCardBaseProps> = ({
  children,
  componentRef,
  isDragging,
}) => {
  if (isDragging) {
    console.log('dragging')
  }

  return (
    <div ref={componentRef} css={boardCardStyles} style={{ opacity: isDragging ? 0.25 : 1 }}>
      {children}
    </div>
  )
}
