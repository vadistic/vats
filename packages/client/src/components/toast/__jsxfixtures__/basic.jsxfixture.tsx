import React from 'react'
import { Toast, ToastItem, ToastType } from '../toast'

const data = {
  longMessage: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  shortMessage: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
}

const shared: any = {
  __typename: 'Toast',
  createdAt: new Date(),
}

export const ToastBasicFixture: React.FC = () => (
  <>
    <Toast
      item={{ ...shared, message: data.shortMessage, type: ToastType.SEVERE_WARNING, id: '1' }}
    />
    <Toast item={{ ...shared, message: data.longMessage, type: ToastType.INFO, id: '2' }} />
  </>
)

export default <ToastBasicFixture />
