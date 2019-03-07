import React, { useEffect, useRef, useState } from 'react'
// @ts-ignore
import Plain from 'slate-plain-serializer'
import { Editor, EditorProps } from 'slate-react'
import { MarkdownPlugin } from './markdown-plugin'
import { SoftBreakPlugin } from './soft-break-plugin'

// TODO: better example
// https://github.com/withspectrum/slate-markdown

export interface MarkdownEditorProps {
  initialValue?: string
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
  placeholder?: string
  editorRef?: React.RefObject<Editor>
  editorProps?: EditorProps
}

const plugins = [SoftBreakPlugin(), MarkdownPlugin()]

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

  // focus & selection will be lost on controlled updates not matching text
  // but thats the best I can do :<
  // relevant: https://github.com/ianstormtaylor/slate/issues/1627
  useEffect(() => {
    if (props.value && props.value !== state.value.document.text) {
      setState({ ...state, value: Plain.deserialize(props.value) })
    }
  }, [props.value])

  return (
    <Editor
      ref={ref}
      value={state.value}
      readOnly={props.disabled}
      onChange={handleChange}
      autoCorrect={true}
      placeholder={props.placeholder}
      plugins={plugins}
      autoFocus={true}
      {...(props.editorProps ? props.editorProps : {})}
    >
      <div>{props.children}</div>
    </Editor>
  )
}
