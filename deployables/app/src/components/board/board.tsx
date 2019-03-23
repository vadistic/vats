import { css } from '@emotion/core'
import { Theme } from '@vats/styling'
import { IGroup, Selection } from 'office-ui-fabric-react'
import React from 'react'
import { Container } from 'react-smooth-dnd'
import {
  BoardCardPointer,
  boardClassNames,
  BoardContext,
  BoardOnDragProps,
  BoardOnDropProps,
  createBoardContext,
} from './context'
import { BoardLane } from './lane'

export interface BoardProps {
  groups: IGroup[]
  items: any[]
  selection: Selection
  onRenderItem: (item: any, pointer: BoardCardPointer) => JSX.Element
  onInvokeItem?: (item: any, pointer: BoardCardPointer) => void
  onRenderHeader?: (group: IGroup, items: any[]) => void
  onRenderFooter?: (group: IGroup, items: any[]) => void
  onDragStart?: (props: BoardOnDragProps) => void
  onDragUpdate?: (props: BoardOnDragProps) => void
  onDrop: (props: BoardOnDropProps) => void
}

const styles = (theme: Theme) => css`
  display: flex;

  background-color: ${theme.palette.themeLight};

  /* smooth-dnd-draggable-wrapper */
  & > div {
    display: flex !important;
  }

  .${boardClassNames.lane} {
    margin: 0 ${theme.spacing.ms};
  }
`

export const Board = (props: BoardProps) => {
  const ctx = createBoardContext(props)

  const handleEmptyClick = (ev: React.MouseEvent) => {
    if (ev.target && `${(ev.target as any).className}`.includes(boardClassNames.lane)) {
      ctx.clearSelection()
    }
  }

  return (
    <BoardContext.Provider value={ctx}>
      <div css={styles} onClick={handleEmptyClick} className={boardClassNames.board}>
        <Container
          orientation="horizontal"
          groupName="board-lanes"
          behaviour="move"
          lockAxis="x"
          onDragStart={ctx.handleLaneDragStart}
          onDrop={ctx.handleLaneDrop}
        >
          {ctx.groups.map((group, i) => (
            <BoardLane
              key={group.key}
              groupIndex={i}
              group={group}
              items={ctx.items.slice(group.startIndex, group.startIndex + group.count)}
            />
          ))}
        </Container>
      </div>
    </BoardContext.Provider>
  )
}
