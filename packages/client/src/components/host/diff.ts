import { applyChange, diff } from 'deep-diff'
import { getIn, mutableSetValueIn, recursiveTransform, tryGetIn } from '../../utils'

export const diffAutoUpdataData = <Value>(prev: Value, next: Value) => {
  const updateDiffs = diff<Value, Value>(prev, next, (path, key) => {
    return ['__typename', 'id', 'createdAt', 'updatedAt', 'deletedAt'].includes(key)
  })

  if (!updateDiffs) {
    return { queryData: undefined, updateData: undefined }
  }

  const queryData: Partial<Value> | undefined = {}

  // reverse for correct array diffs update
  updateDiffs.reverse().forEach(change => {
    const path = change.path

    if (path) {
      const dir = path.slice(0, -1)
      const el = path.slice(-1)[0]

      const isScalar = (value: any) =>
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean' ||
        value === null

      // is valid type (to catch relations)
      const isValidType = (() => {
        if (change.kind === 'A') {
          if (change.item.kind === 'N') {
            return isScalar(change.item.rhs)
          }
          if (change.item.kind === 'E') {
            return isScalar(change.item.lhs) && isScalar(change.item.rhs)
          }
          if (change.item.kind === 'D') {
            return isScalar(change.item.lhs)
          }

          return false
        }

        const value = getIn(next, ...path) as any

        // scalar prop update
        if (path.length === 1 && isScalar(value)) {
          return true
        }

        // single array scalar change
        if (path.length === 2 && typeof el === 'number' && isScalar(value)) {
          return true
        }

        return false
      })()

      if (isValidType) {
        // single array element change
        // without checking for other edits on array or because they would be reported as 'A' chnage
        if (typeof el === 'number') {
          mutableSetValueIn(queryData, getIn(prev, ...dir), dir)
        }

        // multiple array element changes
        if (change.kind === 'A') {
          const isTouched = !!tryGetIn(queryData, ...path)
          if (!isTouched) {
            mutableSetValueIn(queryData, getIn(prev, ...path), path)
          }

          applyChange(queryData, undefined, { ...change.item, path: [...path, change.index] })
        }

        applyChange(queryData, undefined, change)
      } else {
        console.log('host update action diff: skipping change', change)
      }
    }
  })

  const updateData = recursiveTransform(queryData, [], (value, path) => {
    // just set {} all arrays
    if (Array.isArray(value)) {
      return { set: value }
    }

    return value
  })

  return { queryData, updateData }
}
