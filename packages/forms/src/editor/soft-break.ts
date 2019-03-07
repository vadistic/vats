import React from 'react'
import { EventHook } from 'slate-react'

export const SoftBreak = (options = {}) => {
  const onKeyDown: EventHook = (event, editor, next) => {
    const _event = (event as unknown) as React.KeyboardEvent

    if (_event.key === 'Enter') {
      editor.insertText('\n')
    } else {
      next()
    }
  }

  return {
    onKeyDown,
  }
}
