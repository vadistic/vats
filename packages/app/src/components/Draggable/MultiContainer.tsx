import * as React from 'react'
import {
  DragDropContext,
  DragDropContextProps,
  DragUpdate,
  Droppable,
  DropResult,
  HookProvided,
} from 'react-beautiful-dnd'

import { FocusZone } from 'office-ui-fabric-react/lib/FocusZone'
import { GroupedList } from 'office-ui-fabric-react/lib/GroupedList'
import {
  IObjectWithKey,
  ISelection,
  Selection,
  SelectionMode,
  SelectionZone,
} from 'office-ui-fabric-react/lib/Selection'
import { css as cx } from 'office-ui-fabric-react/lib/Utilities'

import { DraggableList } from './List'
import { TObjectWithId } from './types'

export interface IDraggableContainerRenderProps {
  lists?: Array<React.ReactElement<any>>
  selection?: ISelection
}

export type TGroup<T> = Array<TObjectWithId<T>>

export interface IDragabbleContainerProps<T = any> extends DragDropContextProps {
  children: (props: IDraggableContainerRenderProps) => React.ReactElement<any>
  className?: string
  groups?: Array<TGroup<T>>
  focusInitialIndex?: number
  onRenderCell: (item?: TObjectWithId<T>, index?: number) => React.ReactElement<any>
  onItemInvoked?: (item?: IObjectWithKey, index?: number, ev?: Event) => void
  onItemContextMenu?: (item?: any, index?: number, ev?: Event) => void | boolean
}

export interface IDraggableContainerState {}

export class DraggableContainer<T extends TObjectWithId<any>> extends React.Component<
  IDragabbleContainerProps<T>,
  IDraggableContainerState
> {
  constructor(props) {
    super(props)

    this.selection = new Selection({
      onSelectionChanged: this._onSelectionChanged,
      selectionMode: SelectionMode.multiple,
      getKey: (item: any, index) => item.id || item.key || index,
    })

    this.selection.setItems(this.props.items, true)
  }

  private _listRef = React.createRef<DraggableList<T>>()
  private _listsRef: Array<React.Ref<DraggableList<T>>>

  private _isMounted = false
  private _isDragging = false
  private _selectionPreviousIndices: number[] = []
  private _focusInitialIndex = this.props.focusInitialIndex

  public selection: ISelection

  public componentDidMount(): void {
    this._isMounted = true
  }

  // TODO: DELETE
  public componentDidUpdate(prevProps) {
    console.log('DraggableMultiContainer updated')
  }

  public Lists =
    this.props.groups &&
    this.props.groups.map((group, index) => {
      const { key, name, startIndex, count, isDropEnabled = true } = group
      const items = this.props.items.slice(startIndex, startIndex + count)

      this._listsRef[index] = React.createRef()

      return (
        <Droppable key={key || name} droppableId={key || name} isDropDisabled={!isDropEnabled}>
          {(provided, snapshot) => (
            <DraggableList
              startIndex={startIndex}
              ref={this._listsRef[index]}
              innerRef={provided.innerRef}
              selection={this.selection}
              items={items}
              onRenderCell={this.props.onRenderCell}
            />
          )}
        </Droppable>
      )
    })

  // public Lists =

  public render() {
    const {
      onItemInvoked,
      onItemContextMenu,
      children,
      onDragEnd,
      onDragStart,
      onDragUpdate,
      className,
    } = this.props

    return (
      <SelectionZone
        selection={this.selection}
        selectionMode={this.selection.mode}
        // TODO: Allow invoking somehow
        onItemInvoked={onItemInvoked}
        selectionPreservedOnEmptyClick={false}
        isSelectedOnFocus={false}
      >
        <FocusZone className={cx('DraggableContainer', className)}>
          <DragDropContext
            onDragStart={onDragEnd}
            onDragUpdate={onDragUpdate}
            onDragEnd={onDragEnd}
          >
            {children({ list: this.List, lists: this.Lists, selection: this.selection })}
          </DragDropContext>
        </FocusZone>
      </SelectionZone>
    )
  }

  private _onSelectionChanged = () => {
    if (this._isMounted) {
      this.selection.setModal && this.selection.setModal(this.selection.count > 1)
      this._listRef.current && this._listRef.current.forceUpdate()
    }
  }
}
