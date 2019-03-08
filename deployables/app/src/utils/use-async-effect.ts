import { useEffect } from 'react'

export const useAsyncEffect = (fn: () => Promise<void | (() => void)>, deps?: ReadonlyArray<any>) =>
  useEffect(() => void fn(), deps)
