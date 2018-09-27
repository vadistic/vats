import { css } from 'emotion'
import * as R from 'ramda'
import * as React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { Check } from 'office-ui-fabric-react/lib/Check'
import { ITheme } from 'office-ui-fabric-react/lib/Styling'

import { Box } from '../Box'

export interface IDraggableItemProps {
  isSelected: boolean
  isModal: boolean
  selectionKey: string
  selectionIndex: number

  children: React.ReactNode
}

export const draggableItemStyles = ({ theme }: { theme: ITheme }) => ({
  root: css`
    position: relative;

    .checkbox {
      position: absolute;
      top: ${theme.spacing.s1};
      right: ${theme.spacing.s1};
    }
  `,
})

export class DraggableItem extends React.Component<IDraggableItemProps, {}> {
  private _wasSelected = false
  private _wasSelectedTick = false

  public componentDidUpdate(prevProps) {
    this._wasSelected = this._wasSelectedTick
    this._wasSelectedTick = this.props.isSelected

    // TODO: DELETE
    console.log('Item updated', this.props.selectionIndex)
    Object.entries(this.props).forEach(
      ([key, val]) => prevProps[key] !== val && console.log(`Prop '${key}' changed`)
    )
  }

  public shouldComponentUpdate(nextProps: IDraggableItemProps) {
    const { children: nextChildren, ...next } = nextProps
    const { children: currentChildren, ...current } = this.props

    return !R.equals(next, current)
  }

  public render() {
    const { children, selectionKey, selectionIndex, isSelected, isModal } = this.props

    return (
      <Draggable draggableId={selectionKey} key={selectionKey} index={selectionIndex}>
        {(provided, snapshot) => {
          return (
            <Box
              innerRef={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              styles={draggableItemStyles}
              data-selection-index={selectionIndex}
              data-selection-invoke={isSelected && this._wasSelected}
              data-selection-toggle={false}
              data-is-focusable={true}
            >
              {isSelected && (
                <div className="checkbox" data-selection-toggle={true}>
                  <Check checked={isSelected} />
                </div>
              )}
              {children}
            </Box>
          )
        }}
      </Draggable>
    )
  }
}
