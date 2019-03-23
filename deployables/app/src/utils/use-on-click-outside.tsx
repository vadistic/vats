import { AnyFunction } from '@vats/utils'
import { useEffect } from 'react'

const registeredCallbacks: Array<[React.RefObject<HTMLDivElement>, AnyFunction]> = []

const batchClickListener = async (ev: MouseEvent) => {
  for (const [ref, cb] of registeredCallbacks) {
    onClickOutside(ref, cb, ev)
  }
}

/*
 * I wanted it to be lightweight
 * but seems like node.contains is quite expensive
 */

const onClickOutside = (
  ref: React.RefObject<HTMLDivElement>,
  cb: (ev: MouseEvent) => any,
  ev: MouseEvent,
) => {
  if (ref.current && !ref.current.contains(ev.target as any)) {
    cb(ev)
  }
}

export const useOnClickOutside = (
  ref: React.RefObject<HTMLDivElement>,
  cb: (ev: MouseEvent) => any,
) => {
  useEffect(() => {
    if (registeredCallbacks.length === 0) {
      document.addEventListener('mousedown', batchClickListener, false)
    }

    registeredCallbacks.push([ref, cb])

    return () => {
      const i = registeredCallbacks.findIndex(el => el[0] === ref)
      registeredCallbacks.splice(i, 1)

      if (registeredCallbacks.length === 0) {
        document.removeEventListener('mousedown', batchClickListener, false)
      }
    }
  })
}
