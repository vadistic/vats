import React from 'react'
import { ToastType } from '../toast'
import { IToastGroupProps, ToastGroup } from '../toast-group'

const items: IToastGroupProps['items'] = [
  {
    type: ToastType.info,
    message: `Very short info`,
  },
]

const mock = {
  items,
}

export const ToastGroupFixture: React.FC = () => {
  return <ToastGroup items={mock.items} />
}

export default <ToastGroupFixture />
