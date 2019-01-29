import React, { useEffect, useState } from 'react'
import { ToastType } from '../toast'
import { IToastGroupProps, ToastGroup } from '../toast-group'

const items: IToastGroupProps['items'] = [
  {
    id: '1',
    type: ToastType.success,
    message: `Very short info`,
  },
  {
    id: '2',
    type: ToastType.info,
    message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Few more characters to enter new line.`,
  },
  {
    id: '4',
    type: ToastType.blocked,
    message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    id: '6',
    type: ToastType.severeWarning,
    message:
      `Testing for extreme length!. Lorem Ipsum is simply dummy text of the printing and typesetting industry.` +
      ` Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,` +
      `when an unknown printer took a galley of type and scrambled it to make a type specimen book.` +
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry.` +
      ` Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,` +
      `when an unknown printer took a galley of type and scrambled it to make a type specimen book.` +
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry.` +
      ` Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,` +
      `when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
]

const nextItems = [
  {
    id: '3',
    type: ToastType.warning,
    message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  },

  {
    id: '5',
    type: ToastType.error,
    message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
]

export const ToastGroupFixture: React.FC = () => {
  const [update, setUpdate] = useState(false)
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setUpdate(true)
    }, 7000)

    return () => {
      window.clearTimeout(timer)
    }
  })
  return <ToastGroup items={update ? nextItems : items} />
}

export default <ToastGroupFixture />
