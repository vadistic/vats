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

      const isValid =
        // non-nested prop updates or complex arr changes
        (typeof el === 'string' && dir.length === 0) ||
        // not nested single arr elements updates
        (typeof el === 'number' && dir.length === 1 && typeof dir[0] === 'string')

      if (!isValid) {
        throw Error('Autoupdate cannot update relations')
      }

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
