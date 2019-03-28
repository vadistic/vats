import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import { MarkdownEditor } from '../editor'

const initialValue =
  'Slate is flexible enough to add **decorations** that can format text based on its content. For example, this editor has **Markdown** preview decorations on it, to make it _dead_ simple to make an editor with built-in Markdown previewing.\n## Try it out!\nTry it out for yourself!'

const Fixture = () => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (val: string) => setValue(val)

  const reset = () => void setValue(initialValue)

  return (
    <div>
      <MarkdownEditor value={value} onChange={handleChange} />
      <button type="button" onClick={reset} style={{ marginTop: '50px' }}>
        Reset
      </button>
    </div>
  )
}

storiesOf('MarkdownEditor', module)
  .add('uncontrolled', () => <MarkdownEditor value={initialValue} />)
  .add('controlled', () => <Fixture />)
