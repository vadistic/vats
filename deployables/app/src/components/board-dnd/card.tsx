import React from 'react'
import { __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__ } from 'react-dnd'
import { DarggableType, DraggableItem, DraggablePointer, DraggableProps } from './board'
import { BoardCardBase } from './styles'

const { useDrag, useDrop } = __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__

export interface BoardCardProps extends DraggableProps {
  pointer: DraggablePointer
}

export const BoardCard: React.FC<BoardCardProps> = ({
  pointer,
  moveDraggable,
  getDraggable,
  onDragStart,
  children,
}) => {
  const [{ isDragging }, ref] = useDrag({
    item: { type: DarggableType.CARD, pointer },
    begin: monitor => {
      onDragStart(pointer)

      return undefined
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  useDrop({
    ref,
    accept: DarggableType.CARD,
    canDrop: () => false,
    hover({ pointer: current }: DraggableItem, monitor) {
      const dragged = getDraggable(current)
      if (monitor.isOver({ shallow: true }) && dragged.index !== pointer.index) {
        moveDraggable(pointer)
      }
    },
  })

  return (
    <BoardCardBase componentRef={ref} isDragging={isDragging}>
      {children}
    </BoardCardBase>
  )
}
