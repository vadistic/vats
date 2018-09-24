import * as React from 'react'

import { ILinkStyleProps, ILinkStyles } from 'office-ui-fabric-react/lib/Link'
import { IStyle, ITheme } from 'office-ui-fabric-react/lib/Styling'
import { IRefObject, IStyleFunctionOrObject } from 'office-ui-fabric-react/lib/Utilities'

export interface ITag {}

export interface ITagProps extends React.HTMLAttributes<HTMLSpanElement> {
  label: string
  hasHashtag?: boolean
  /* REQUIRED */
  className?: string
  componentRef?: IRefObject<HTMLDivElement>
  styles?: IStyleFunctionOrObject<ITagStyleProps, ITagStyles>
  theme?: ITheme
}

export interface ITagStyleProps {
  /* REQUIRED */
  theme: ITheme
  className?: string
}

export interface ITagStyles {
  root: IStyle
}
