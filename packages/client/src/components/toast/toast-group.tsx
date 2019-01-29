import { css } from '@emotion/core'
import React from 'react'
import { IToastProps, Toast } from './toast'

export interface IToastGroupProps {
  items: IToastProps[]
}

export const toastGroupStyles = css`
  position: absolute;
`

export const ToastGroup: React.FC<IToastGroupProps> = ({ items }) => {
  return (
    <div css={toastGroupStyles}>
      {items.map(item => (
        <Toast {...item} key={item.message.substr(0, 20)} />
      ))}
    </div>
  )
}
