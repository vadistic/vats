import { css } from 'emotion'
import * as R from 'ramda'
import * as React from 'react'

import { FocusZone } from 'office-ui-fabric-react/lib/FocusZone'
import { IListProps, List } from 'office-ui-fabric-react/lib/List'
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection'
import {
  IObjectWithKey,
  ISelection,
  Selection,
  SelectionMode,
  SelectionZone,
} from 'office-ui-fabric-react/lib/Selection'

import { TObjectWithId } from '../Draggable/types'
import { SelectionItem } from './Item'

export interface ISelectionListRenderProps {
  renderSelectionList: () => JSX.Element

  selection?: ISelection
}

export interface ISelectionListProps<T = any> {
  children: (props: ISelectionListRenderProps) => JSX.Element
  items: T[]
  onRenderCell: (item?: TObjectWithId<T>, index?: number, isScrolling?: boolean) => React.ReactNode
  onItemInvoked?: (item?: IObjectWithKey, index?: number, ev?: Event) => void
  onItemContextMenu?: (item?: any, index?: number, ev?: Event) => void | boolean
}

export interface ISelectionListState {}

export class SelectionList extends React.PureComponent<ISelectionListProps, ISelectionListState> {
  private _updateChildren = (indicies: number[]) => {
    indicies.forEach(index => {
      const ref = this._itemsRefs[index]
      ref && ref.current && ref.current.forceUpdate()
    })
  }

  private _onSelectionChanged = async () => {
    // this._selection.setModal(this._selection.count > 1)
    this.selection.setModal(true)

    // forceUpdate only selected / deselected child items
    const selectionIndicies = this.selection.getSelectedIndices()

    const added = R.difference(this._selectionPrevIndices, selectionIndicies)
    const removed = R.difference(selectionIndicies, this._selectionPrevIndices)

    if (this._isMounted) {
      this._updateChildren([...added, ...removed])
      this._selectionPrevIndices = selectionIndicies
    }
  }

  constructor(props) {
    super(props)
    this.selection.setItems(this.props.items)

    this._itemsRefs = this.props.items.map((item, index) => React.createRef<SelectionItem>())
  }

  private _isMounted = false
  private _itemsRefs: Array<React.RefObject<SelectionItem>>
  private _selectionPrevIndices: number[] = []

  public selection = new Selection({
    onSelectionChanged: this._onSelectionChanged,
    selectionMode: SelectionMode.multiple,
    getKey: (item: any, index) => item.id || item.key || index,
  })

  public componentDidMount(): void {
    this._isMounted = true
  }

  // DIAGNOSTIC TODO: DELETE
  public componentDidUpdate(prevProps) {
    Object.keys(this.props).forEach(key => {
      if (this.props[key] !== prevProps[key]) {
        console.log('List updated', key, 'changed from', prevProps[key], 'to', this.props[key])
      }
    })
  }

  public renderSelectionList = () => {
    const { items, onRenderCell, onItemInvoked, onItemContextMenu, children } = this.props

    return (
      <MarqueeSelection
        selection={this.selection}
        isEnabled={this.selection.mode === SelectionMode.multiple}
      >
        <SelectionZone
          selection={this.selection}
          selectionMode={this.selection.mode}
          onItemInvoked={onItemInvoked}
          selectionPreservedOnEmptyClick={false}
          isSelectedOnFocus={false}
        >
          <FocusZone>
            <List
              items={items}
              onRenderCell={(item: any, index: number, isScrolling: boolean) => (
                <SelectionItem
                  key={item.id}
                  selectionIndex={index}
                  selectionKey={item.id}
                  selection={this.selection}
                  ref={this._itemsRefs[index]}
                >
                  {this.props.onRenderCell(item, index, isScrolling)}
                </SelectionItem>
              )}
            />
          </FocusZone>
        </SelectionZone>
      </MarqueeSelection>
    )
  }

  public render() {
    const { children } = this.props

    return children({
      renderSelectionList: this.renderSelectionList,
      selection: this.selection,
    })
  }
}
