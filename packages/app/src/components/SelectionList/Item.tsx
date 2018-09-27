import { css } from 'emotion'
import * as React from 'react'

import { Check } from 'office-ui-fabric-react/lib/Check'
import {
  IObjectWithKey,
  ISelection,
  ISelectionOptions,
  Selection,
  SelectionMode,
  SelectionZone,
} from 'office-ui-fabric-react/lib/Selection'
import { ITheme, mergeStyleSets } from 'office-ui-fabric-react/lib/Styling'

import { Box, IBoxProps } from '../Box'

export interface ISelectionItemProps extends IBoxProps {
  selection: ISelection
  selectionKey: string
  selectionIndex: number
}

export const selectionItemStyles = ({ theme }: { theme: ITheme }) => ({
  root: css`
    position: relative;

    .checkbox {
      position: absolute;
      top: ${theme.spacing.s1};
      right: ${theme.spacing.s1};
    }
  `,
})

export class SelectionItem extends React.Component<ISelectionItemProps, {}> {
  public state = {
    wasSelected: false,
    isSelected: false,
  }

  public static getDerivedStateFromProps(nextProps, prevState) {
    const isSelected = props =>
      (props.selection.mode !== SelectionMode.none &&
        props.selection.isKeySelected(props.selectionKey)) ||
      false

    return { wasSelected: prevState.isSelected, isSelected: isSelected(nextProps) }
  }

  private _isModal = props => props.selection.isModal && props.selection.isModal()

  public render() {
    const { children, selectionIndex } = this.props
    const { isSelected, wasSelected } = this.state

    const isModal = this._isModal(this.props)

    return (
      <Box
        styles={selectionItemStyles}
        data-selection-index={selectionIndex}
        data-selection-invoke={isSelected && wasSelected}
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
  }
}
