import * as React from 'react'

import { IStyle, ITheme } from 'office-ui-fabric-react/lib/Styling'
import { IRefObject, IStyleFunctionOrObject } from 'office-ui-fabric-react/lib/Utilities'

import { TagFragment } from './generated/TagFragment'
import { ITagStyleProps, ITagStyles } from './Tag.types'

export interface ITagGroup {}

export type TTags = NonNullable<TagFragment['tags']>
export type TTag = TTags[number]

export interface ITagGroupProps extends React.Props<HTMLDivElement> {
  tags: TTags
  wrap?: boolean
  onTagClick?: (item: TTag) => void
  /* REQUIRED */
  className?: string
  componentRef?: IRefObject<HTMLDivElement>
  styles?: IStyleFunctionOrObject<ITagGroupStyleProps, ITagGroupStyles>
  theme?: ITheme
}

export interface ITagGroupStyleProps {
  wrap?: boolean
  /* REQUIRED */
  theme: ITheme
  className?: string
}

export interface ITagGroupStyles {
  root: IStyle
  subComponentStyles: {
    tag: IStyleFunctionOrObject<ITagStyleProps, ITagStyles>
  }
}
