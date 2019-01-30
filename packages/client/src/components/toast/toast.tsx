import { IMessageBarProps, MessageBar, MessageBarType } from 'office-ui-fabric-react'
import React from 'react'

export interface IToastProps {
  id: string
  message: string
  type?: MessageBarType

  onDismiss?: IMessageBarProps['onDismiss']
}

export const ToastType = MessageBarType

export const Toast: React.FC<IToastProps> = ({ message, type = MessageBarType.info, ...rest }) => {
  const isTruncated = typeof message === 'string' && message.length > 160

  return (
    <MessageBar truncated={isTruncated} messageBarType={type} isMultiline={!isTruncated} {...rest}>
      {message}
    </MessageBar>
  )
}
