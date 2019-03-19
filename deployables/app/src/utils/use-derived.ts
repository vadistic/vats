import { shallowEqual } from '@vats/utils'
import { useRef } from 'react'

/**
 * Like useMemo but with guaranteed ref value
 * But not like useMemo when used for effects (no value returned)!
 */
export const useDerived = <T extends Exclude<any, null | undefined>>(
  input: () => T,
  deps: any[] = [],
) => {
  const ref = useRef<T | null>(null)
  const prevDepsRef = useRef<any[]>([])

  if (
    ref.current === undefined ||
    ref.current === null ||
    !shallowEqual(prevDepsRef.current, deps)
  ) {
    console.log(ref.current)
    prevDepsRef.current = deps
    ref.current = input()
  }

  return ref.current
}
