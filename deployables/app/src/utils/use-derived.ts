import { shallowEqual } from '@vats/utils'
import { useRef } from 'react'

/**
 * Like useMemo but with guaranteed ref value
 */
export const useDerived = <T>(input: () => T, deps: any[] = []) => {
  const ref = useRef<T | null>(null)
  const prevDepsRef = useRef<any[]>([])

  if (!ref.current || !shallowEqual(prevDepsRef.current, deps)) {
    prevDepsRef.current = deps
    ref.current = input()
  }

  return ref.current
}
