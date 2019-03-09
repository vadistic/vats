import Prism from 'prismjs'
import { Plugin } from 'slate-react'

// tslint:disable-next-line: no-submodule-imports
import 'prismjs/components/prism-markdown'
import { Data, DecorationProperties, Mark, Point } from 'slate'

export const MarkdownPlugin = (opts?: any): Plugin => {
  return {
    renderMark,
    decorateNode,
  }
}

const renderMark: Plugin['renderMark'] = ({ mark, attributes, children }, editor, next) => {
  switch (mark.type) {
    case 'bold':
      return <strong {...attributes}>{children}</strong>

    case 'code':
      return <code {...attributes}>{children}</code>

    case 'italic':
      return <em {...attributes}>{children}</em>

    case 'underlined':
      return <u {...attributes}>{children}</u>

    case 'title': {
      const Tag = ('h' + mark.data.get('level')) as 'h1'
      return (
        <Tag
          {...attributes}
          style={{
            fontWeight: 'bold',
            margin: '20px 0 10px 0',
            display: 'inline-block',
          }}
        >
          {children}
        </Tag>
      )
    }

    case 'punctuation': {
      return (
        <span {...attributes} style={{ opacity: 0.2 }}>
          {children}
        </span>
      )
    }

    case 'list': {
      return (
        <span
          {...attributes}
          style={{
            paddingLeft: '10px',
            lineHeight: '10px',
            fontSize: '20px',
          }}
        >
          {children}
        </span>
      )
    }

    case 'hr': {
      return (
        <span
          {...attributes}
          style={{
            borderBottom: '2px solid #000',
            display: 'block',
            opacity: 0.2,
          }}
        >
          {children}
        </span>
      )
    }

    default: {
      return next()
    }
  }
}

const decorateNode: Plugin['decorateNode'] = (node, editor, next) => {
  const others = next() || []
  if (node.object !== 'block') {
    return others
  }
  const value = node.text
  const language = 'markdown'
  const grammar = Prism.languages[language]
  const tokens = Prism.tokenize(value, grammar)

  const texts = node.getTexts().toArray()

  const getLength = (token: any) => {
    if (typeof token === 'string') {
      return token.length
    } else if (typeof token.content === 'string') {
      return token.content.length
    } else {
      return token.content.reduce((l: number, t: any) => l + getLength(t), 0)
    }
  }

  const decorations = []

  let startText = texts.shift()
  let endText = startText
  let startOffset = 0
  let endOffset = 0
  let start = 0

  for (const token of tokens) {
    startText = endText
    startOffset = endOffset

    if (!startText) {
      break
    }

    const length = getLength(token)
    const end = start + length

    let available = startText.text.length - startOffset
    let remaining = length

    endOffset = startOffset + remaining

    while (available < remaining) {
      endText = texts.shift()

      if (!endText) {
        break
      }

      remaining = length - available
      available = endText.text.length
      endOffset = remaining
    }

    if (typeof token !== 'string') {
      const { type, content } = token
      let level = 0

      if (type === 'title' && Array.isArray(content)) {
        content.forEach(childNode => {
          if (typeof childNode !== 'string' && childNode.type === 'punctuation') {
            level = Math.min(6, (childNode.content as string).length)
          }
        })
      }

      const dec: DecorationProperties = {
        anchor: Point.create({
          key: startText.key,
          offset: startOffset,
        }),
        mark: Mark.create({
          type: token.type,
          data: Data.create({
            level,
          }),
        }),
      }

      if (endText) {
        dec.focus = Point.create({
          key: endText.key,
          offset: endOffset,
        })
      }

      decorations.push(dec)
    }

    start = end
  }

  return [...others, ...decorations]
}
