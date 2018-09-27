import * as React from 'react'

import { ISelection } from 'office-ui-fabric-react/lib/Selection'

import { DraggableItem } from './Item'
import { TObjectWithId } from './types'

export interface IDraggableListProps extends React.AllHTMLAttributes<HTMLDivElement> {
  innerRef?: React.Ref<HTMLDivElement>
  className?: string
  items: Array<TObjectWithId<any>>
  onRenderCell: (item?: TObjectWithId<any>, index?: number) => React.ReactElement<any>
  selection: ISelection
}

export class DraggableList<T> extends React.PureComponent<IDraggableListProps, {}> {
  private _childrenCache = new WeakMap()

  private _onRenderCell = (item, index) => {
    if (this._childrenCache.has(item.id)) {
      return this._childrenCache.get(item.id)
    }

    const component = this.props.onRenderCell(item, index)

    this._childrenCache.set(component, item.id)

    return component
  }

  public componentDidUpdate() {
    console.log('FastList updated')
  }

  public render() {
    const { innerRef } = this.props
    return (
      <div ref={innerRef}>
        {this.props.items.map((item, index) => {
          const isSelected = this.props.selection.isKeySelected(item.id)
          const isModal = this.props.selection.isModal ? this.props.selection.isModal() : false
          return (
            <DraggableItem
              key={item.id}
              selectionIndex={index}
              selectionKey={item.id}
              isSelected={isSelected}
              isModal={isModal}
            >
              {this._onRenderCell(item, index)}
            </DraggableItem>
          )
        })}
      </div>
    )
  }
}
