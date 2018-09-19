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

export interface ScrollSensorProps {
  onTrigger: () => any
  rate?: number
  edge: 'top' | 'bottom'
  offsetFraction?: number
  offsetPx?: number
}

export class ScrollSensor extends React.Component<ScrollSensorProps> {
  private _scrollListener
  private _timer

  public componentDidMount() {
    this._scrollListener = window.addEventListener('scroll', this.throttle(this.handleScroll), {
      passive: true,
    })
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', this._scrollListener)
  }

  public throttle = (fn: () => any) => () => {
    const requestIdleCallback =
      (window as IModernWindow).requestIdleCallback || requestIdleCallbackPolyfill

    if (!this._timer) {
      this._timer = requestIdleCallback(
        () => {
          this._timer = null
          return fn()
        },
        { timeout: this.props.rate || 250 }
      )
    }
  }

  public handleScroll = () => {
    const pageHeight = document.documentElement.offsetHeight
    const windowHeight = window.innerHeight

    const scrollPosition =
      window.scrollY ||
      window.pageYOffset ||
      document.body.scrollTop +
        ((document.documentElement && document.documentElement.scrollTop) || 0)

    if (this.props.edge === 'top' && !this.props.offsetFraction) {
      const predicateTopPx = scrollPosition >= (this.props.offsetPx || 0)
      predicateTopPx && this.props.onTrigger()
    } else if (this.props.edge === 'top') {
      const predicateTopFraction = scrollPosition >= pageHeight * (this.props.offsetPx || 0)
      predicateTopFraction && this.props.onTrigger()
    } else if (this.props.edge === 'bottom' && !this.props.offsetFraction) {
      const predicateBottomPx =
        windowHeight + scrollPosition >= pageHeight - (this.props.offsetPx || 0)
      predicateBottomPx && this.props.onTrigger()
    } else if (this.props.edge === 'bottom') {
      const predicateBottomFraction =
        windowHeight + scrollPosition >= pageHeight * (1 - (this.props.offsetFraction || 0))
      predicateBottomFraction && this.props.onTrigger()
    }
  }

  render() {
    return null
  }
}
