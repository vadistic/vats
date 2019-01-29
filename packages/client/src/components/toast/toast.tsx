import { MessageBar, MessageBarType } from 'office-ui-fabric-react'
import React from 'react'

export interface IToastProps {
  message: string
  type?: MessageBarType
}

export const ToastType = MessageBarType

export const Toast: React.FC<IToastProps> = ({ message, type = MessageBarType.info }) => {
  const isMultiline = message.length < 150
  return (
    <MessageBar messageBarType={type} truncated={true} isMultiline={isMultiline}>
      {message}
    </MessageBar>
  )
}
