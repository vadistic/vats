import { css } from '@emotion/core'
import { moveElement } from '@vats/utils'
import { produce } from 'immer'
import { IGroup } from 'office-ui-fabric-react'
import React, { useMemo, useState } from 'react'
import { BoardGroup } from './group'

export interface DraggablePointer {
  groupIndex: number
  index: number
}

export interface DraggableValue {
  pointer: DraggablePointer
  group: IGroup
  groups: IGroup[]
  items: any[]
}

export enum DarggableType {
  CARD = 'CARD',
}

export interface DraggableItem {
  pointer: DraggablePointer
  type: DarggableType
}

export interface DraggableVector {
  from: DraggablePointer
  to: DraggablePointer
}

export interface DraggableProps {
  moveDraggable: (to: DraggablePointer) => void
  getDraggable: (pointer: DraggablePointer) => DraggablePointer
  onDragStart: (pointer: DraggablePointer) => void
  onDrop: (item: DraggableItem) => void
}

export interface BoardProps {
  groups: IGroup[]
  items: any[]
  onRenderItem: (item: any) => JSX.Element
  onDragStart?: (item: any, source: DraggableValue) => void
  onDrop: (item: any, target: DraggableValue, source: DraggableValue) => void
}

export const Board = ({ groups, items, onRenderItem, onDragStart, onDrop }: BoardProps) => {
  const [vector, setVector] = useState<DraggableVector | undefined>(undefined)

  useMemo(() => {
    console.log('reset vector')
    setVector(undefined)
  }, [items, groups])

  const adjutedItems = vector ? moveElement(items, vector.from.index, vector.to.index) : items

  const adjustedGroups = useMemo(() => {
    if (!vector) {
      return groups
    }
    const { from, to } = vector

    const min = Math.min(from.groupIndex, to.groupIndex)
    const max = Math.max(from.groupIndex, to.groupIndex)

    return produce(groups, draftGroups => {
      if (to.groupIndex !== from.groupIndex) {
        draftGroups[to.groupIndex].count = draftGroups[to.groupIndex].count + 1
        draftGroups[from.groupIndex].count = draftGroups[from.groupIndex].count - 1

        draftGroups.forEach((group, groupIndex) => {
          if (min < groupIndex && groupIndex <= max) {
            draftGroups[groupIndex].startIndex += from.groupIndex < to.groupIndex ? -1 : 1
          }
        })
      }
    })
  }, [items, groups, vector])

  const moveDraggable = (to: DraggablePointer) => {
    if (vector) {
      setVector({
        from: vector.from,
        to,
      })
    }
  }

  const getDraggable = (pointer: DraggablePointer) => {
    if (vector && pointer.index === vector.from.index) {
      return vector.to
    }

    return pointer
  }

  const handleDrop = () => {
    if (!vector) {
      return
    }

    if (vector.from.index === vector.to.index) {
      return
    }

    if (onDrop) {
      onDrop(
        items[vector.from.index],
        {
          group: groups[vector.to.groupIndex],
          groups: adjustedGroups,
          items: adjutedItems,
          pointer: vector.to,
        },
        {
          group: groups[vector.from.groupIndex],
          groups,
          items,
          pointer: vector.from,
        },
      )
    }
    // not reseting vector here to prevent jumping if onDrop is async
  }

  const handleDragStart = (pointer: DraggablePointer) => {
    if (onDragStart) {
      onDragStart(items[pointer.index], {
        group: groups[pointer.groupIndex],
        groups,
        items,
        pointer,
      })
    }

    setVector({
      from: pointer,
      to: pointer,
    })
  }

  const styles = css`
    border: 1px dashed gray;
    padding: 1rem;
    background-color: lightgray;
    display: flex;
  `

  return (
    <div>
      Board
      <div css={styles}>
        {adjustedGroups.map((group, i) => (
          <BoardGroup
            group={group}
            groupIndex={i}
            key={group.key}
            items={adjutedItems.slice(group.startIndex, group.startIndex + group.count)}
            onRenderItem={onRenderItem}
            onDrop={handleDrop}
            moveDraggable={moveDraggable}
            getDraggable={getDraggable}
            onDragStart={handleDragStart}
            vector={vector}
          />
        ))}
      </div>
    </div>
  )
}
