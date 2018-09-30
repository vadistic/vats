import * as React from 'react'

import {
  BaseComponent,
  classNamesFunction,
  customizable,
  styled,
} from 'office-ui-fabric-react/lib/Utilities'

import { getStyles } from './Box.styles'
import { IBoxProps, IBoxStyleProps, IBoxStyles } from './Box.types'

const getClassNames = classNamesFunction<IBoxStyleProps, IBoxStyles>()

export interface IBoxState {}

export class BoxBase extends BaseComponent<IBoxProps, IBoxState> {
  constructor(props: IBoxProps) {
    super(props)
  }

  public render(): JSX.Element {
    const { as: component, className, styles, theme, children, innerRef, ...rest } = this.props

    const classNames = getClassNames(styles, { theme: theme!, className })

    return React.createElement(component || 'div', {
      className: classNames.root,
      ref: innerRef,
      children,
      ...rest,
    })
  }
}

export const Box = styled<IBoxProps, IBoxStyleProps, IBoxStyles>(BoxBase, getStyles, undefined, {
  scope: 'Box',
})
