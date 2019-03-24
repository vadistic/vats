import { css } from '@emotion/core'
import { cx, Theme } from '@vats/styling'
import React, { memo, useContext, useEffect } from 'react'
import { Draggable } from 'react-smooth-dnd'
import { useDoubleClickSensor } from '../../utils'
import { BoardCardPointer, boardClassNames, BoardContext } from './context'

export interface BoardCardProps {
  index: number
  localIndex: number
  groupIndex: number
  isSelected: boolean
  isModal: boolean
  item: any
}

const styles = (theme: Theme) => css`
  padding: ${theme.spacing.s1} ${theme.spacing.m};

  cursor: move;

  border: 1px solid;
  border-color: ${theme.palette.neutralLight};
  background-color: ${theme.palette.white};
  border-radius: 4px;

  &:hover {
    background-color: ${theme.semanticColors.listItemBackgroundHovered};
  }

  &:focus {
    background-color: ${theme.semanticColors.listItemBackgroundHovered};
    border-color: ${theme.semanticColors.focusBorder};
  }

  transition: transform 0.25s ease-in-out;

  &.dragging {
    box-shadow: 2px 2px 4px ${theme.palette.neutralLight};
    transform: rotate(5deg);
  }

  &.dropping {
    transform: rotate(0deg);
  }

  &.selected.modal {
    border-color: ${theme.palette.themePrimary};
  }
`

export const BoardCard: React.FC<BoardCardProps> = memo(
  ({ index, localIndex, groupIndex, item, isSelected, isModal }) => {
    const pointer: BoardCardPointer = { index, groupIndex, localIndex }

    const ctx = useContext(BoardContext)

    const ref = ctx.cardRefs[pointer.index]

    // focus on each render
    useEffect(() => {
      if (ctx.focusRef.current === index && ref.current) {
        console.log('focus effect', ref.current, ctx.focusRef.current)
        ref.current.focus()
      }
    })

    const isDoubleClick = useDoubleClickSensor()

    const handleKeydown = (ev: React.KeyboardEvent<HTMLDivElement>) => {
      ctx.handleCardKeydownSelection(pointer)(ev)
      ctx.handleCardFocusNavigation(pointer)(ev)
    }

    // ! mouseUp to do not deselect on dragStart
    const handleClick = (ev: React.MouseEvent<HTMLDivElement>) => {
      const double = isDoubleClick(ev)

      if (double) {
        ctx.handleCardDoubleClick({
          crtlKey: ev.ctrlKey,
          shiftKey: ev.shiftKey,
          pointer,
        })
      } else {
        ctx.handleCardClick({
          crtlKey: ev.ctrlKey,
          shiftKey: ev.shiftKey,
          pointer,
        })
      }
    }

    return (
      <Draggable>
        <div
          tabIndex={index}
          ref={ref}
          onFocus={ctx.handleCardFocus(pointer)}
          css={styles}
          className={cx(boardClassNames.card, isSelected && 'selected', isModal && 'modal')}
          onKeyDown={handleKeydown}
          onMouseUp={handleClick}
          data-is-focusable={true}
        >
          {ctx.onRenderItem(item, pointer)}
        </div>
      </Draggable>
    )
  },
)
