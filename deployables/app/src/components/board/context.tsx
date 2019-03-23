import { IGroup } from 'office-ui-fabric-react'
import React, { useRef, useState } from 'react'
import { DropResult } from 'smooth-dnd'
import { useDerived } from '../../utils'
import { BoardProps } from './board'

export interface BoardContextProps extends BoardProps {}

export interface BoardCardPointer {
  index: number
  localIndex: number
  groupIndex: number
}

export interface BoardEventDetails extends BoardCardPointer {
  group: IGroup
  selectedIndicies: number[]
}

export interface BoardOnDropProps {
  item: any
  source: BoardEventDetails
  target: BoardEventDetails
}

export interface BoardOnDragProps {
  item: any
  source: BoardEventDetails
}

export interface BoardDropResult<P = any> extends DropResult {
  payload?: P
}

export interface BoardDragInfo<P = any> {
  isSource: boolean
  willAcceptDrop: boolean
  payload?: P
}

export const boardClassNames = {
  board: 'board-wrapper',
  lane: 'board-lane',
  card: 'board-card',
  dragging: 'dragging',
  dropping: 'dropping',
  selected: 'selected',
  modal: 'modal',
}

export const createBoardContext = (props: BoardContextProps) => {
  const { selection, groups, items } = props

  const [selectedIndicies, setSelectedIndicies] = useState<number[]>([])

  /*
   * card focus
   */
  const focus = useRef<number | undefined>(undefined)

  const cardRefs = useDerived(() => items.map(() => React.createRef<HTMLDivElement>()), [items])

  const handleCardFocus = (pointer: BoardCardPointer) => () => {
    if (pointer.index !== focus.current) {
      focus.current = pointer.index
    }
  }

  const handleCardBlur = (pointer: BoardCardPointer) => () => {
    // to not fire on focus change to avoid weird race conditions
    setTimeout(() => {
      if (pointer.index === focus.current) {
        focus.current = undefined
      }
    }, 100)
  }

  const handleCardFocusNavigation = (pointer: BoardCardPointer) => (
    ev: React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if (ev.key === 'ArrowRight' || ev.key === 'ArrowLeft') {
      const dir = ev.key === 'ArrowRight' ? 1 : -1
      const nextGroupIndex = (groups.length + pointer.groupIndex + dir) % groups.length

      const nextLocalIndex =
        groups[nextGroupIndex].count > pointer.localIndex
          ? pointer.localIndex
          : groups[nextGroupIndex].count - 1

      const targetRef = cardRefs[groups[nextGroupIndex].startIndex + nextLocalIndex]

      if (targetRef.current) {
        targetRef.current.focus()
      }
    }
  }

  /*
   * now a bit of an edge case
   * if there is modal change 2 => 1:
   * - selection should exit modal
   * - but focus shuld jump to the other element
   */
  const handleModalExitFocus = () => {
    const lastIndexStanding = selection.getSelectedIndices()[0]

    // modal clear selection :/
    selection.setModal(false)

    selection.setIndexSelected(lastIndexStanding, true, true)

    const targetRef = cardRefs[lastIndexStanding]

    if (targetRef.current) {
      targetRef.current.focus()
    }
  }

  /*
   * selection
   */

  const clearSelection = (next?: number) => {
    if (selection.count !== 0) {
      selection.setAllSelected(false)
    }

    if (selection.isModal()) {
      selection.setModal(false)
    }

    if (next) {
      selection.setIndexSelected(next, true, true)
      setSelectedIndicies([next])
      return
    }

    if (selectedIndicies.length !== 0) {
      setSelectedIndicies([])
      return
    }
  }

  const refreshSelection = () => {
    // cleanup here maybe?

    setSelectedIndicies(selection.getSelectedIndices())
  }

  const handleCardKeydownSelection = (pointer: BoardCardPointer) => (
    ev: React.KeyboardEvent<HTMLDivElement>,
  ) => {
    // enter modal on crtl/shift + enter
    if (ev.key === 'Enter' && (ev.ctrlKey || ev.shiftKey) && !selection.isModal()) {
      // cleanup to avoid "trailing"
      selection.setAllSelected(false)
      selection.setModal(true)
      selection.setIndexSelected(pointer.index, true, true)

      refreshSelection()
      return
    }

    // shift somewhere here
    if (ev.key === 'Enter' && ev.shiftKey && selection.isModal()) {
      // TODO: with clear selection
      selection.selectToIndex(pointer.index, false)

      refreshSelection()
      return
    }

    if (ev.key === 'Enter' && selection.isModal()) {
      selection.toggleIndexSelected(pointer.index)

      refreshSelection()
      return
    }

    // deselect on esc
    if (ev.key === 'Escape') {
      clearSelection()
      return
    }
  }

  const handleCardClick = ({
    crtlKey,
    shiftKey,
    pointer,
  }: {
    pointer: BoardCardPointer
    crtlKey: boolean
    shiftKey: boolean
  }) => {
    // enter modal range on shift with some selection
    if (!selection.isModal() && shiftKey && selection.count !== 0) {
      selection.setModal(true)

      selection.selectToIndex(pointer.index)

      refreshSelection()
      return
    }

    // enter modal on crtl
    if (!selection.isModal() && crtlKey) {
      selection.setModal(true)
      selection.setIndexSelected(pointer.index, true, true)

      refreshSelection()
      return
    }

    // set single selection without refresh on non-modal clicks
    if (!selection.isModal()) {
      if (selection.count !== 0) {
        selection.setAllSelected(false)
      }

      selection.setIndexSelected(pointer.index, true, true)

      return
    }

    // toggle range on modal shift
    if (shiftKey && selection.isModal()) {
      selection.selectToIndex(pointer.index, true)

      // select to index cleans modal for some reason :/
      if (!selection.isModal()) {
        selection.setModal(true)
      }

      if (selection.count === 1) {
        handleModalExitFocus()
      }

      refreshSelection()
      return
    }

    // toggle cards when modal (with ctrl or without)
    if (selection.isModal()) {
      selection.toggleIndexSelected(pointer.index)

      if (selection.count === 1) {
        handleModalExitFocus()
      }

      refreshSelection()
      return
    }
  }

  const handleCardDoubleClick = ({
    crtlKey,
    shiftKey,
    pointer,
  }: {
    pointer: BoardCardPointer
    crtlKey: boolean
    shiftKey: boolean
  }) => {
    // invoke when not modal
    if (!selection.isModal() && props.onInvokeItem) {
      props.onInvokeItem(items[pointer.index], pointer)
      return
    }

    // exit modal, clear selection and set only one element
    if (selection.isModal()) {
      clearSelection(pointer.index)
    }
  }

  /*
   * Drag & drop
   */
  // !!! BUG: outdated props values here in drag-drop callbacks
  // it's memoized somewhere - no idea why...

  // I'll hack it with ref-proxy
  const groupsRef = useRef(groups)
  groupsRef.current = groups

  // card payload is a source

  const getCardPayload = (sourceGroupIndex: number) => (
    sourceLocalIndex: number,
  ): BoardCardPointer => {
    return {
      groupIndex: sourceGroupIndex,
      localIndex: sourceLocalIndex,
      index: groupsRef.current[sourceGroupIndex].startIndex + sourceGroupIndex,
    }
  }

  const handleCardDragStart = (info: BoardDragInfo<BoardCardPointer>) => {
    // handle only callback in source
    if (info.isSource && info.payload) {
      // !!! DRAGING UNSELECTED CARD BASICALLY ADDS IT TO SELECTION
      // If selection would be on crtl+click not bare click:
      // - here, I would clear other selected cards on drag of previously unselected card

      if (props.onDragStart) {
        const sourceGroup = groupsRef.current[info.payload.groupIndex]

        const source: BoardEventDetails = {
          groupIndex: info.payload.groupIndex,
          group: sourceGroup,
          index: sourceGroup.startIndex + info.payload.localIndex,
          localIndex: info.payload.localIndex,
          selectedIndicies: selection.getSelectedIndices(),
        }

        props.onDragStart({ item: items[source.index], source })
      }
    }

    return true
  }

  const handleCardDrop = (targetGroupIndex: number) => (
    result: BoardDropResult<BoardCardPointer>,
  ) => {
    if (
      // drops is called for each container/lane - handling only a target
      result.addedIndex !== null &&
      // checking if drop was not in the same place
      result.addedIndex !== result.removedIndex &&
      // typeguard
      result.payload
    ) {
      const sourceGroup = groupsRef.current[result.payload.groupIndex]

      const source: BoardEventDetails = {
        index: sourceGroup.startIndex + result.payload.localIndex,
        localIndex: result.payload.localIndex,
        groupIndex: result.payload.groupIndex,
        group: sourceGroup,
        selectedIndicies: selection.getSelectedIndices(),
      }

      const targetGroup = groupsRef.current[targetGroupIndex]

      const target: BoardEventDetails = {
        index: targetGroup.startIndex + result.addedIndex,
        localIndex: result.addedIndex,
        groupIndex: targetGroupIndex,
        group: targetGroup,
        selectedIndicies: [],
      }

      // adjust for shuffle
      if (source.groupIndex < target.groupIndex) {
        target.index += -1
        target.group.startIndex += -1
      }

      // adjust selection
      if (selection.getSelectedCount() === 1) {
        selection.setIndexSelected(source.index, false, false)
        selection.setIndexSelected(target.index, true, false)
      }

      // and complex selection case
      if (selection.getSelectedCount() > 1) {
        const indicies = selection.getSelectedIndices()
        selection.setAllSelected(false)
        selection.setModal(true)

        selection.setIndexSelected(target.index, true, true)

        indicies.forEach(i => {
          // forward direction shuffle
          if (source.index < i && i <= target.index) {
            selection.setIndexSelected(i - 1, true, false)
            return
          }

          // and backward
          if (target.index <= i && i < source.index) {
            selection.setIndexSelected(i + 1, true, false)
            return
          }

          if (i !== source.index) {
            selection.setIndexSelected(i, true, false)
            return
          }
        })
      }

      props.onDrop({ item: items[source.index], source, target })
    }
  }

  const handleLaneDragStart = (info: BoardDragInfo<any>) => {
    if (info.willAcceptDrop) {
      console.log('handleLaneDragStart', info)
    }

    return true
  }

  const handleLaneDrop = (result: BoardDropResult<any>) => {
    if (result.addedIndex !== result.removedIndex) {
      console.log('handleLaneDrop', result)
    }
  }

  return {
    ...props,
    cardRefs,
    handleCardFocus,
    handleCardFocusNavigation,
    handleCardBlur,
    handleCardClick,
    handleCardDoubleClick,
    handleCardKeydownSelection,
    clearSelection,
    refreshSelection,
    getCardPayload,
    handleCardDragStart,
    handleCardDrop,
    handleLaneDragStart,
    handleLaneDrop,
  }
}

export const BoardContext = React.createContext<ReturnType<typeof createBoardContext>>({} as any)
