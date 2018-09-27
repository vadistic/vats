import * as React from 'react'

import { Link } from 'office-ui-fabric-react/lib/Link'
import {
  BaseComponent,
  classNamesFunction,
  customizable,
  styled,
} from 'office-ui-fabric-react/lib/Utilities'

import { getStyles } from './Tag.styles'
import { ITagProps, ITagStyleProps, ITagStyles } from './Tag.types'

const getClassNames = classNamesFunction<ITagStyleProps, ITagStyles>()

export interface ITagState {}

export class TagBase extends BaseComponent<ITagProps, ITagState> {
  constructor(props: ITagProps) {
    super(props)
  }

  public render(): JSX.Element {
    const { className, styles, theme, children, label, hasHashtag, ...rest } = this.props

    const classNames = getClassNames(styles, { theme: theme!, className })

    return (
      <Link className={classNames.root} {...rest} tabIndex={-1} data-is-focusable={false}>
        {hasHashtag ? `#${label}` : label}
      </Link>
    )
  }
}

export const Tag = styled<ITagProps, ITagStyleProps, ITagStyles>(TagBase, getStyles, undefined, {
  scope: 'Tag',
})
