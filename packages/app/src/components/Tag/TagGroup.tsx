import * as React from 'react'

import { BaseComponent, classNamesFunction, styled } from 'office-ui-fabric-react/lib/Utilities'

import { Tag } from './Tag'
import { getStyles } from './TagGroup.styles'
import { ITagGroupProps, ITagGroupStyleProps, ITagGroupStyles, TTag, TTags } from './TagGroup.types'

const getClassNames = classNamesFunction<ITagGroupStyleProps, ITagGroupStyles>()

export interface ITagGroupState {
  dragging: boolean
}

export class TagGroupBase extends BaseComponent<ITagGroupProps, ITagGroupState> {
  constructor(props: ITagGroupProps) {
    super(props)
  }

  public state = { dragging: false }

  private _rootRef = React.createRef<HTMLDivElement>()

  private _onDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    this.setState({ dragging: true })

    console.log('dragstart: clientX', e.clientX)

    document.addEventListener('mousemove', this._onDrag)
    document.addEventListener('mouseup', this._onDragEnd)
  }

  private _onDrag = (e: MouseEvent) => {
    e.preventDefault()
    if (this.state.dragging) {
      const domNode = this._rootRef.current
      if (domNode) {
        domNode.scrollBy({ left: -1 * e.movementX })
      }
    }
  }

  private _onDragEnd = (e: MouseEvent) => {
    this.setState({ dragging: false })
    document.removeEventListener('mousemove', this._onDrag)
    document.removeEventListener('mouseup', this._onDragEnd)
  }

  private _onTagClick = (tag: TTag) => {
    const { onTagClick } = this.props
    return onTagClick ? () => onTagClick(tag) : undefined
  }

  public render(): JSX.Element {
    const {
      className,
      styles,
      theme,
      children,
      tags,
      onTagClick,
      wrap = true,
      ...rest
    } = this.props

    const classNames = getClassNames(styles, { theme: theme!, className, wrap })

    const renderTags = (_tags: TTags) =>
      _tags.map(tag => (
        <Tag
          key={tag.id}
          styles={classNames.subComponentStyles.tag}
          onClick={this._onTagClick(tag)}
          label={tag.label}
          hasHashtag={true}
        />
      ))

    return (
      <div
        onMouseDown={wrap ? this._onDragStart : undefined}
        className={classNames.root}
        ref={this._rootRef}
        {...rest}
      >
        {renderTags(tags)}
      </div>
    )
  }
}

export const TagGroup = styled<ITagGroupProps, ITagGroupStyleProps, ITagGroupStyles>(
  TagGroupBase,
  getStyles,
  undefined,
  {
    scope: 'TagGroup',
  }
)
