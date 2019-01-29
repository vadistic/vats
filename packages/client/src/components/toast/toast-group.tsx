import { css, keyframes } from '@emotion/core'
import { ActionButton } from 'office-ui-fabric-react'
import React, { useEffect, useState } from 'react'
import { CSSTransition, Transition, TransitionGroup } from 'react-transition-group'
import { ITheme, IThemeProps } from '../../styles'
import { IToastProps, Toast } from './toast'

export interface IToastGroupProps {
  items: IToastProps[]
  timeout?: number
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

const toastGroupStyles = (theme: ITheme) => css`
  position: absolute;
  right: ${theme.spacing.s1};
  bottom: ${theme.spacing.s1};

  width: ${theme.sizes.l2};

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

export const ToastGroup: React.FC<IToastGroupProps> = ({ items: nextItems, timeout = 5000 }) => {
  const [items, setItems] = useState(nextItems)
  // state with last props (without removed elements)
  const [prevItems, setPrevItems] = useState(nextItems)

  const itemsDiff = nextItems.filter(
    nextItem => !prevItems.map(prevItem => prevItem.id).includes(nextItem.id),
  )

  // means component received new, unique props
  if (itemsDiff.length > 0) {
    setPrevItems(nextItems)
    setItems([...items, ...itemsDiff])
  }

  useEffect(() => {
    // remove item after $timeout seconds
    const timer = window.setTimeout(() => {
      const [first, ...rest] = items
      if (first) {
        setItems(rest)
      }
    }, timeout)

    return () => {
      window.clearTimeout(timer)
    }
  })

  const dismissItems = () => setItems([])

  const dismissItem = (dismissedItem: IToastProps) => () => {
    setItems(items.filter(item => item.id !== dismissedItem.id))
  }

  return (
    <div css={toastGroupStyles}>
      <TransitionGroup component={null}>
        {items.map(item => (
          <CSSTransition
            timeout={toastAnimationDuration}
            in={true}
            unmountOnExit={true}
            classNames={toastClassName}
            key={item.id}
          >
            <div className={toastClassName}>
              <Toast {...item} key={item.id} onDismiss={dismissItem(item)} />
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>

      <ActionButton onClick={dismissItems}>Dismiss</ActionButton>
    </div>
  )
}
