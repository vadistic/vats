import * as React from 'react'

import { ISelection } from 'office-ui-fabric-react/lib/Selection'
import { css as cx } from 'office-ui-fabric-react/lib/Utilities'

import { DraggableItem } from './Item'
import { TObjectWithId } from './types'

export interface IDraggableListProps extends React.AllHTMLAttributes<HTMLDivElement> {
  innerRef?: React.Ref<HTMLDivElement>
  className?: string
  startIndex?: number
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
    console.log('DraggableList updated')
  }

  public render() {
    const { innerRef, className, startIndex } = this.props
    return (
      <div ref={innerRef} className={cx('DraggableList', className)}>
        {this.props.items.map((item, index) => {
          const isSelected = this.props.selection.isKeySelected(item.id)
          const isModal = this.props.selection.isModal ? this.props.selection.isModal() : false
          return (
            <DraggableItem
              key={item.id}
              selectionIndex={startIndex || 0 + index}
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
