import React, { useEffect, useMemo, useRef, useState } from 'react'
// @ts-ignore
import Plain from 'slate-plain-serializer'
import { Editor, EditorProps } from 'slate-react'
import { PrismMarkdown } from './prism-markdown'
import { SoftBreak } from './soft-break'

export interface MarkdownEditorProps {
  initialValue?: string
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
  placeholder?: string
  editorRef?: React.RefObject<Editor>
  editorProps?: EditorProps
}

const plugins = [SoftBreak()]

export const MarkdownEditor: React.FC<MarkdownEditorProps> = props => {
  const ownRef = useRef<Editor>(null)
  const ref = props.editorRef || ownRef

  const isControlled = !!props.value

  const [state, setState] = useState({
    value: Plain.deserialize((isControlled ? props.value : props.initialValue) || ''),
  })

  const handleChange: EditorProps['onChange'] = change => {
    if (props.onChange && props.value && props.value !== state.value.document.text) {
      props.onChange(change.value.document.text)
    }

    setState({ ...state, value: change.value })
  }

  // focus & selection will be lost on controlled updates, but thats best I can do
  // relevant: https://github.com/ianstormtaylor/slate/issues/1627
  useEffect(() => {
    if (props.value && props.value !== state.value.document.text) {
      setState({ ...state, value: Plain.deserialize(props.value) })
    }
  }, [props.value])

  const renderMark: EditorProps['renderMark'] = ({ mark, attributes, children }, editor, next) => {
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
        return (
          <span
            {...attributes}
            style={{
              fontWeight: 'bold',
              fontSize: '20px',
              margin: '20px 0 10px 0',
              display: 'inline-block',
            }}
          >
            {children}
          </span>
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

  const decorateNode: EditorProps['decorateNode'] = (node, editor, next) => {
    const others = next() || []
    if (node.object !== 'block') {
      return others
    }

    const content = node.text
    const texts = node.getTexts().toArray()
    const grammar = PrismMarkdown.languages.markdown

    const tokens = PrismMarkdown.tokenize(content, grammar)
    const decorations = []
    let startText = texts.shift()
    let endText = startText
    let startOffset = 0
    let endOffset = 0
    let start = 0

    const getLength = (token: any) => {
      if (typeof token === 'string') {
        return token.length
      } else if (typeof token.content === 'string') {
        return token.content.length
      } else {
        return token.content.reduce((l: number, t: any) => l + getLength(t), 0)
      }
    }

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

      if (typeof token !== 'string' && endText) {
        const dec = {
          anchor: {
            key: startText.key,
            offset: startOffset,
          },
          focus: {
            key: endText.key,
            offset: endOffset,
          },
          mark: {
            type: token.type,
          },
        }

        decorations.push(dec)
      }

      start = end
    }

    return [...others, ...decorations]
  }

  return (
    <Editor
      ref={ref}
      value={state.value}
      readOnly={props.disabled}
      onChange={handleChange}
      autoCorrect={true}
      placeholder={props.placeholder}
      renderMark={renderMark}
      decorateNode={decorateNode}
      plugins={plugins}
      autoFocus={true}
      {...(props.editorProps ? props.editorProps : {})}
    >
      <div>{props.children}</div>
    </Editor>
  )
}
