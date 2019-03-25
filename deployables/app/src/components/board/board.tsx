import { css } from '@emotion/core'
import { Theme } from '@vats/styling'
import { IGroup, Selection } from 'office-ui-fabric-react'
import React, { useRef } from 'react'
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
  onInvokeItem?: (item: any, pointer: BoardCardPointer) => void
  onRenderItem: (item: any, pointer: BoardCardPointer) => JSX.Element
  onRenderHeader?: (group: IGroup, items: any[]) => JSX.Element
  onRenderFooter?: (group: IGroup, items: any[]) => JSX.Element
  onDragStart?: (props: BoardOnDragProps) => void
  onDragUpdate?: (props: BoardOnDragProps) => void
  onDrop: (props: BoardOnDropProps) => void
}

const styles = (theme: Theme) => css`
  display: flex;

  width: 100%;
  height: 100%;
  margin: ${theme.spacing.s1};

  & > .smooth-dnd-container {
    display: flex !important;
    flex-direction: row;
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    /* lane */
    & > div {
      display: flex !important;
      box-sizing: border-box;
      flex-basis: 0;
      flex-grow: 1;
      height: 100%;
      margin: 0 ${theme.spacing.s2};
    }
  }
`

export const Board = (props: BoardProps) => {
  const ctx = createBoardContext(props)

  const ref = useRef<Container>(null)

  // onMouseUp detect proper target
  const handleEmptyClick = (ev: React.MouseEvent) => {
    if (ref.current && ref.current.containerRef.current === (ev.target as any)) {
      ctx.clearSelection()
      ctx.clearCardFocus()
    }
  }

  return (
    <BoardContext.Provider value={ctx}>
      <div css={styles} onMouseUp={handleEmptyClick} className={boardClassNames.board}>
        <Container
          ref={ref}
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
