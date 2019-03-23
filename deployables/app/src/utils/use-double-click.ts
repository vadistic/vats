import { useCallback, useRef } from 'react'

const DOUBLE_CLICK_MS = 500

export const useDoubleClick = (handler: (ev: React.MouseEvent) => void, deps: any[] = []) => {
  const timeStampRef = useRef<number | undefined>(undefined)

  return useCallback((ev: React.MouseEvent) => {
    if (timeStampRef.current && ev.timeStamp - timeStampRef.current < DOUBLE_CLICK_MS) {
      timeStampRef.current = undefined
      handler(ev)
    } else {
      timeStampRef.current = ev.timeStamp
    }
  }, deps)
}

export const useAsyncDoubleClick = (
  onDouble: React.MouseEventHandler,
  onSingle?: React.MouseEventHandler,
) => {
  const clickCount = useRef<number>(0)

  const asyncDoubleClick = async (ev: React.MouseEvent) => {
    if (clickCount.current === 0) {
      const shallowEventCopy = { ...ev }

      clickCount.current = 1

      setTimeout(() => {
        // on triple click count as single!
        if (clickCount.current % 2 === 1) {
          onDouble(shallowEventCopy)
        } else if (onSingle) {
          onSingle(shallowEventCopy)
        }

        clickCount.current = 0
      }, DOUBLE_CLICK_MS)
    }

    if (clickCount.current !== 0) {
      clickCount.current += 1
    }
  }

  return asyncDoubleClick
}

export const useDoubleClickSensor = () => {
  const timeStampRef = useRef<number | undefined>(undefined)

  const isDoubeClick = (ev: React.MouseEvent) => {
    if (timeStampRef.current && ev.timeStamp - timeStampRef.current < DOUBLE_CLICK_MS) {
      timeStampRef.current = undefined
      return true
    } else {
      timeStampRef.current = ev.timeStamp
      return false
    }
  }

  return isDoubeClick
}
