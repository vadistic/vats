import React, { useEffect, useState } from 'react'
import { ToastItem, ToastType } from '../toast'
import { ToastGroup } from '../toast-group'

import uuid from 'uuid/v4'

const prevItemsData = [
  {
    type: ToastType.SUCCESS,
    message: `Very short info`,
  },
  {
    type: ToastType.INFO,
    message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Few more characters to enter new line.`,
  },
  {
    type: ToastType.BLOCKED,
    message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    type: ToastType.SEVERE_WARNING,
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

const nextItemsData = [
  {
    type: ToastType.WARNING,
    message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  },

  {
    type: ToastType.ERROR,
    message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
]

const makeItems = (items: typeof prevItemsData): ToastItem[] =>
  items.map(item => ({
    __typename: 'Toast' as 'Toast',
    id: uuid(),
    createdAt: new Date(),
    message: item.message,
    type: item.type,
  }))

const prevItems = makeItems(prevItemsData)
const nextItems = makeItems(nextItemsData)

export const ToastGroupFixture: React.FC = () => {
  const [update, setUpdate] = useState(false)
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setUpdate(true)
      window.clearTimeout(timer)
    }, 7000)

    return () => {
      window.clearTimeout(timer)
    }
  })
  return <ToastGroup items={update ? nextItems : prevItems} />
}

export default <ToastGroupFixture />
