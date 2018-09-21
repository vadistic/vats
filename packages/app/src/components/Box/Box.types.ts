import * as React from 'react'

import { IStyle, ITheme } from 'office-ui-fabric-react/lib/Styling'
import { IRefObject, IStyleFunctionOrObject } from 'office-ui-fabric-react/lib/Utilities'

export interface IBox {}

export interface IBoxProps extends React.Props<HTMLDivElement> {
  as?: keyof React.ReactHTML | React.ComponentType<any>
  /* REQUIRED */
  className?: string
  componentRef?: IRefObject<HTMLDivElement>
  styles?: IStyleFunctionOrObject<IBoxStyleProps, IBoxStyles>
  theme?: ITheme
}

export interface IBoxStyleProps {
  /* REQUIRED */
  theme: ITheme
  className?: string
}

export interface IBoxStyles {
  root: IStyle
}
