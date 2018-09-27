import * as React from 'react'

import { ISelection } from 'office-ui-fabric-react/lib/Selection'
import { IStyle, ITheme } from 'office-ui-fabric-react/lib/Styling'
import {
  IBaseProps,
  IRefObject,
  ISize,
  IStyleFunctionOrObject,
} from 'office-ui-fabric-react/lib/Utilities'

export enum TileSize {
  compact,
  normal,
}

export interface ITileProps extends IBaseProps, React.HTMLAttributes<HTMLDivElement> {
  /**
   * The intended dimensions for the Tile.
   *
   */
  contentSize?: ISize
  /**
   * The breakpoint size for the Tile.
   *
   */
  tileSize?: TileSize
  /**
   * Index of the item in the selection controller.
   *
   */
  selectionIndex?: number
  /**
   * Selection controller for the item rendered in the tile.
   *
   */
  selection?: ISelection
  /**
   * Whether or not the item should be invoked if clicked.
   *
   */
  invokeSelection?: boolean

  /**
   * Content to render as the full-size background of the tile.
   *
   */
  background?: React.ReactNode | React.ReactNode[]
  /**
   * Whether or not to frame the background.
   *
   */
  showBackgroundFrame?: boolean
  /**
   * Whether or not to hide the background, regardless of whether it is present.
   * Use this to control when the background "fades in" if the content needs to be loaded.
   *
   */
  hideBackground?: boolean

  /**
   * The accessible label representing the tile and its content.
   *
   */
  ariaLabel?: string
  /**
   * The accessible label providing description or instructions for the tile.
   *
   */
  descriptionAriaLabel?: string
  /**
   * The accessible label for the selection checkbox.
   *
   */
  toggleSelectionAriaLabel?: string
  /**
   * The accessible label for the selection checkbox.
   *
   */
  as?: keyof React.ReactHTML | React.ComponentType<any>

  /* REQUIRED */
  className?: string
  componentRef?: IRefObject<HTMLDivElement>
  styles?: IStyleFunctionOrObject<ITileStyleProps, ITileStyles>
  theme?: ITheme
}

export interface ITileStyleProps {
  /**
   * The intended dimensions for the Tile.
   *
   */
  contentSize?: ISize
  /**
   * The breakpoint size for the Tile.
   *
   */
  tileSize?: TileSize
  /**
   * Selection controller for the item rendered in the tile.
   *
   */
  selection?: ISelection

  /**
   * Whether or not to frame the background.
   *
   */
  showBackgroundFrame?: boolean
  /**
   * Whether or not to hide the background, regardless of whether it is present.
   * Use this to control when the background "fades in" if the content needs to be loaded.
   *
   */
  hideBackground?: boolean

  /* REQUIRED */
  theme: ITheme
  className?: string
}

export interface ITileStyles {
  root: IStyle
}
