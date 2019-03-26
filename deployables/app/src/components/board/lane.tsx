import { css } from '@emotion/core'
import { cx, Theme } from '@vats/styling'
import { FocusZone, FocusZoneDirection, IGroup } from 'office-ui-fabric-react'
import React, { useContext, useRef, useState } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { BoardCard } from './card'
import { BoardCardPointer, boardClassNames, BoardContext, BoardDragInfo } from './context'

export interface BoardLaneProps {
  group: IGroup
  items: any[]
  groupIndex: number
}

const styles = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  padding: ${theme.spacing.m};

  background-color: ${theme.palette.neutralLighter};
  border-radius: 4px;

  transition: background 0.25s ease-in-out;

  &.over {
    background-color: ${theme.palette.neutralLight};

    .smooth-dnd-container {
      padding-bottom: ${theme.sizes.s2};
    }
  }

  .smooth-dnd-container {
    /* needs to be faster than dnd animation */
    transition: padding 0.25s ease-out;

    & > * {
      margin: ${theme.spacing.s2} 0;

      :not(:first-of-type) {
        margin-top: ${theme.spacing.s2};
      }
      :not(:last-of-type) {
        margin-bottom: ${theme.spacing.s2};
      }
    }
  }
`

export const BoardLane = ({ items, group, groupIndex }: BoardLaneProps) => {
  const ctx = useContext(BoardContext)

  const [isOver, setOver] = useState(false)

  // hack because of callback scope memoisation
  const isOverRef = useRef(isOver)
  isOverRef.current = isOver

  const handleDragEnter = () => {
    if (isOverRef.current !== true) {
      setOver(true)
    }
  }

  const handleDragLeave = () => {
    if (isOverRef.current !== false) {
      setOver(false)
    }
  }

  const handleDragEnd = (info: BoardDragInfo<BoardCardPointer>) => {
    ctx.handleCardDragEnd(info)

    if (isOverRef.current !== false) {
      setOver(false)
    }
  }

  return (
    <Draggable className={cx(boardClassNames.lane, isOver && 'over')} css={styles}>
      <div className="header">
        {ctx.onRenderHeader ? ctx.onRenderHeader(group, items) : <h4>{group.name}</h4>}
      </div>
      <FocusZone direction={FocusZoneDirection.vertical} isCircularNavigation={true}>
        <Container
          groupName="board-cards"
          behaviour="move"
          onDrop={ctx.handleCardDrop(groupIndex)}
          onDragStart={ctx.handleCardDragStart}
          getChildPayload={ctx.getCardPayload(groupIndex)}
          dragClass={boardClassNames.dragging}
          dropClass={boardClassNames.dropping}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragEnd={handleDragEnd}
        >
          {items.map((item, i) => {
            return (
              <BoardCard
                key={group.startIndex + i}
                index={group.startIndex + i}
                groupIndex={groupIndex}
                localIndex={i}
                item={item}
                isModal={ctx.selection.isModal()}
                isSelected={ctx.selection.isIndexSelected(group.startIndex + i)}
              />
            )
          })}
        </Container>
      </FocusZone>
      {ctx.onRenderFooter && <div className="footer">{ctx.onRenderFooter(group, items)}</div>}
    </Draggable>
  )
}
