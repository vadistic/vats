import { IGroup } from 'office-ui-fabric-react'
import React, { useMemo, useRef, useState } from 'react'
import { DropResult } from 'smooth-dnd'
import { BoardProps } from './board'

export interface BoardContextProps extends BoardProps {}

export interface BoardCardPointer {
  index: number
  localIndex: number
  groupIndex: number
}

export interface BoardEventDetails extends BoardCardPointer {
  group: IGroup
}

export interface BoardOnDropProps {
  source: BoardEventDetails
  target: BoardEventDetails
}

export interface BoardOnDragProps {
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
  // just for forceRefresh
  const [, setSelectedIndicies] = useState<number[]>([])

  /*
   * card focus
   */
  const focusRef = useRef<number | null>(null)
  const draggingRef = useRef<boolean>(false)

  const cardRefs = useMemo(() => items.map(() => React.createRef<HTMLDivElement>()), [
    items,
    groups,
  ])

  // !!! BUG: outdated props values in drag-drop callbacks
  // it's memoized somewhere - no idea why...

  // I'll hack it with ref-proxy
  // as a bonus - it'll allow to not update ctx fns in cards callbacks
  const groupsRef = useRef(groups)
  groupsRef.current = groups

  const itemsRef = useRef(items)
  itemsRef.current = items

  // update ref pointer onFocus
  const handleCardFocus = (pointer: BoardCardPointer) => () => {
    if (pointer.index !== focusRef.current) {
      focusRef.current = pointer.index
    }
  }

  // should happen on click outside anmd basically it?
  const clearCardFocus = () => {
    if (clearCardFocus !== null) {
      focusRef.current = null
    }
  }

  // enable focus arrow navigation
  const handleCardFocusNavigation = (pointer: BoardCardPointer) => (
    ev: React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if (ev.key === 'ArrowRight' || ev.key === 'ArrowLeft') {
      const dir = ev.key === 'ArrowRight' ? 1 : -1
      const nextGroupIndex =
        (groupsRef.current.length + pointer.groupIndex + dir) % groupsRef.current.length

      const nextLocalIndex =
        groupsRef.current[nextGroupIndex].count > pointer.localIndex
          ? pointer.localIndex
          : groupsRef.current[nextGroupIndex].count - 1

      const targetRef = cardRefs[groupsRef.current[nextGroupIndex].startIndex + nextLocalIndex]

      if (targetRef.current) {
        targetRef.current.focus()
      }
    }
  }

  /*
   * selection
   */

  /*
   * bit of an edge case
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
   * using this fn because selection is an observable and less updates is better
   */
  const ensureSelectionIsOnly = (index: number) => {
    const indicies = selection.getSelectedIndices()

    if (selection.isModal()) {
      selection.setModal(false)
    }

    if (indicies.length === 0) {
      selection.setIndexSelected(index, true, true)
      return false
    }

    if (indicies.length === 1 && indicies[0] === index) {
      return true
    }

    if (indicies.length === 2) {
      let addTarget = true

      for (const i of indicies) {
        if (i !== index) {
          selection.setIndexSelected(i, false, false)
          continue
        }

        if (i === index) {
          addTarget = false
        }
      }

      if (addTarget) {
        selection.setIndexSelected(index, true, true)
      }

      return false
    }

    selection.setAllSelected(false)
    selection.setIndexSelected(index, true, true)

    return false
  }

  // force-refresh fror selection rendering styles
  const refreshSelection = () => {
    // cleanup here maybe?

    setSelectedIndicies(selection.getSelectedIndices())
  }

  // clears selection
  const clearSelection = () => {
    let flag = false

    if (selection.isModal()) {
      selection.setModal(false)
      flag = true
    }

    if (selection.count !== 0) {
      selection.setAllSelected(false)
      flag = true
    }

    if (flag) {
      refreshSelection()
    }
  }

  // handle keyboard clicks
  const handleCardKeydownSelection = (pointer: BoardCardPointer) => (
    ev: React.KeyboardEvent<HTMLDivElement>,
  ) => {
    const isModal = selection.isModal()

    // enter modal on crtl/shift + enter
    if (!isModal && ev.key === 'Enter' && (ev.ctrlKey || ev.shiftKey)) {
      // cleanup to avoid "trailing" on anchored selection
      ensureSelectionIsOnly(pointer.index)
      selection.setModal(true)

      refreshSelection()
      return
    }

    // shift somewhere here
    if (isModal && ev.key === 'Enter' && ev.shiftKey) {
      // TODO: allow clearing
      selection.selectToIndex(pointer.index, false)

      refreshSelection()
      return
    }

    if (isModal && ev.key === 'Enter') {
      selection.toggleIndexSelected(pointer.index)

      refreshSelection()
      return
    }

    // deslect/ and clear focus pointer on esc
    if (ev.key === 'Escape') {
      clearCardFocus()
      clearSelection()
      return
    }
  }

