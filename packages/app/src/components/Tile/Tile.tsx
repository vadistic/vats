import * as React from 'react'

import { Check } from 'office-ui-fabric-react/lib/Check'
import { ISelection, SELECTION_CHANGE } from 'office-ui-fabric-react/lib/Selection'
import {
  BaseComponent,
  classNamesFunction,
  getId,
  styled,
} from 'office-ui-fabric-react/lib/Utilities'

import { getStyles } from './Tile.styles'
import { ITileProps, ITileStyleProps, ITileStyles, TileSize } from './Tile.types'

const getClassNames = classNamesFunction<ITileStyleProps, ITileStyles>()

export interface ITileState {
  isSelected?: boolean
  isModal?: boolean
  selection?: ISelection
  selectionIndex?: number
}

/**
 * A tile provides a frame for a potentially-selectable item.
 */
export class TileBase extends BaseComponent<ITileProps, ITileState> {
  private _nameId: string
  private _labelId: string
  private _descriptionId: string

  // tslint:disable-next-line:no-any
  constructor(props: ITileProps, context: any) {
    super(props, context)

    this._nameId = getId('Tile-name')
    this._labelId = getId('Tile-label')
    this._descriptionId = getId('Tile-description')

    const { selectionIndex = -1, selection } = props

    const isSelected =
      !!selection && selectionIndex > -1 && selection.isIndexSelected(selectionIndex)
    const isModal = !!selection && !!selection.isModal && selection.isModal()

    this.state = {
      isSelected,
      isModal,
      selection,
      selectionIndex,
    }
  }

  public static getDerivedStateFromProps(nextProps: ITileProps, prevState: ITileState) {
    const { selection: prevSelection, selectionIndex: prevSelectionIndex } = prevState

    const { selection, selectionIndex = -1 } = nextProps

    if (prevSelection !== selection || prevSelectionIndex !== selectionIndex) {
      const isSelected =
        !!selection && selectionIndex > -1 && selection.isIndexSelected(selectionIndex)
      const isModal = !!selection && selection.isModal && selection.isModal()

      return {
        isSelected,
        isModal,
        selection,
        selectionIndex,
      }
    } else {
      return null
    }
  }

  public componentDidMount(): void {
    const { selection } = this.props

    if (selection) {
      this._events.on(selection, SELECTION_CHANGE, this._onSelectionChange)
    }
  }

  public componentDidUpdate(previousProps: ITileProps): void {
    const { selection } = this.props

    const { selection: previousSelection } = previousProps

    if (selection !== previousSelection) {
      if (previousSelection) {
        this._events.off(previousSelection)
      }

      if (selection) {
        this._events.on(selection, SELECTION_CHANGE, this._onSelectionChange)
      }
    }
  }

  public render(): JSX.Element {
    const {
      children,
      selectionIndex = -1,
      invokeSelection = false,
      selection,
      background,
      showBackgroundFrame = false,
      hideBackground = false,
      componentRef,
      className,
      tileSize = 'normal',
      contentSize,
      ariaLabel,
      descriptionAriaLabel,
      styles,
      theme,
      ...divProps
    } = this.props

    const classNames = getClassNames(styles, { theme: theme!, className })

    const { isSelected = false, isModal = false } = this.state

    const isSelectable = !!selection && selectionIndex > -1
    const isInvokable = !!invokeSelection && !isModal

    return (
      <div
        aria-selected={isSelected}
        {...divProps}
        aria-labelledby={ariaLabel ? this._labelId : this._nameId}
        aria-describedby={this._descriptionId}
        className={classNames.root}
        /*
        className={css('ms-Tile', className, TileStyles.tile, {
          [`ms-Tile--isSmall ${TileStyles.isSmall}`]: tileSize === 'small',
          [`ms-Tile--isLarge ${TileStyles.isLarge}`]: tileSize === 'large',
          [`ms-Tile--hasBackgroundFrame ${TileStyles.hasBackgroundFrame}`]: showBackgroundFrame,
          [`ms-Tile--hasForegroundFrame ${TileStyles.hasForegroundFrame}`]: showForegroundFrame,
          [`ms-Tile--isSelected ${TileStyles.selected} ${SignalStyles.selected}`]: isSelected,
          [`ms-Tile--isSelectable ${TileStyles.selectable}`]: isSelectable,
          [`ms-Tile--hasBackground ${TileStyles.hasBackground}`]: !!background,
          [SignalStyles.dark]: !!background && !hideBackground,
          [`ms-Tile--showBackground ${TileStyles.showBackground}`]: !hideBackground,
          [`ms-Tile--invokable ${TileStyles.invokable}`]: isInvokable,
          [`ms-Tile--uninvokable ${TileStyles.uninvokable}`]: !isInvokable,
          [`ms-Tile--isDisabled ${TileStyles.disabled}`]: !isSelectable && !isInvokable,
          [`ms-Tile--showCheck ${TileStyles.showCheck}`]: isModal,
        })}
        */
        data-is-focusable={true}
        data-is-sub-focuszone={true}
        data-disable-click-on-enter={true}
        data-selection-index={selectionIndex > -1 ? selectionIndex : undefined}
        data-selection-invoke={isInvokable && selectionIndex > -1 ? true : undefined}
      >
        {isSelectable
          ? this._onRenderCheck({
              isSelected,
            })
          : null}

        {children}
      </div>
    )
  }

  private _onRenderCheck({ isSelected }: { isSelected: boolean }): JSX.Element {
    const { toggleSelectionAriaLabel } = this.props

    return (
      <span
        role="checkbox"
        aria-label={toggleSelectionAriaLabel}
        /*
        className={css('ms-Tile-check', TileStyles.check, CheckStyles.checkHost, {
          [CheckStyles.hostShowCheck]: this.state.isModal,
        })}
        */

        data-selection-toggle={true}
        aria-checked={isSelected}
      >
        <Check checked={isSelected} />
      </span>
    )
  }

  private _onSelectionChange = (): void => {
    const { selection, selectionIndex = -1 } = this.props

    const isSelected =
      selectionIndex > -1 && !!selection && selection.isIndexSelected(selectionIndex)
    const isModal = !!selection && !!selection.isModal && selection.isModal()

    this.setState({
      isSelected,
      isModal,
      selection,
      selectionIndex,
    })
  }
}

export const Tile = styled<ITileProps, ITileStyleProps, ITileStyles>(
  TileBase,
  getStyles,
  undefined,
  {
    scope: 'Tile',
  }
)
