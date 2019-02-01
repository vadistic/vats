import { css } from '@emotion/core'
import { Spinner, SpinnerSize } from 'office-ui-fabric-react'
import React, { useEffect, useState } from 'react'
import { ITheme } from '../../styles'

export interface ILoadingProps {
  label: string
}

export const loadingStyles = (theme: ITheme) => css`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;

  & > div {
    width: ${theme.sizes.ml};
  }
`

export const Loading: React.FC<ILoadingProps> = ({ label: initalLabel }) => {
  const [label, setLabel] = useState(initalLabel)
  const [messagesCount, setMessagesCount] = useState(0)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (messagesCount === 0) {
        setMessagesCount(1)
        setLabel("It's taking a bit longer...")
      }

      if (messagesCount === 1) {
        setLabel(`¯\\_(ツ)_/¯`)
      }
    }, 4000)

    return () => {
      window.clearTimeout(timer)
    }
  })

  return (
    <div css={loadingStyles}>
      <Spinner label={label} size={SpinnerSize.large} labelPosition="bottom" />
    </div>
  )
}
