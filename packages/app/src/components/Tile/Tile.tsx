import * as React from 'react'

import {
  BaseComponent,
  classNamesFunction,
  customizable,
  styled,
} from 'office-ui-fabric-react/lib/Utilities'

import { getStyles } from './Tile.styles'
import { ITileProps, ITileStyleProps, ITileStyles } from './Tile.types'

const getClassNames = classNamesFunction<ITileStyleProps, ITileStyles>()

export interface ITileState {}

@customizable('Tile', ['theme'])
export class TileBase extends BaseComponent<ITileProps, ITileState> {
  constructor(props: ITileProps) {
    super(props)
  }

  public render(): JSX.Element {
    const { className, styles, theme, children, ...rest } = this.props

    const { background } = this.props

    const classNames = getClassNames(styles, { theme: theme!, className, background })

    return (
      <div className={classNames.root} {...rest}>
        {this.props.children}
      </div>
    )
  }
}

export const Tile = styled<ITileProps, ITileStyleProps, ITileStyles>(
  TileBase,
  getStyles,
  undefined,
  { scope: 'Tile' }
)
