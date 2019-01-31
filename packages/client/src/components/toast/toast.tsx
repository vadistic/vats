import { IMessageBarProps, MessageBar, MessageBarType } from 'office-ui-fabric-react'
import React from 'react'
import { Toast as GraphqlToast, ToastType } from '../../generated/queries'

export type ToastItem = GraphqlToast

export interface IToastProps {
  onDismiss?: IMessageBarProps['onDismiss']
  item: ToastItem
}

export { ToastType }

export const ToastTypeMap = {
  [ToastType.SUCCESS]: MessageBarType.success,
  [ToastType.INFO]: MessageBarType.info,
  [ToastType.BLOCKED]: MessageBarType.blocked,
  [ToastType.WARNING]: MessageBarType.warning,
  [ToastType.ERROR]: MessageBarType.error,
  [ToastType.SEVERE_WARNING]: MessageBarType.severeWarning,
}

export const Toast: React.FC<IToastProps> = ({ item: { message, type }, ...rest }) => {
  const isTruncated = typeof message === 'string' && message.length > 160

  return (
    <MessageBar
      truncated={isTruncated}
      messageBarType={ToastTypeMap[type]}
      isMultiline={!isTruncated}
      {...rest}
    >
      {message}
    </MessageBar>
  )
}
