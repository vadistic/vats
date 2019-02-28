import { css, keyframes } from '@emotion/core'
import { ActionButton } from 'office-ui-fabric-react'
import React, { useEffect, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Theme } from '../../styles'
import { Toast, ToastItem } from './toast'

export interface ToastGroupProps {
  items: ToastItem[]
  timeout?: number
  max?: number
}

// TODO: make reusable animation theme variables
const toastClassName = 'toast'

const slideIn = keyframes`
  from {
    opacity: 0.01;
    transform: translateY(99%)
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const toastAnimationDuration = 800
const toastAnimationStyles = css`
  .${toastClassName}-enter-active {
    animation-name: ${slideIn};
    animation-timing-function: ease-in;
    animation-duration: ${toastAnimationDuration}ms;
  }

  .${toastClassName}-exit-active {
    animation-name: ${fadeOut};
    animation-timing-function: ease-out;
    animation-duration: ${toastAnimationDuration}ms;
  }
`

const toastGroupStyles = (theme: Theme) => css`
  position: absolute;
  right: ${theme.spacing.s1};
  bottom: ${theme.spacing.s1};

  width: ${theme.sizes.ml};

  display: flex;
  flex-direction: column;

  .${toastClassName} {
    margin: ${theme.spacing.s1};
  }

  .ms-Button {
    align-self: flex-end;
  }

  ${toastAnimationStyles}
`
export const ToastGroup: React.FC<ToastGroupProps> = ({ items, timeout = 5000, max = 8 }) => {
  const [displayItems, setDisplayItems] = useState([] as ToastItem[])
  const [prevItems, setPrevItems] = useState([] as ToastItem[])

  // not in state to prevent rerender
  let timer: number | undefined
  let holdTimer: number | undefined

  const idBlacklist = [...displayItems, ...prevItems].map(item => item.id)
  const itemsDiff = items.filter(item => !idBlacklist.includes(item.id))

  // received some unique toasts
  if (itemsDiff.length > 0) {
    // slice to max and prevent toasts to heaven
    setDisplayItems(prev => [...prev, ...itemsDiff].slice(-max))
    // remember last props
    setPrevItems(items)
  }

  useEffect(() => {
    setDismissTimeout()

    return () => {
      window.clearTimeout(timer)
      window.clearTimeout(holdTimer)
    }
  })

  const holdDismissTimeout = () => {
    // this for throttle
    if (timer) {
      window.clearTimeout(timer)
      timer = undefined

      holdTimer = window.setTimeout(() => {
        setDismissTimeout()
      }, timeout)
    }
  }

  const setDismissTimeout = () => {
    // remove item after $timeout seconds
    timer = window.setTimeout(() => {
      const [first, ...rest] = displayItems
      if (first) {
        setDisplayItems(rest)
      }
    }, timeout)
  }

  const dismissItems = () => setDisplayItems([])

  const dismissItem = (dismissedItem: ToastItem) => () => {
    setDisplayItems(displayItems.filter(item => item.id !== dismissedItem.id))
  }

  return (
    <div css={toastGroupStyles} onMouseOver={holdDismissTimeout}>
      <TransitionGroup component={null}>
        {displayItems.map(item => (
          <CSSTransition
            timeout={toastAnimationDuration}
            in={true}
            unmountOnExit={true}
            classNames={toastClassName}
            key={item.id}
          >
            <div className={toastClassName}>
              <Toast item={item} key={item.id} onDismiss={dismissItem(item)} />
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>

      <ActionButton onClick={dismissItems}>Dismiss</ActionButton>
    </div>
  )
}
