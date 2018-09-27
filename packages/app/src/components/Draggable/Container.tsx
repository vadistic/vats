import { css } from 'emotion'
import * as R from 'ramda'
import * as React from 'react'
import {
  DragDropContext,
  DragUpdate,
  Droppable,
  DropResult,
  HookProvided,
} from 'react-beautiful-dnd'

import { FocusZone } from 'office-ui-fabric-react/lib/FocusZone'
import { List } from 'office-ui-fabric-react/lib/List'
import {
  IObjectWithKey,
  ISelection,
  Selection,
  SelectionMode,
  SelectionZone,
} from 'office-ui-fabric-react/lib/Selection'
import { BaseComponent, IBaseProps, IDisposable } from 'office-ui-fabric-react/lib/Utilities'

import { DraggableItem } from './Item'
import { DraggableList } from './List'
import { TObjectWithId } from './types'

export interface IDraggableContainerRenderProps {
  list: React.ReactElement<any>
  selection?: ISelection
}

export interface IDragabbleContainerProps<T = any> {
  children: (props: IDraggableContainerRenderProps) => React.ReactElement<any>
  items: Array<TObjectWithId<T>>
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
    console.log('DraggableList updated')
  }

  public list = (
    <Droppable droppableId={'0'}>
      {(provided, snapshot) => (
        <DraggableList
          ref={this._listRef}
          innerRef={provided.innerRef}
          selection={this.selection}
          items={this.props.items}
          onRenderCell={this.props.onRenderCell}
        />
      )}
    </Droppable>
  )

  public render() {
    const { items, onRenderCell, onItemInvoked, onItemContextMenu, children } = this.props

    return (
      <SelectionZone
        selection={this.selection}
        selectionMode={this.selection.mode}
        onItemInvoked={onItemInvoked}
        selectionPreservedOnEmptyClick={false}
        isSelectedOnFocus={false}
      >
        <FocusZone>
          <DragDropContext
            onDragStart={this._onDragStart}
            onDragUpdate={this._onDragUpdate}
            onDragEnd={this._onDragEnd}
          >
            {children({ list: this.list, selection: this.selection })}
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

  private _onDragStart = (initial: DragUpdate, provided: HookProvided): void => {
    console.log('_onDragStart', initial, provided)
  }
  private _onDragUpdate = (initial: DragUpdate, provided: HookProvided): void => {
    console.log('_onDragUpdate', initial, provided)
  }
  private _onDragEnd = (result: DropResult, provided: HookProvided): void => {
    console.log('_onDragEnd', result, provided)
  }
}
