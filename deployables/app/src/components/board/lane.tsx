import { css } from '@emotion/core'
import { Theme } from '@vats/styling'
import { FocusZone, FocusZoneDirection, IGroup } from 'office-ui-fabric-react'
import React, { useContext } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { BoardCard } from './card'
import { boardClassNames, BoardContext } from './context'

export interface BoardLaneProps {
  group: IGroup
  items: any[]
  groupIndex: number
}

const styles = (theme: Theme) => css`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: ${theme.sizes.m};

  .${boardClassNames.card} {
    margin: ${theme.spacing.s2} 0;
  }
`

export const BoardLane = ({ items, group, groupIndex }: BoardLaneProps) => {
  const ctx = useContext(BoardContext)

  return (
    <Draggable>
      <div css={styles} className={boardClassNames.lane}>
        {ctx.onRenderHeader ? ctx.onRenderHeader(group, items) : <h4>{group.name}</h4>}
        <FocusZone direction={FocusZoneDirection.vertical} isCircularNavigation={true}>
          <Container
            groupName="board-cards"
            behaviour="move"
            onDrop={ctx.handleCardDrop(groupIndex)}
            onDragStart={ctx.handleCardDragStart}
            getChildPayload={ctx.getCardPayload(groupIndex)}
            dragClass={boardClassNames.dragging}
            dropClass={boardClassNames.dropping}
          >
            {items.map((item, i) => {
              return (
                <BoardCard
                  // !!! using id as key here actually caused problems
                  // after few operation dropCallback was called with outdated index
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
        {ctx.onRenderFooter && ctx.onRenderFooter(group, items)}
      </div>
    </Draggable>
  )
}
