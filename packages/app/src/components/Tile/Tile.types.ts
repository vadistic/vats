import * as React from 'react'

import { IStyle, ITheme } from 'office-ui-fabric-react/lib/Styling'
import { IRefObject, IStyleFunctionOrObject } from 'office-ui-fabric-react/lib/Utilities'

export interface ITile {}

export interface ITileProps extends React.Props<HTMLDivElement> {
  background?: keyof ITheme['palette']

  /* REQUIRED */
  className?: string
  componentRef?: IRefObject<HTMLDivElement>
  styles?: IStyleFunctionOrObject<ITileStyleProps, ITileStyles>
  theme?: ITheme
}

export interface ITileStyleProps {
  background?: keyof ITheme['palette']

  /* REQUIRED */
  theme: ITheme
  className?: string
}

export interface ITileStyles {
  root: IStyle
}
