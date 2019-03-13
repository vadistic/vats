import { applyChange, Diff } from 'deep-diff'
import { isNonNested, isNonNestedElement, UpdateDiffOptions } from './update'

/*
 * switch change
 * | N (single arr el added) => rhs isScalar && isNonNestedElement
 * | E (property edited) => lhs & rhs isScalar && isNonNested
 * | D (single arr el removed) => lhs isScalar && isNonNestedElement
 * | A (multi arr edits) => isNonNested
 *    | N => rhs isScalar
 *    | E => lsh & rhs isScalar
 *    | D => lhs isScalar
 *    | A => NEVER
 *
 */

const isScalarValue = (value: any) =>
  typeof value === 'string' ||
  typeof value === 'number' ||
  typeof value === 'boolean' ||
  value === null

export const isValidScalarChange = (change: Diff<any, any>) => {
  const path = change.path

  if (path) {
    if (change.kind === 'N') {
      return isScalarValue(change.rhs) && isNonNestedElement(path)
    }

    if (change.kind === 'E') {
      return (
        isScalarValue(change.lhs) &&
        isScalarValue(change.rhs) &&
        (isNonNested(path) || isNonNestedElement(path))
      )
    }

    if (change.kind === 'D') {
      return isScalarValue(change.lhs) && isNonNestedElement(path)
    }

    if (change.kind === 'A' && isNonNested(path)) {
      if (change.item.kind === 'N') {
        return isScalarValue(change.item.rhs)
      }
      if (change.item.kind === 'E') {
        return isScalarValue(change.item.lhs) && isScalarValue(change.item.rhs)
      }
      if (change.item.kind === 'D') {
        return isScalarValue(change.item.lhs)
      }

      // changes in arrays of arrays
      return false
    }
  }

  return false
}

export const applyScalarChange = (
  targetQueryData: any,
  targetUpdateData: any,
  change: Diff<any, any>,
  options: UpdateDiffOptions,
) => {
  const path = change.path
  const queryData = targetQueryData

  if (path) {
    // handle array elements create/delete
    if (change.kind === 'A') {
      applyChange(queryData, undefined, { ...change.item, path: [...path, change.index] })
    } else {
      // handle rest
      applyChange(queryData, undefined, change)
    }
  }

  return { queryData }
}
