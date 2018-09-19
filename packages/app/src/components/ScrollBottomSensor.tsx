import * as React from 'react'

type RequestIdleCallbackHandle = any
type RequestIdleCallbackOptions = {
  timeout: number
}
type RequestIdleCallbackDeadline = {
  readonly didTimeout: boolean
  timeRemaining: (() => number)
}

interface IModernWindow extends Window {
  requestIdleCallback: ((
    callback: ((deadline: RequestIdleCallbackDeadline) => void),
    opts?: RequestIdleCallbackOptions
  ) => RequestIdleCallbackHandle)
}

const requestIdleCallbackPolyfill: IModernWindow['requestIdleCallback'] = (callback, opts) =>
  setTimeout(
    () => callback({ didTimeout: true, timeRemaining: () => 0 }),
    (opts && opts.timeout) || 250,
    { passive: true }
  )

export interface ScrollBottomSensorProps {
  onTrigger: () => any
  rate?: number
  triggerOffsetPercent?: number
  triggerOffsetPx?: number
}

export class ScrollBottomSensor extends React.Component<ScrollBottomSensorProps> {
  private _scrollListener
  private _timer

  componentDidMount() {
    this._scrollListener = window.addEventListener('scroll', this.throttle, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._scrollListener)
  }

  throttle = () => {
    console.log('event.listened', 'timer:', this._timer)
    const requestIdleCallback =
      (window as IModernWindow).requestIdleCallback || requestIdleCallbackPolyfill

    if (!this._timer) {
      console.log('set timeout')
      this._timer = requestIdleCallback(
        () => {
          this.handler()
          this._timer = null
          console.log('clear timeout')
        },
        { timeout: this.props.rate || 250 }
      )
    }
  }

  handler = () => {
    const pageHeight = document.documentElement.offsetHeight
    const windowHeight = window.innerHeight

    const scrollPosition =
      window.scrollY ||
      window.pageYOffset ||
      document.body.scrollTop +
        ((document.documentElement && document.documentElement.scrollTop) || 0)

    const predicatePx =
      windowHeight + scrollPosition >= pageHeight - (this.props.triggerOffsetPx || 0)
    const predicatePercent =
      windowHeight + scrollPosition >= pageHeight * (1 - (this.props.triggerOffsetPercent || 0))
    console.log('predicate px', predicatePx)

    if (
      (this.props.triggerOffsetPx && predicatePx) ||
      (this.props.triggerOffsetPercent && predicatePercent)
    ) {
      console.log('fire')
      this.props.onTrigger()
    }
  }

  render() {
    return null
  }
}
