import { css } from '@emotion/core'
import { IGroup } from 'office-ui-fabric-react'
import React, { useRef } from 'react'
import { __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__ } from 'react-dnd'
import { DarggableType, DraggableItem, DraggableProps, DraggableVector } from './board'
import { BoardCard } from './card'

const { useDrop } = __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__

export interface BoardGroupProps extends DraggableProps {
  onRenderItem: (item: any) => JSX.Element
  groupIndex: number
  group: IGroup
  items: any[]
  vector: DraggableVector | undefined
}

export const BoardGroup = ({
  items,
  group,
  groupIndex,
  onRenderItem,
  onDrop,
  moveDraggable,
  getDraggable,
  ...rest
}: BoardGroupProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useDrop({
    ref,
    accept: DarggableType.CARD,
    hover: ({ pointer: current }: DraggableItem, monitor) => {
      const dragged = getDraggable(current)
      // it allows hover-sort on board itself, not just items
      if (monitor.isOver({ shallow: true }) && dragged.groupIndex !== groupIndex) {
        moveDraggable({
          groupIndex,
          index: group.startIndex + group.count,
        })
      }
    },
    drop: (item: DraggableItem) => {
      onDrop(item)
    },
  })

  const styles = css`
    padding: 1rem;
    background-color: #eeeeee;
  `

  return (
    <div ref={ref} css={styles}>
      <h3>{group.name}</h3>
      <div>
        {items.map((item, i) => {
          const pointer = {
            groupIndex,
            index: group.startIndex + i,
          }

          return (
            <BoardCard
              key={item.id}
              pointer={pointer}
              onDrop={onDrop}
              moveDraggable={moveDraggable}
              getDraggable={getDraggable}
              {...rest}
            >
              {onRenderItem(item)}
            </BoardCard>
          )
        })}
      </div>
    </div>
  )
}
