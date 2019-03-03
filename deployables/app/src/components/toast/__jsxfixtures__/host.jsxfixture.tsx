import gql from 'graphql-tag'
import React, { useEffect } from 'react'
import { useMutation } from 'react-apollo-hooks'
import {
  ToastHostFixtureMutation,
  ToastHostFixtureMutationVariables,
  ToastType,
} from '../../../generated/queries'
import { ToastHost } from '../toast-host'

const toastData = {
  message: 'Hello World',
  type: ToastType.SUCCESS,
}

export const ToastHostFixture: React.FC = () => {
  let timer: number | undefined

  const sendToast = useMutation<ToastHostFixtureMutation, ToastHostFixtureMutationVariables>(
    toastHostFixtureMutation,
  )

  useEffect(() => {
    timer = window.setInterval(() => {
      sendToast({ variables: { data: toastData } })
    }, 6000)

    return () => {
      window.clearInterval(timer)
    }
  })

  return <ToastHost />
}

export const toastHostFixtureMutation = gql`
  mutation ToastHostFixtureMutation($data: ToastInput!) {
    createToast(data: $data) @client {
      id
      createdAt
      message
      type
    }
  }
`
export default <ToastHostFixture />
