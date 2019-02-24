import React from 'react'
import { useEditableContext } from '../editable'

export const DisplayForm: React.FC<JSX.IntrinsicElements['form']> = ({ children, ...rest }) => {
  const { editable } = useEditableContext()

  if (editable) {
    return (
      <form
        onReset={ev => {
          console.log('form html reset')
          ev.preventDefault()
          /* noop */
        }}
        onSubmit={ev => {
          console.log('form html submit')
          ev.preventDefault()
          /* noop */
        }}
        {...rest}
      >
        {children}
      </form>
    )
  }

  return <>{children}</>
}