  // handle mouse clicks (onMouseUp to separate keyboard actions)
  const handleCardClick = ({
    crtlKey,
    shiftKey,
    pointer,
  }: {
    pointer: BoardCardPointer
    crtlKey: boolean
    shiftKey: boolean
  }) => {
    if (draggingRef.current) {
      return
    }

    const isModal = selection.isModal()

    // enter modal range on shift (with some selection other than el)
    if (!isModal && shiftKey && selection.getSelectedIndices()[0] !== pointer.index) {
      selection.selectToIndex(pointer.index)
      selection.setModal(true)

      refreshSelection()
      return
    }

    // enter modal on crtl (with some selection other than el)
    if (!isModal && crtlKey && selection.getSelectedIndices()[0] !== pointer.index) {
      selection.setModal(true)
      selection.setIndexSelected(pointer.index, true, true)

      refreshSelection()
      return
    }

    // set single selection without refresh on non-modal clicks
    if (!isModal) {
      ensureSelectionIsOnly(pointer.index)

      return
    }

    // toogle range on modal + shift
    if (isModal && shiftKey) {
      selection.selectToIndex(pointer.index, true)

      if (selection.count === 1) {
        handleModalExitFocus()
      }

      refreshSelection()
      return
    }

    // toggle cards when modal (with ctrl or without)
    if (isModal) {
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
    if (draggingRef.current) {
      return
    }

    // invoke when not modal
    if (!selection.isModal() && props.onInvokeItem) {
      props.onInvokeItem(itemsRef.current[pointer.index], pointer)

      return
    }

    // exit modal, clear selection and set only one element
    if (selection.isModal()) {
      ensureSelectionIsOnly(pointer.index)

      refreshSelection()
      return
    }
  }

  /*
   * Drag & drop
   */

  const getCardPayload = (sourceGroupIndex: number) => (
    sourceLocalIndex: number,
  ): BoardCardPointer => {
    return {
      groupIndex: sourceGroupIndex,
      localIndex: sourceLocalIndex,
      index: groupsRef.current[sourceGroupIndex].startIndex + sourceLocalIndex,
    }
  }

  const handleCardDragEnd = (info: BoardDragInfo<BoardCardPointer>) => {
    // update dragging ref
    if (draggingRef.current) {
      draggingRef.current = false
    }
  }

  const handleCardDragStart = (info: BoardDragInfo<BoardCardPointer>) => {
    // update dragging ref
    if (!draggingRef.current) {
      draggingRef.current = true
    }

    // handle only callback in source
    if (info.isSource && info.payload) {
      // focus if not focused
      if (focusRef.current !== info.payload.index) {
        focusRef.current = info.payload.index
      }

      // select if not modal
      if (!selection.isModal()) {
        ensureSelectionIsOnly(info.payload.index)
      }

      // deselect all except dragged when modal & dragged element is not selected
      if (selection.isModal() && !selection.getSelectedIndices().includes(info.payload.index)) {
        ensureSelectionIsOnly(info.payload.index)

        refreshSelection()
      }

      if (props.onDragStart) {
        const source: BoardEventDetails = {
          ...info.payload,
          group: groupsRef.current[info.payload.groupIndex],
        }

        props.onDragStart({ source })
      }
    }

    return true
  }

  const handleCardDrop = (targetGroupIndex: number) => (
    result: BoardDropResult<BoardCardPointer>,
  ) => {
    if (
      // drop is called for each container/lane - handling only a target
      result.addedIndex !== null &&
      // checking if drop was not in the same place
      result.addedIndex !== result.removedIndex &&
      // undef typeguard
      result.payload
    ) {
      const sourceGroup = groupsRef.current[result.payload.groupIndex]
      const targetGroup = groupsRef.current[targetGroupIndex]

      const source: BoardEventDetails = {
        ...result.payload,
        group: sourceGroup,
      }

      const target: BoardEventDetails = {
        index: targetGroup.startIndex + result.addedIndex,
        localIndex: result.addedIndex,
        groupIndex: targetGroupIndex,
        group: targetGroup,
      }

      // adjust focus pointer
      focusRef.current =
        result.payload.groupIndex < targetGroupIndex ? target.index - 1 : target.index

      // execute cb
      props.onDrop({ source, target })
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
    focusRef,
    draggingRef,
    handleCardFocus,
    handleCardFocusNavigation,
    clearCardFocus,
    handleCardClick,
    handleCardDoubleClick,
    handleCardKeydownSelection,
    clearSelection,
    refreshSelection,
    getCardPayload,
    handleCardDragStart,
    handleCardDragEnd,
    handleCardDrop,
    handleLaneDragStart,
    handleLaneDrop,
  }
}

export const BoardContext = React.createContext<ReturnType<typeof createBoardContext>>({} as any)
